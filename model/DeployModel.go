package model

import (
	"errors"

	"github.com/zhenorzz/goploy/core"
)

// Deploy mysql table for deploy
type Deploy struct {
	ID         uint32 `json:"id"`
	ProjectID  uint32 `json:"projectId"`
	Project    string `json:"project"`
	Branch     string `json:"branch"`
	Commit     string `json:"commit"`
	CommitSha  string `json:"commitSha"`
	ServerID   uint32 `json:"serverId"`
	ServerName string `json:"serverName"`
	Type       uint8  `json:"type"`
	Status     uint8  `json:"status"`
	CreateTime int64  `json:"createTime"`
	UpdateTime int64  `json:"updateTime"`
	Creator    string `json:"creator"`
	Editor     string `json:"editor"`
}

// Deploys is Deploy slice
type Deploys []Deploy

// AddRow add one row to table deploy and add id to deploy.ID
func (d *Deploy) AddRow() error {
	db := NewDB()
	result, err := db.Exec(
		"INSERT INTO deploy (project_id, branch, commit, commit_sha, server_id, type, status, create_time, update_time, creator, editor) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
		d.ProjectID,
		d.Branch,
		d.Commit,
		d.CommitSha,
		d.ServerID,
		d.Type,
		0,
		d.CreateTime,
		d.UpdateTime,
		core.GolbalUserID,
		0,
	)
	id, err := result.LastInsertId()
	d.ID = uint32(id)
	return err
}

// ChangeStatus for deploy
func (d *Deploy) ChangeStatus() error {
	db := NewDB()
	_, err := db.Exec(
		"UPDATE deploy SET status = ? where id = ?",
		d.Status,
		d.ID,
	)
	return err
}

// Publish will change the status to 2 and editor to GolbalUserID
func (d *Deploy) Publish() error {
	db := NewDB()
	_, err := db.Exec(
		"UPDATE deploy SET status = ?, editor = ? where id = ?",
		2,
		core.GolbalUserID,
		d.ID,
	)
	return err
}

// Query user row
func (d *Deploys) Query() error {
	db := NewDB()
	rows, err := db.Query(`SELECT 
		deploy.id, 
		deploy.project_id,
		project,
		deploy.branch, 
		deploy.commit, 
		deploy.commit_sha, 
		deploy.server_id, 
		server.name as server_name,
		deploy.type, 
		deploy.status, 
		deploy.create_time, 
		deploy.update_time,
		creator.name,
		COALESCE(editor.name, '') as name
		FROM deploy 
		LEFT JOIN project on project.id = deploy.project_id
		LEFT JOIN server on server.id = deploy.server_id
		LEFT JOIN user AS creator ON deploy.creator = creator.id
		LEFT JOIN user AS editor ON deploy.editor = editor.id
		`)
	if err != nil {
		return err
	}
	for rows.Next() {
		var deploy Deploy
		if err := rows.Scan(
			&deploy.ID,
			&deploy.ProjectID,
			&deploy.Project,
			&deploy.Branch,
			&deploy.Commit,
			&deploy.CommitSha,
			&deploy.ServerID,
			&deploy.ServerName,
			&deploy.Type,
			&deploy.Status,
			&deploy.CreateTime,
			&deploy.UpdateTime,
			&deploy.Creator,
			&deploy.Editor); err != nil {
			return err
		}
		*d = append(*d, deploy)
	}
	return nil
}

// QueryRow add deploy information to d *Deploy
func (d *Deploy) QueryRow() error {
	db := NewDB()
	err := db.QueryRow(`SELECT 
			project_id, 
			branch, 
			commit, 
			commit_sha, 
			server_id, 
			type, 
			status
		FROM deploy WHERE id = ?`, d.ID).Scan(
		&d.ProjectID,
		&d.Branch,
		&d.Commit,
		&d.CommitSha,
		&d.ServerID,
		&d.Type,
		&d.Status)
	if err != nil {
		return errors.New("数据查询失败")
	}
	return nil
}