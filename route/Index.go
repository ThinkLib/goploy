package route

import (
	"github.com/zhenorzz/goploy/controller"
	"github.com/zhenorzz/goploy/core"
	router "github.com/zhenorzz/goploy/core"
	"github.com/zhenorzz/goploy/middleware"
	"github.com/zhenorzz/goploy/ws"
)

// Init router
func Init() *router.Router {
	var rt = new(router.Router)
	// rt.Middleware(example)
	// no need to check login
	rt.RegisterWhiteList(map[string]struct{}{
		"/user/login":        {},
		"/user/isShowPhrase": {},
		"/deploy/webhook":    {},
	})
	// websocket route
	rt.Add("/ws/connect", router.GET, ws.GetHub().Connect)

	// user route
	rt.Add("/user/login", router.POST, controller.User{}.Login)
	rt.Add("/user/info", router.GET, controller.User{}.Info)
	rt.Add("/user/getList", router.GET, controller.User{}.GetList)
	rt.Add("/user/getTotal", router.GET, controller.User{}.GetTotal)
	rt.Add("/user/getOption", router.GET, controller.User{}.GetOption)
	rt.Add("/user/getCanBindProjectUser", router.GET, controller.User{}.GetCanBindProjectUser)
	rt.Add("/user/add", router.POST, controller.User{}.Add).Role(core.RoleAdmin)
	rt.Add("/user/edit", router.POST, controller.User{}.Edit).Role(core.RoleAdmin)
	rt.Add("/user/remove", router.DELETE, controller.User{}.Remove).Role(core.RoleAdmin)
	rt.Add("/user/changePassword", router.POST, controller.User{}.ChangePassword)

	// project route
	rt.Add("/project/getList", router.GET, controller.Project{}.GetList)
	rt.Add("/project/getTotal", router.GET, controller.Project{}.GetTotal)
	rt.Add("/project/getRemoteBranchList", router.GET, controller.Project{}.GetRemoteBranchList)
	rt.Add("/project/getOption", router.GET, controller.Project{}.GetOption).Roles([]string{core.RoleAdmin})
	rt.Add("/project/getBindServerList", router.GET, controller.Project{}.GetBindServerList)
	rt.Add("/project/getBindUserList", router.GET, controller.Project{}.GetBindUserList)
	rt.Add("/project/getBindProjectList", router.GET, controller.Project{}.GetBindProjectList).Roles([]string{core.RoleAdmin})
	rt.Add("/project/add", router.POST, controller.Project{}.Add).Roles([]string{core.RoleAdmin, core.RoleManager, core.RoleGroupManager})
	rt.Add("/project/edit", router.POST, controller.Project{}.Edit).Roles([]string{core.RoleAdmin, core.RoleManager, core.RoleGroupManager})
	rt.Add("/project/remove", router.DELETE, controller.Project{}.Remove).Roles([]string{core.RoleAdmin, core.RoleManager, core.RoleGroupManager})
	rt.Add("/project/addServer", router.POST, controller.Project{}.AddServer).Roles([]string{core.RoleAdmin, core.RoleManager, core.RoleGroupManager})
	rt.Add("/project/addUser", router.POST, controller.Project{}.AddUser).Roles([]string{core.RoleAdmin, core.RoleManager, core.RoleGroupManager})
	rt.Add("/project/removeProjectServer", router.DELETE, controller.Project{}.RemoveProjectServer).Roles([]string{core.RoleAdmin, core.RoleManager, core.RoleGroupManager})
	rt.Add("/project/removeProjectUser", router.DELETE, controller.Project{}.RemoveProjectUser).Roles([]string{core.RoleAdmin, core.RoleManager, core.RoleGroupManager})
	rt.Add("/project/addTask", router.POST, controller.Project{}.AddTask).Roles([]string{core.RoleAdmin, core.RoleManager, core.RoleGroupManager})
	rt.Add("/project/editTask", router.POST, controller.Project{}.EditTask).Roles([]string{core.RoleAdmin, core.RoleManager, core.RoleGroupManager})
	rt.Add("/project/removeTask", router.POST, controller.Project{}.RemoveTask).Roles([]string{core.RoleAdmin, core.RoleManager, core.RoleGroupManager})
	rt.Add("/project/getTaskList", router.GET, controller.Project{}.GetTaskList).Roles([]string{core.RoleAdmin, core.RoleManager, core.RoleGroupManager})

	//// deploy route
	rt.Add("/deploy/getList", router.GET, controller.Deploy{}.GetList)
	rt.Add("/deploy/getDetail", router.GET, controller.Deploy{}.GetDetail)
	rt.Add("/deploy/getCommitList", router.GET, controller.Deploy{}.GetCommitList)
	rt.Add("/deploy/getPreview", router.GET, controller.Deploy{}.GetPreview)
	rt.Add("/deploy/publish", router.POST, controller.Deploy{}.Publish, middleware.HasPublishAuth)
	rt.Add("/deploy/webhook", router.POST, controller.Deploy{}.Webhook, middleware.FilterEvent)

	// server route
	rt.Add("/server/getList", router.GET, controller.Server{}.GetList)
	rt.Add("/server/getTotal", router.GET, controller.Server{}.GetTotal)
	rt.Add("/server/getInstallPreview", router.GET, controller.Server{}.GetInstallPreview)
	rt.Add("/server/getInstallList", router.GET, controller.Server{}.GetInstallList)
	rt.Add("/server/getOption", router.GET, controller.Server{}.GetOption)
	rt.Add("/server/check", router.POST, controller.Server{}.Check).Roles([]string{core.RoleAdmin, core.RoleManager, core.RoleGroupManager})
	rt.Add("/server/add", router.POST, controller.Server{}.Add).Roles([]string{core.RoleAdmin, core.RoleManager, core.RoleGroupManager})
	rt.Add("/server/edit", router.POST, controller.Server{}.Edit).Roles([]string{core.RoleAdmin, core.RoleManager, core.RoleGroupManager})
	rt.Add("/server/remove", router.DELETE, controller.Server{}.Remove).Roles([]string{core.RoleAdmin, core.RoleManager, core.RoleGroupManager})
	rt.Add("/server/install", router.POST, controller.Server{}.Install).Roles([]string{core.RoleAdmin, core.RoleManager, core.RoleGroupManager})

	// template route
	rt.Add("/template/getList", router.GET, controller.Template{}.GetList)
	rt.Add("/template/getTotal", router.GET, controller.Template{}.GetTotal)
	rt.Add("/template/getOption", router.GET, controller.Template{}.GetOption)
	rt.Add("/template/add", router.POST, controller.Template{}.Add)
	rt.Add("/template/edit", router.POST, controller.Template{}.Edit)
	rt.Add("/template/remove", router.DELETE, controller.Template{}.Remove)

	// template route
	rt.Add("/package/getList", router.GET, controller.Package{}.GetList)
	rt.Add("/package/getTotal", router.GET, controller.Package{}.GetTotal)
	rt.Add("/package/getOption", router.GET, controller.Package{}.GetOption)
	rt.Add("/package/upload", router.POST, controller.Package{}.Upload)

	// crontab route
	rt.Add("/crontab/getList", router.GET, controller.Crontab{}.GetList)
	rt.Add("/crontab/getTotal", router.GET, controller.Crontab{}.GetTotal)
	rt.Add("/crontab/getRemoteServerList", router.GET, controller.Crontab{}.GetRemoteServerList)
	rt.Add("/crontab/getBindServerList", router.GET, controller.Crontab{}.GetBindServerList)
	rt.Add("/crontab/add", router.POST, controller.Crontab{}.Add).Roles([]string{core.RoleAdmin, core.RoleManager})
	rt.Add("/crontab/edit", router.POST, controller.Crontab{}.Edit).Roles([]string{core.RoleAdmin, core.RoleManager})
	rt.Add("/crontab/import", router.POST, controller.Crontab{}.Import).Roles([]string{core.RoleAdmin, core.RoleManager})
	rt.Add("/crontab/remove", router.DELETE, controller.Crontab{}.Remove).Roles([]string{core.RoleAdmin, core.RoleManager})
	rt.Add("/crontab/addServer", router.POST, controller.Crontab{}.AddServer).Roles([]string{core.RoleAdmin, core.RoleManager})
	rt.Add("/crontab/removeCrontabServer", router.DELETE, controller.Crontab{}.RemoveCrontabServer).Roles([]string{core.RoleAdmin, core.RoleManager})

	// group route
	rt.Add("/group/getList", router.GET, controller.Group{}.GetList).Roles([]string{core.RoleAdmin, core.RoleManager, core.RoleGroupManager})
	rt.Add("/group/getTotal", router.GET, controller.Group{}.GetTotal).Roles([]string{core.RoleAdmin, core.RoleManager, core.RoleGroupManager})
	rt.Add("/group/getOption", router.GET, controller.Group{}.GetOption)
	rt.Add("/group/getDeployOption", router.GET, controller.Group{}.GetDeployOption)
	rt.Add("/group/add", router.POST, controller.Group{}.Add).Roles([]string{core.RoleAdmin, core.RoleManager})
	rt.Add("/group/edit", router.POST, controller.Group{}.Edit).Roles([]string{core.RoleAdmin, core.RoleManager, core.RoleGroupManager})
	rt.Add("/group/remove", router.DELETE, controller.Group{}.Remove).Roles([]string{core.RoleAdmin, core.RoleManager})

	// role route
	rt.Add("/role/getOption", router.GET, controller.Role{}.GetOption)
	rt.Start()
	return rt
}
