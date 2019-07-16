package model

import (
	"errors"
)

// GitTrace mysql table for git trace
type GitTrace struct {
	ID            uint32 `json:"id"`
	ProjectID     uint32 `json:"projectId"`
	ProjectName   string `json:"projectName"`
	Detail        string `json:"detail"`
	State         uint8  `json:"state"`
	PublisherID   uint32 `json:"publisherId"`
	PublisherName string `json:"publisherName"`
	CreateTime    int64  `json:"createTime"`
	UpdateTime    int64  `json:"updateTime"`
}

// AddRow add one row to table deploy and add id to deploy.ID
func (gt GitTrace) AddRow() (uint32, error) {
	result, err := DB.Exec(
		"INSERT INTO git_trace (project_id, project_name, detail, state, publisher_id, publisher_name, create_time, update_time) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
		gt.ProjectID,
		gt.ProjectName,
		gt.Detail,
		gt.State,
		gt.PublisherID,
		gt.PublisherName,
		gt.CreateTime,
		gt.UpdateTime,
	)
	id, err := result.LastInsertId()
	return uint32(id), err
}

// QueryLatestRow add GitTrace information to gt *GitTrace
func (gt *GitTrace) QueryLatestRow(projectID uint32) error {
	err := DB.QueryRow(`SELECT 
	        id,
			project_id, 
			project_name, 
			detail, 
			state, 
			publisher_id, 
			publisher_name, 
			create_time, 
			update_time
		FROM git_trace WHERE project_id = ? ORDER BY id DESC Limit 1`, projectID).Scan(
		&gt.ID,
		&gt.ProjectID,
		&gt.ProjectName,
		&gt.Detail,
		&gt.State,
		&gt.PublisherID,
		&gt.PublisherName,
		&gt.CreateTime,
		&gt.UpdateTime)
	if err != nil {
		return errors.New("GitTrace.QueryLatestRow数据查询失败")
	}
	return nil
}
