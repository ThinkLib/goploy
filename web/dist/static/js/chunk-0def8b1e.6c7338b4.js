(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0def8b1e"],{"06e0":function(t,e,s){},2017:function(t,e,s){"use strict";var o=s("58c5"),n=s.n(o);n.a},"58c5":function(t,e,s){},"7bc0":function(t,e,s){"use strict";var o=s("06e0"),n=s.n(o);n.a},"9ed6":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"login-container"},[o("el-row",{staticClass:"login-mark",attrs:{type:"flex",align:"middle"}},[o("img",{attrs:{src:s("9d64"),width:"70",height:"70"}}),t._v(" "),o("el-row",[o("el-row",{staticClass:"main-mark"},[t._v("代码部署平台")]),t._v(" "),o("el-row",{staticClass:"sub-mark"},[t._v("Goploy")])],1)],1),t._v(" "),o("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:t.loginForm,rules:t.loginRules,"auto-complete":"on","label-position":"left"}},[o("div",{staticClass:"title-container"},[o("h3",{staticClass:"title"},[t._v("登录")]),t._v(" "),o("h4",{staticClass:"sub-title"},[t._v("SIGN IN")])]),t._v(" "),o("el-form-item",{staticClass:"login-form-input",attrs:{prop:"account"}},[o("span",{staticClass:"svg-container"},[o("svg-icon",{attrs:{"icon-class":"user"}})],1),t._v(" "),o("el-input",{ref:"account",attrs:{size:"medium",placeholder:"请输入账号",name:"account",type:"text",tabindex:"1","auto-complete":"on"},model:{value:t.loginForm.account,callback:function(e){t.$set(t.loginForm,"account",e)},expression:"loginForm.account"}})],1),t._v(" "),o("el-form-item",{staticClass:"login-form-input",attrs:{prop:"password"}},[o("span",{staticClass:"svg-container"},[o("svg-icon",{attrs:{"icon-class":"password"}})],1),t._v(" "),o("el-input",{key:t.passwordType,ref:"password",attrs:{type:t.passwordType,size:"medium",placeholder:"请输入密码",name:"password",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleLogin(e)}},model:{value:t.loginForm.password,callback:function(e){t.$set(t.loginForm,"password",e)},expression:"loginForm.password"}}),t._v(" "),o("span",{staticClass:"show-pwd",on:{click:t.showPwd}},[o("svg-icon",{attrs:{"icon-class":"password"===t.passwordType?"eye":"eye-open"}})],1)],1),t._v(" "),o("el-button",{staticClass:"login-form-btn",staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:t.loading,size:"medium",type:"primary"},nativeOn:{click:function(e){return e.preventDefault(),t.handleLogin(e)}}},[t._v("登 录")])],1)],1)},n=[],a=s("61f7"),r={name:"Login",data:function(){var t=function(t,e,s){Object(a["c"])(e)?s():s(new Error("请输入正确的用户名"))},e=function(t,e,s){Object(a["b"])(e)?s():s(new Error("8到16个字符，至少包含字母、数字、特殊符号中的两种"))};return{loginForm:{account:"",password:"",phrase:""},loginRules:{account:[{required:!0,trigger:"blur",validator:t}],password:[{required:!0,trigger:"blur",validator:e}]},loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(t){this.redirect=t.query&&t.query.redirect},immediate:!0}},created:function(){},methods:{showPwd:function(){var t=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){t.$refs.password.focus()}))},changePhrase:function(){this.phrase="/user/getPhrase?"+Math.random()},handleLogin:function(){var t=this;this.$refs.loginForm.validate((function(e){if(!e)return console.log("error submit!!"),!1;t.loading=!0,t.$store.dispatch("user/login",t.loginForm).then((function(){t.$router.push({path:t.redirect||"/"}),t.loading=!1})).catch((function(){t.loading=!1,t.showPhrase=!0,t.changePhrase()}))}))}}},i=r,c=(s("2017"),s("7bc0"),s("4023")),l=Object(c["a"])(i,o,n,!1,null,"01e60038",null);e["default"]=l.exports}}]);