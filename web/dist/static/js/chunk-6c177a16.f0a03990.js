(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c177a16"],{"0a49":function(t,e,a){var r=a("9b43"),n=a("626a"),i=a("4bf8"),o=a("9def"),s=a("cd1c");t.exports=function(t,e){var a=1==t,l=2==t,c=3==t,u=4==t,p=6==t,d=5==t||p,m=e||s;return function(e,s,f){for(var g,h,b=i(e),v=n(b),w=r(s,f,3),_=o(v.length),y=0,k=a?m(e,_):l?m(e,0):void 0;_>y;y++)if((d||y in v)&&(g=v[y],h=w(g,y,b),t))if(a)k[y]=h;else if(h)switch(t){case 3:return!0;case 5:return g;case 6:return y;case 2:k.push(g)}else if(u)return!1;return p?-1:c||u?u:k}}},1169:function(t,e,a){var r=a("2d95");t.exports=Array.isArray||function(t){return"Array"==r(t)}},"20d6":function(t,e,a){"use strict";var r=a("5ca1"),n=a("0a49")(6),i="findIndex",o=!0;i in[]&&Array(1)[i](function(){o=!1}),r(r.P+r.F*o,"Array",{findIndex:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(i)},"23ba":function(t,e,a){"use strict";a.d(e,"d",function(){return i}),a.d(e,"e",function(){return o}),a.d(e,"c",function(){return s}),a.d(e,"a",function(){return l}),a.d(e,"b",function(){return c}),a.d(e,"f",function(){return u});var r=a("cebc"),n=a("b775");function i(t){return Object(n["a"])({url:"/group/getList",method:"get",params:Object(r["a"])({},t)})}function o(){return Object(n["a"])({url:"/group/getOption",method:"get"})}function s(){return Object(n["a"])({url:"/group/getDeployOption",method:"get"})}function l(t){return Object(n["a"])({url:"/group/add",method:"post",data:t})}function c(t){return Object(n["a"])({url:"/group/edit",method:"post",data:t})}function u(t){return Object(n["a"])({url:"/group/remove",method:"delete",data:{id:t}})}},"24d2":function(t,e,a){"use strict";a.d(e,"j",function(){return n}),a.d(e,"l",function(){return i}),a.d(e,"k",function(){return o}),a.d(e,"h",function(){return s}),a.d(e,"i",function(){return l}),a.d(e,"g",function(){return c}),a.d(e,"a",function(){return u}),a.d(e,"e",function(){return p}),a.d(e,"n",function(){return d}),a.d(e,"b",function(){return m}),a.d(e,"d",function(){return f}),a.d(e,"p",function(){return g}),a.d(e,"o",function(){return h}),a.d(e,"c",function(){return b}),a.d(e,"f",function(){return v}),a.d(e,"q",function(){return w}),a.d(e,"m",function(){return _});var r=a("b775");function n(t,e){var a=t.page,n=t.rows;return Object(r["a"])({url:"/project/getList",method:"get",params:{page:a,rows:n,projectName:e}})}function i(t){return Object(r["a"])({url:"/project/getRemoteBranchList",method:"get",timeout:0,params:{url:t}})}function o(){return Object(r["a"])({url:"/project/getOption",method:"get",params:{}})}function s(t){return Object(r["a"])({url:"/project/getBindServerList",method:"get",params:{id:t}})}function l(t){return Object(r["a"])({url:"/project/getBindUserList",method:"get",params:{id:t}})}function c(t){return Object(r["a"])({url:"/project/getBindProjectList",method:"get",params:{userId:t}})}function u(t){return Object(r["a"])({url:"/project/add",method:"post",data:t})}function p(t){return Object(r["a"])({url:"/project/edit",method:"post",data:t})}function d(t){return Object(r["a"])({url:"/project/remove",method:"delete",data:{id:t}})}function m(t){return Object(r["a"])({url:"/project/addServer",method:"post",data:t})}function f(t){return Object(r["a"])({url:"/project/addUser",method:"post",data:t})}function g(t){return Object(r["a"])({url:"/project/removeProjectUser",method:"delete",data:{projectUserId:t}})}function h(t){return Object(r["a"])({url:"/project/removeProjectServer",method:"delete",data:{projectServerId:t}})}function b(t){return Object(r["a"])({url:"/project/addTask",method:"post",data:t})}function v(t){return Object(r["a"])({url:"/project/editTask",method:"post",data:t})}function w(t){return Object(r["a"])({url:"/project/removeTask",method:"post",data:{id:t}})}function _(t,e){var a=t.page,n=t.rows;return Object(r["a"])({url:"/project/getTaskList",method:"get",params:{page:a,rows:n,id:e}})}},"37c8":function(t,e,a){e.f=a("2b4c")},"3a72":function(t,e,a){var r=a("7726"),n=a("8378"),i=a("2d00"),o=a("37c8"),s=a("86cc").f;t.exports=function(t){var e=n.Symbol||(n.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||s(e,t,{value:o.f(t)})}},"456d":function(t,e,a){var r=a("4bf8"),n=a("0d58");a("5eda")("keys",function(){return function(t){return n(r(t))}})},"5eda":function(t,e,a){var r=a("5ca1"),n=a("8378"),i=a("79e5");t.exports=function(t,e){var a=(n.Object||{})[t]||Object[t],o={};o[t]=e(a),r(r.S+r.F*i(function(){a(1)}),"Object",o)}},"67ab":function(t,e,a){var r=a("ca5a")("meta"),n=a("d3f4"),i=a("69a8"),o=a("86cc").f,s=0,l=Object.isExtensible||function(){return!0},c=!a("79e5")(function(){return l(Object.preventExtensions({}))}),u=function(t){o(t,r,{value:{i:"O"+ ++s,w:{}}})},p=function(t,e){if(!n(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!l(t))return"F";if(!e)return"E";u(t)}return t[r].i},d=function(t,e){if(!i(t,r)){if(!l(t))return!0;if(!e)return!1;u(t)}return t[r].w},m=function(t){return c&&f.NEED&&l(t)&&!i(t,r)&&u(t),t},f=t.exports={KEY:r,NEED:!1,fastKey:p,getWeak:d,onFreeze:m}},"6f1a":function(t,e,a){},7514:function(t,e,a){"use strict";var r=a("5ca1"),n=a("0a49")(5),i="find",o=!0;i in[]&&Array(1)[i](function(){o=!1}),r(r.P+r.F*o,"Array",{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),a("9c6c")(i)},"7bbc":function(t,e,a){var r=a("6821"),n=a("9093").f,i={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return n(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==i.call(t)?s(t):n(r(t))}},"8a81":function(t,e,a){"use strict";var r=a("7726"),n=a("69a8"),i=a("9e1e"),o=a("5ca1"),s=a("2aba"),l=a("67ab").KEY,c=a("79e5"),u=a("5537"),p=a("7f20"),d=a("ca5a"),m=a("2b4c"),f=a("37c8"),g=a("3a72"),h=a("d4c0"),b=a("1169"),v=a("cb7c"),w=a("d3f4"),_=a("4bf8"),y=a("6821"),k=a("6a999"),j=a("4630"),T=a("2aeb"),D=a("7bbc"),P=a("11e9"),x=a("2621"),S=a("86cc"),O=a("0d58"),L=P.f,I=S.f,F=D.f,C=r.Symbol,N=r.JSON,$=N&&N.stringify,V="prototype",E=m("_hidden"),H=m("toPrimitive"),R={}.propertyIsEnumerable,M=u("symbol-registry"),A=u("symbols"),B=u("op-symbols"),J=Object[V],z="function"==typeof C&&!!x.f,G=r.QObject,U=!G||!G[V]||!G[V].findChild,q=i&&c(function(){return 7!=T(I({},"a",{get:function(){return I(this,"a",{value:7}).a}})).a})?function(t,e,a){var r=L(J,e);r&&delete J[e],I(t,e,a),r&&t!==J&&I(J,e,r)}:I,K=function(t){var e=A[t]=T(C[V]);return e._k=t,e},W=z&&"symbol"==typeof C.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof C},Y=function(t,e,a){return t===J&&Y(B,e,a),v(t),e=k(e,!0),v(a),n(A,e)?(a.enumerable?(n(t,E)&&t[E][e]&&(t[E][e]=!1),a=T(a,{enumerable:j(0,!1)})):(n(t,E)||I(t,E,j(1,{})),t[E][e]=!0),q(t,e,a)):I(t,e,a)},Q=function(t,e){v(t);var a,r=h(e=y(e)),n=0,i=r.length;while(i>n)Y(t,a=r[n++],e[a]);return t},X=function(t,e){return void 0===e?T(t):Q(T(t),e)},Z=function(t){var e=R.call(this,t=k(t,!0));return!(this===J&&n(A,t)&&!n(B,t))&&(!(e||!n(this,t)||!n(A,t)||n(this,E)&&this[E][t])||e)},tt=function(t,e){if(t=y(t),e=k(e,!0),t!==J||!n(A,e)||n(B,e)){var a=L(t,e);return!a||!n(A,e)||n(t,E)&&t[E][e]||(a.enumerable=!0),a}},et=function(t){var e,a=F(y(t)),r=[],i=0;while(a.length>i)n(A,e=a[i++])||e==E||e==l||r.push(e);return r},at=function(t){var e,a=t===J,r=F(a?B:y(t)),i=[],o=0;while(r.length>o)!n(A,e=r[o++])||a&&!n(J,e)||i.push(A[e]);return i};z||(C=function(){if(this instanceof C)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(a){this===J&&e.call(B,a),n(this,E)&&n(this[E],t)&&(this[E][t]=!1),q(this,t,j(1,a))};return i&&U&&q(J,t,{configurable:!0,set:e}),K(t)},s(C[V],"toString",function(){return this._k}),P.f=tt,S.f=Y,a("9093").f=D.f=et,a("52a7").f=Z,x.f=at,i&&!a("2d00")&&s(J,"propertyIsEnumerable",Z,!0),f.f=function(t){return K(m(t))}),o(o.G+o.W+o.F*!z,{Symbol:C});for(var rt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;rt.length>nt;)m(rt[nt++]);for(var it=O(m.store),ot=0;it.length>ot;)g(it[ot++]);o(o.S+o.F*!z,"Symbol",{for:function(t){return n(M,t+="")?M[t]:M[t]=C(t)},keyFor:function(t){if(!W(t))throw TypeError(t+" is not a symbol!");for(var e in M)if(M[e]===t)return e},useSetter:function(){U=!0},useSimple:function(){U=!1}}),o(o.S+o.F*!z,"Object",{create:X,defineProperty:Y,defineProperties:Q,getOwnPropertyDescriptor:tt,getOwnPropertyNames:et,getOwnPropertySymbols:at});var st=c(function(){x.f(1)});o(o.S+o.F*st,"Object",{getOwnPropertySymbols:function(t){return x.f(_(t))}}),N&&o(o.S+o.F*(!z||c(function(){var t=C();return"[null]"!=$([t])||"{}"!=$({a:t})||"{}"!=$(Object(t))})),"JSON",{stringify:function(t){var e,a,r=[t],n=1;while(arguments.length>n)r.push(arguments[n++]);if(a=e=r[1],(w(e)||void 0!==t)&&!W(t))return b(e)||(e=function(t,e){if("function"==typeof a&&(e=a.call(this,t,e)),!W(e))return e}),r[1]=e,$.apply(N,r)}}),C[V][H]||a("32e9")(C[V],H,C[V].valueOf),p(C,"Symbol"),p(Math,"Math",!0),p(r.JSON,"JSON",!0)},"9b7a":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticClass:"app-container"},[a("el-row",{staticClass:"app-bar",attrs:{type:"flex"}},[a("el-select",{attrs:{placeholder:"选择分组"},on:{change:t.handleGroupChange},model:{value:t.groupId,callback:function(e){t.groupId=e},expression:"groupId"}},[a("el-option",{attrs:{label:"默认",value:0}}),t._v(" "),t._l(t.groupOption,function(t,e){return a("el-option",{key:e,attrs:{label:t.name,value:t.id}})})],2),t._v(" "),a("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入项目名称"},on:{change:t.getList},model:{value:t.projectName,callback:function(e){t.projectName=e},expression:"projectName"}})],1),t._v(" "),a("el-table",{key:t.tableHeight,staticStyle:{width:"100%","margin-top":"5px"},attrs:{border:"",stripe:"","highlight-current-row":"","max-height":t.tableHeight,data:t.tablePageData}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"80",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"项目名称","min-width":"160",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return["生产环境"===e.row.environment?a("b",{staticStyle:{color:"#F56C6C"}},[t._v(t._s(e.row.name)+" - "+t._s(e.row.environment))]):"测试环境"===e.row.environment?a("b",{staticStyle:{color:"#E6A23C"}},[t._v(t._s(e.row.name)+" - "+t._s(e.row.environment))]):a("b",{staticStyle:{color:"#909399"}},[t._v(t._s(e.row.name)+" - "+t._s(e.row.environment))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"group",label:"分组",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(t.findGroupName(e.row.groupId))+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"branch",label:"分支",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"commit",label:"commitID",width:"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tooltip",{attrs:{effect:"dark",content:e.row["commit"],placement:"top"}},[a("span",[t._v(t._s(e.row["commit"]?e.row["commit"].substring(0,6):""))])])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"deployState",label:"构建状态",width:"230",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{type:e.row.tagType,effect:"plain"}},[t._v(t._s(e.row.tagText))]),t._v(" "),a("el-progress",{attrs:{percentage:e.row.progressPercentage,status:e.row.progressStatus}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"updateTime",label:"上次构建时间",width:"160",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"operation",label:"操作",width:"255",fixed:"right",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-row",{staticClass:"operation-btn"},[a("el-dropdown",{attrs:{"split-button":"",trigger:"click",disabled:1===e.row.deployState,type:"primary"},on:{click:function(a){return t.publish(e.row)},command:t.handlePublishCommand}},[t._v("\n            构建\n            "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:e.row}},[t._v("选择具体commit")])],1)],1),t._v(" "),-1!==[t.$global.Admin,t.$global.Manager,t.$global.GroupManager].indexOf(t.$store.getters.role)?a("el-dropdown",{attrs:{"split-button":"",trigger:"click",disabled:1===e.row.deployState,type:"warning"},on:{click:function(a){return t.handleAddProjectTask(e.row)},command:t.handleProjectTaskCommand}},[t._v("\n            定时\n            "),a("el-dropdown-menu",{staticStyle:{"min-width":"84px","text-align":"center"},attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:e.row}},[t._v("定时构建管理")])],1)],1):t._e(),t._v(" "),a("el-button",{attrs:{type:"success"},on:{click:function(a){return t.handleDetail(e.row)}}},[t._v("详情")])],1)]}}])})],1),t._v(" "),a("el-pagination",{staticStyle:{"margin-top":"10px","text-align":"right"},attrs:{total:t.pagination.total,"page-size":t.pagination.rows,"current-page":t.pagination.page,background:"","page-sizes":[20,50,100],layout:"sizes, total, prev, pager, next, jumper"},on:{"update:currentPage":function(e){return t.$set(t.pagination,"page",e)},"update:current-page":function(e){return t.$set(t.pagination,"page",e)},"size-change":t.handleSizeChange,"current-change":t.handlePageChange}}),t._v(" "),a("el-dialog",{staticClass:"publish-record",attrs:{title:"构建记录",visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-row",{attrs:{type:"flex"}},[a("el-row",{directives:[{name:"loading",rawName:"v-loading",value:t.searchPreview.loading,expression:"searchPreview.loading"}],staticClass:"publish-preview"},[a("el-select",{staticStyle:{width:"142px"},attrs:{placeholder:"选择用户",clearable:""},model:{value:t.searchPreview.userId,callback:function(e){t.$set(t.searchPreview,"userId",e)},expression:"searchPreview.userId"}},t._l(t.userOption,function(t,e){return a("el-option",{key:e,attrs:{label:t.name,value:t.id}})}),1),t._v(" "),a("el-select",{staticStyle:{width:"95px"},attrs:{placeholder:"状态",clearable:""},model:{value:t.searchPreview.state,callback:function(e){t.$set(t.searchPreview,"state",e)},expression:"searchPreview.state"}},[a("el-option",{attrs:{label:"成功",value:1}}),t._v(" "),a("el-option",{attrs:{label:"失败",value:0}})],1),t._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.searchPreviewList}},[t._v("搜索")]),t._v(" "),a("el-radio-group",{on:{change:t.handleDetailChange},model:{value:t.publishToken,callback:function(e){t.publishToken=e},expression:"publishToken"}},t._l(t.gitTraceList,function(e,r){return a("el-row",{key:r},[a("el-row",{staticStyle:{margin:"5px 0"}},[a("el-radio",{staticClass:"publish-commit",attrs:{label:e.token,border:""}},[a("span",{staticClass:"publish-name"},[t._v(t._s(e.publisherName))]),t._v(" "),a("span",{staticClass:"publish-commitID"},[t._v("commitID: "+t._s(e.commit))]),t._v(" "),1===e.publishState?a("span",{staticStyle:{color:"#67C23A",float:"right"}},[t._v("成功")]):a("span",{staticStyle:{color:"#F56C6C",float:"right"}},[t._v("失败")])]),t._v(" "),a("el-button",{attrs:{type:"danger",plain:""},on:{click:function(a){return t.rollback(e)}}},[t._v("rebuild")])],1)],1)}),1),t._v(" "),a("el-pagination",{staticStyle:{"text-align":"right","margin-right":"20px"},attrs:{total:t.previewPagination.total,"page-size":t.previewPagination.rows,"current-page":t.previewPagination.page,"prev-text":"上一页","next-text":"下一页",layout:"total, prev, next"},on:{"update:currentPage":function(e){return t.$set(t.previewPagination,"page",e)},"update:current-page":function(e){return t.$set(t.previewPagination,"page",e)},"current-change":t.handlePreviewPageChange}})],1),t._v(" "),a("el-row",{staticClass:"project-detail",staticStyle:{flex:"1",width:"100%"}},[t._l(t.publishLocalTraceList,function(e,r){return a("el-row",{key:r},[2===e.type?a("el-row",[a("el-row",{staticStyle:{margin:"5px 0"}},[t._v("git同步信息")]),t._v(" "),a("el-row",{staticStyle:{margin:"5px 0"}},[t._v("时间: "+t._s(e.insertTime))]),t._v(" "),0!==e.state?a("el-row",[a("el-row",[t._v("commit: "+t._s(e["commit"]))]),t._v(" "),a("el-row",[t._v("message: "+t._s(e["message"]))]),t._v(" "),a("el-row",[t._v("author: "+t._s(e["author"]))]),t._v(" "),a("el-row",[t._v("datetime: "+t._s(e["timestamp"]?t.parseTime(e["timestamp"]):""))]),t._v(" "),a("el-row",[a("span",{domProps:{innerHTML:t._s(t.formatDetail(e["diff"]))}})])],1):a("el-row",{staticStyle:{margin:"5px 0"}},[a("el-tag",{attrs:{type:"danger",effect:"plain"}},[t._v("失败")]),t._v(" "),a("span",{domProps:{innerHTML:t._s(t.formatDetail(e.detail))}})],1)],1):t._e(),t._v(" "),3===e.type?a("el-row",[a("hr"),t._v(" "),a("el-row",{staticStyle:{margin:"5px 0"}},[t._v("获取代码后脚本信息")]),t._v(" "),a("el-row",{staticStyle:{margin:"5px 0"}},[t._v("时间: "+t._s(e.insertTime))]),t._v(" "),a("el-row",[t._v("脚本: "),a("pre",{domProps:{innerHTML:t._s(t.formatDetail(e.script))}})]),t._v(" "),a("el-row",{staticStyle:{margin:"5px 0"}},[0===e.state?a("el-tag",{attrs:{type:"danger",effect:"plain"}},[t._v("失败")]):t._e(),t._v(" "),a("el-row",[t._v("[goploy ~]# "),a("span",{domProps:{innerHTML:t._s(t.formatDetail(e.detail))}})])],1)],1):t._e(),t._v(" "),6===e.type?a("el-row",[a("hr"),t._v(" "),a("el-row",[a("el-row",{staticStyle:{margin:"5px 0"}},[t._v("remote服务器信息")]),t._v(" "),a("el-row",{staticStyle:{margin:"5px 0"}},[t._v("服务器: "+t._s(e.serverName))]),t._v(" "),a("el-row",{staticStyle:{margin:"5px 0"}},[t._v("时间: "+t._s(e.insertTime))]),t._v(" "),a("el-row",{staticStyle:{margin:"5px 0"}},[t._v("脚本: "+t._s(e.script))]),t._v(" "),a("el-row",{staticStyle:{margin:"5px 0"}},[0===e.state?a("el-tag",{attrs:{type:"danger",effect:"plain"}},[t._v("失败")]):t._e(),t._v(" "),a("span",{domProps:{innerHTML:t._s(t.formatDetail(e.detail))}})],1)],1)],1):t._e()],1)}),t._v(" "),a("hr"),t._v(" "),a("el-row",{staticStyle:{margin:"5px 0"}},[t._v("目标服务器")]),t._v(" "),a("el-tabs",{model:{value:t.activeRomoteTracePane,callback:function(e){t.activeRomoteTracePane=e},expression:"activeRomoteTracePane"}},t._l(t.publishRemoteTraceList,function(e,r){return a("el-tab-pane",{key:r,attrs:{label:r,name:r}},t._l(e,function(e,r){return a("el-row",{key:r},[4===e.type?a("el-row",[a("el-row",{staticStyle:{margin:"5px 0"}},[t._v("部署前脚本")]),t._v(" "),a("el-row",{staticStyle:{margin:"5px 0"}},[t._v("时间: "+t._s(e.insertTime))]),t._v(" "),a("el-row",[t._v("脚本: "),a("pre",{domProps:{innerHTML:t._s(t.formatDetail(e.script))}})]),t._v(" "),a("el-row",{staticStyle:{margin:"5px 0"}},[0===e.state?a("el-tag",{attrs:{type:"danger",effect:"plain"}},[t._v("失败")]):t._e(),t._v(" "),a("el-row",[t._v("[goploy ~]# "),a("span",{domProps:{innerHTML:t._s(t.formatDetail(e.detail))}})])],1)],1):5===e.type?a("el-row",[a("el-row",{staticStyle:{margin:"5px 0"}},[t._v("rsync同步文件")]),t._v(" "),a("el-row",{staticStyle:{margin:"5px 0"}},[t._v("时间: "+t._s(e.insertTime))]),t._v(" "),a("el-row",[t._v("命令: "+t._s(e.command))]),t._v(" "),a("el-row",{staticStyle:{margin:"5px 0"}},[0===e.state?a("el-tag",{attrs:{type:"danger",effect:"plain"}},[t._v("失败")]):t._e(),t._v(" "),a("span",{domProps:{innerHTML:t._s(t.formatDetail(e.detail))}})],1)],1):a("el-row",[a("el-row",{staticStyle:{margin:"5px 0"}},[t._v("部署后脚本")]),t._v(" "),a("el-row",{staticStyle:{margin:"5px 0"}},[t._v("时间: "+t._s(e.insertTime))]),t._v(" "),a("el-row",[t._v("脚本: "+t._s(e.script))]),t._v(" "),a("el-row",{staticStyle:{margin:"5px 0"}},[0===e.state?a("el-tag",{attrs:{type:"danger",effect:"plain"}},[t._v("失败")]):t._e(),t._v(" "),a("el-row",[t._v("[goploy ~]# "),a("span",{domProps:{innerHTML:t._s(t.formatDetail(e.detail))}})])],1)],1)],1)}),1)}),1)],2)],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"commit管理",visible:t.commitDialogVisible},on:{"update:visible":function(e){t.commitDialogVisible=e}}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.commitTableLoading,expression:"commitTableLoading"}],attrs:{"element-loading-text":"获取最近的commit历史，请稍候",border:"",stripe:"","highlight-current-row":"","max-height":"447px",data:t.commitTableData}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{domProps:{innerHTML:t._s(t.formatDetail(e.row.diff))}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"commit",label:"commit",width:"290"}}),t._v(" "),a("el-table-column",{attrs:{prop:"author",label:"author"}}),t._v(" "),a("el-table-column",{attrs:{label:"提交时间",width:"135"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(t.parseTime(e.row.timestamp))+"\n        ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"message",label:"message",width:"200","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"operation",label:"操作",width:"80",align:"center",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"danger"},on:{click:function(a){return t.rollback(e.row)}}},[t._v("构建")])]}}])})],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.commitDialogVisible=!1}}},[t._v("取 消")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"定时构建设置",visible:t.taskDialogVisible,width:"600px"},on:{"update:visible":function(e){t.taskDialogVisible=e}}},[a("el-form",{ref:"taskForm",attrs:{rules:t.taskFormRules,model:t.taskFormData,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"项目名称"}},[a("span",[t._v(t._s(t.taskFormProps.projectName))])]),t._v(" "),a("el-form-item",{attrs:{label:"commitId",prop:"commitId"}},[a("el-select",{staticStyle:{width:"400px"},attrs:{placeholder:"选择CommitID"},model:{value:t.taskFormData.commitId,callback:function(e){t.$set(t.taskFormData,"commitId",e)},expression:"taskFormData.commitId"}},t._l(t.taskFormProps.commitOptions,function(t,e){return a("el-option",{key:e,attrs:{label:t.commit+"("+t.author+")",value:t.commit}})}),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"时间",prop:"date"}},[a("el-date-picker",{staticStyle:{width:"400px"},attrs:{"picker-options":t.taskFormProps.pickerOptions,type:"datetime",placeholder:"选择日期时间","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:t.taskFormData.date,callback:function(e){t.$set(t.taskFormData,"date",e)},expression:"taskFormData.date"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.taskDialogVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{disabled:t.taskFormProps.disabled,type:"primary"},on:{click:t.submitTask}},[t._v("确 定")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"定时构建管理",visible:t.taskListDialogVisible},on:{"update:visible":function(e){t.taskListDialogVisible=e}}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.taskTableLoading,expression:"taskTableLoading"}],attrs:{border:"",stripe:"","highlight-current-row":"","max-height":"447px",data:t.taskTableData}},[a("el-table-column",{attrs:{prop:"id",label:"ID",width:"80"}}),t._v(" "),a("el-table-column",{attrs:{prop:"projectName",label:"项目名称",width:"150"}}),t._v(" "),a("el-table-column",{attrs:{prop:"commitId",label:"commit",width:"290"}}),t._v(" "),a("el-table-column",{attrs:{prop:"date",label:"日期",width:"150"}}),t._v(" "),a("el-table-column",{attrs:{prop:"isRun",label:"任务",width:"60"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(1===e.row.isRun?"已运行":"未运行")+"\n        ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"state",label:"状态",width:"50"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n          "+t._s(1===e.row.state?"有效":"无效")+"\n        ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"creator",label:"创建人"}}),t._v(" "),a("el-table-column",{attrs:{prop:"editor",label:"修改人"}}),t._v(" "),a("el-table-column",{attrs:{prop:"insertTime",label:"插入时间",width:"135"}}),t._v(" "),a("el-table-column",{attrs:{prop:"updateTime",label:"更新时间",width:"135"}}),t._v(" "),a("el-table-column",{attrs:{prop:"operation",label:"操作",width:"150",align:"center",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",disabled:1===e.row.isRun||0===e.row.state},on:{click:function(a){return t.handleEditProjectTask(e.row)}}},[t._v("修改")]),t._v(" "),a("el-button",{attrs:{type:"danger",disabled:1===e.row.isRun||0===e.row.state},on:{click:function(a){return t.removeProjectTask(e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.commitDialogVisible=!1}}},[t._v("取 消")])],1)],1)],1)},n=[],i=(a("a481"),a("7514"),a("ac4d"),a("8a81"),a("ac6a"),a("456d"),a("7f7f"),a("20d6"),a("9cea")),o=a("cebc"),s=a("b775");function l(t,e){return Object(s["a"])({url:"/deploy/getList",method:"get",params:{groupId:t,projectName:e}})}function c(t){return Object(s["a"])({url:"/deploy/getDetail",method:"get",params:{lastPublishToken:t}})}function u(t,e){var a=t.page,r=t.rows;return Object(s["a"])({url:"/deploy/getPreview",method:"get",params:Object(o["a"])({page:a,rows:r},e)})}function p(t){return Object(s["a"])({url:"/deploy/getCommitList",method:"get",params:{id:t},timeout:0})}function d(t,e){return Object(s["a"])({url:"/deploy/publish",method:"post",data:{projectId:t,commit:e}})}var m=a("24d2"),f=a("23ba"),g=a("c24f"),h=a("ed08"),b={mixins:[i["a"]],data:function(){return{groupId:parseInt(localStorage.getItem("groupId"))||0,userId:"",groupOption:[],userOption:[],projectName:"",publishToken:"",commitDialogVisible:!1,taskDialogVisible:!1,taskListDialogVisible:!1,dialogVisible:!1,tableData:[],pagination:{total:0,page:1,rows:20},taskTableLoading:!1,taskTableData:[],taskPagination:{total:0,page:1,rows:20},taskFormProps:{projectName:"",disabled:!1,commitOptions:[],pickerOptions:{disabledDate:function(t){return t.getTime()<Date.now()-864e5}}},taskFormData:{id:0,projectId:"",commitId:"",date:""},taskFormRules:{commitId:[{required:!0,message:"请选择CommitID",trigger:"change"}],date:[{required:!0,message:"请选择日期",trigger:"change"}]},searchPreview:{loading:!1,projectId:"",userId:"",state:""},gitTraceList:[],previewPagination:{page:1,rows:11,total:0},commitTableLoading:!1,commitTableData:[],publishTraceList:[],publishLocalTraceList:[],publishRemoteTraceList:{},activeRomoteTracePane:""}},computed:{tablePageData:function(){return this.tableData.slice((this.pagination.page-1)*this.pagination.rows,this.pagination.page*this.pagination.rows)}},watch:{"$store.getters.ws_message":function(t){if(1===t.type){var e=t.message;e.message=this.formatDetail(e.message),0===e.state&&this.$notify.error({title:e.projectName,dangerouslyUseHTMLString:!0,message:e.message,duration:0});var a=this.tableData.findIndex(function(t){return t.id===e.projectId});if(-1!==a){var r=12.5*e.state;this.tableData[a].progressPercentage=r,this.tableData[a].progressStatus="warning",this.tableData[a].tagType="warning",this.tableData[a].tagText=e.message,0===r?(this.tableData[a].progressStatus="exception",this.tableData[a].tagType="danger",this.tableData[a].tagText="失败"):r>98&&(this.tableData[a].progressStatus="success",this.tableData[a].tagType="success"),e["ext"]&&Object.assign(this.tableData[a],e["ext"]),this.tableData[a].deployState=e.state,this.tableData[a].publisherName=e.username,this.tableData[a].updateTime=Object(h["c"])(new Date)}}}},created:function(){this.getList(),this.getDeployGroupOption(),this.getUserOption()},methods:{parseTime:h["c"],handleGroupChange:function(t){localStorage.setItem("groupId",t),this.groupId=t,this.getList()},getDeployGroupOption:function(){var t=this;Object(f["c"])().then(function(e){t.groupOption=e.data.groupList||[]})},getUserOption:function(){var t=this;Object(g["g"])().then(function(e){t.userOption=e.data.userList||[]})},getList:function(){var t=this;l(this.groupId,this.projectName).then(function(e){var a=e.data.projectList||[];t.tableData=a.map(function(t){t.progressPercentage=0,t.tagType="info",t.tagText="未构建",2===t.deployState?(t.progressPercentage=100,t.progressStatus="success",t.tagType="success",t.tagText="成功"):1===t.deployState&&(t.progressPercentage=60,t.progressStatus="warning",t.tagType="warning",t.tagText="构建中");try{Object.assign(t,JSON.parse(t.publishExt))}catch(e){console.log("项目尚未构建")}return t}),t.pagination.total=t.tableData.length})},handleSizeChange:function(t){this.pagination.rows=t,this.handlePageChange(1)},handlePageChange:function(t){this.pagination.page=t,this.getList()},publish:function(t){var e=this,a=t.id,r=this.$createElement,n="";n="生产环境"===t.environment?"color: #F56C6C":"测试环境"===t.environment?"color: #E6A23C":"color: #909399",this.$confirm("","提示",{message:r("p",null,[r("span",null,"此操作将部署 "+t.name),r("b",{style:n},"("+t.environment+")"),r("span",null,", 是否继续? ")]),confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.gitLog=[],e.remoteLog={},d(a,"").then(function(t){var r=e.tableData.findIndex(function(t){return t.id===a});e.tableData[r].deployState=1})}).catch(function(){e.$message({type:"info",message:"已取消构建"})})},getDetail:function(){var t=this;c(this.publishToken).then(function(e){var a=e.data.publishTraceList||[];t.publishTraceList=a.map(function(t){return""!==t.ext&&Object.assign(t,JSON.parse(t.ext)),t}),t.publishLocalTraceList=t.publishTraceList.filter(function(t){return t.type<4}),t.publishRemoteTraceList={};var r=!0,n=!1,i=void 0;try{for(var o,s=t.publishTraceList[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var l=o.value;l.type<4||(t.publishRemoteTraceList[l.serverName]||(t.publishRemoteTraceList[l.serverName]=[]),t.publishRemoteTraceList[l.serverName].push(l))}}catch(c){n=!0,i=c}finally{try{r||null==s.return||s.return()}finally{if(n)throw i}}t.activeRomoteTracePane=Object.keys(t.publishRemoteTraceList)[0]})},getPreviewList:function(){var t=this;this.searchPreview.loading=!0,u(this.previewPagination,{projectId:this.searchPreview.projectId,userId:this.searchPreview.userId||0,state:""===this.searchPreview.state?-1:this.searchPreview.state}).then(function(e){var a=e.data.gitTraceList||[];t.gitTraceList=a.map(function(t){return""!==t.ext&&Object.assign(t,JSON.parse(t.ext)),t.commit=t["commit"]?t["commit"].substring(0,6):"",t}),t.gitTraceList.length>0&&(t.publishToken=t.gitTraceList[0].token,t.getDetail()),t.previewPagination.total=e.data.pagination.total}).finally(function(){t.searchPreview.loading=!1})},searchPreviewList:function(){this.handlePreviewPageChange(1)},handleDetail:function(t){this.dialogVisible=!0,this.searchPreview.projectId=t.id,this.searchPreview.userId="",this.searchPreview.state="",this.getPreviewList()},handlePreviewPageChange:function(t){this.previewPagination.page=t,this.getPreviewList()},handleDetailChange:function(t){this.publishToken=t,this.getDetail()},handlePublishCommand:function(t){var e=this,a=t.id;this.commitDialogVisible=!0,this.commitTableLoading=!0,p(a).then(function(t){e.commitTableData=t.data.commitList.map(function(t){return Object.assign(t,{projectId:a})})}).finally(function(){e.commitTableLoading=!1})},handleAddProjectTask:function(t){var e=this;if(this.taskDialogVisible=!0,this.taskFormData.id=0,this.taskFormData.projectId!==t.id){this.taskFormData.projectId=t.id,this.taskFormProps.projectName=t.name;var a=t.id;p(a).then(function(t){e.taskFormProps.commitOptions=t.data.commitList||[]})}else this.taskFormData.commitId="",this.taskFormData.date=""},handleEditProjectTask:function(t){var e=this;this.taskDialogVisible=!0,this.taskFormData.id=t.id,this.taskFormData.commitId=t.commitId,this.taskFormData.date=t.date,this.taskFormData.projectId!==t.projectId&&(this.taskFormProps.projectName=t.projectName,p(t.projectId).then(function(t){e.taskFormProps.commitOptions=t.data.commitList||[]}))},handleProjectTaskCommand:function(t){var e=this;this.taskListDialogVisible=!0,this.taskTableLoading=!0,Object(m["m"])(this.taskPagination,t.id).then(function(a){var r=a.data.projectTaskList||[];e.taskTableData=r.map(function(e){return Object.assign(e,{projectId:t.id,projectName:t.name})}),e.taskPagination.total=a.data.pagination.total}).finally(function(){e.taskTableLoading=!1})},submitTask:function(){var t=this;this.$refs.taskForm.validate(function(e){if(!e)return!1;t.taskFormProps.disabled=!0,0===t.taskFormData.id?Object(m["c"])(t.taskFormData).then(function(e){t.$message.success("添加成功")}).finally(function(){t.taskFormProps.disabled=!1,t.taskDialogVisible=!1}):Object(m["f"])(t.taskFormData).then(function(e){t.$message.success("修改成功");var a=t.taskTableData.findIndex(function(e){return e.id===t.taskFormData.id});t.taskTableData[a]["commitId"]=t.taskFormData.commitId,t.taskTableData[a]["date"]=t.taskFormData.date,t.taskTableData[a]["editor"]=t.$store.getters.name,t.taskTableData[a]["editorId"]=t.$store.getters.uid,t.taskTableData[a]["updateTime"]=Object(h["c"])(new Date)}).finally(function(){t.taskFormProps.disabled=!1,t.taskDialogVisible=!1})})},removeProjectTask:function(t){var e=this;this.$confirm("此操作删除"+t.projectName+"的定时任务, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(m["q"])(t.id).then(function(a){var r=e.taskTableData.findIndex(function(e){return e.id===t.id});e.taskTableData[r]["state"]=0,e.taskTableData[r]["editor"]=e.$store.getters.name,e.taskTableData[r]["editorId"]=e.$store.getters.uid,e.taskTableData[r]["updateTime"]=Object(h["c"])(new Date)})}).catch(function(){e.$message({type:"info",message:"已取消操作"})})},rollback:function(t){var e=this;this.$confirm("此操作将重新构建"+t.commit+", 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){d(t.projectId,t.commit).then(function(a){var r=e.tableData.findIndex(function(e){return e.id===t.projectId});e.tableData[r].deployState=1,e.commitDialogVisible=!1,e.dialogVisible=!1})}).catch(function(){e.$message({type:"info",message:"已取消重新构建"})})},findGroupName:function(t){var e=this.groupOption.find(function(e){return e.id===t});return e?e["name"]:"默认"},formatDetail:function(t){return t?t.replace(/\n|(\r\n)/g,"<br>"):""}}},v=b,w=(a("f0ce"),a("2877")),_=Object(w["a"])(v,r,n,!1,null,"9a88a168",null);e["default"]=_.exports},"9cea":function(t,e,a){"use strict";e["a"]={data:function(){return{tableHeight:window.innerHeight-160}},mounted:function(){try{var t=document.getElementsByClassName("app-bar")[0].clientHeight+140,e=window.innerHeight-t;this.tableHeight=e}catch(a){console.log("缺少节点app-bar")}}}},ac4d:function(t,e,a){a("3a72")("asyncIterator")},cd1c:function(t,e,a){var r=a("e853");t.exports=function(t,e){return new(r(t))(e)}},d4c0:function(t,e,a){var r=a("0d58"),n=a("2621"),i=a("52a7");t.exports=function(t){var e=r(t),a=n.f;if(a){var o,s=a(t),l=i.f,c=0;while(s.length>c)l.call(t,o=s[c++])&&e.push(o)}return e}},e853:function(t,e,a){var r=a("d3f4"),n=a("1169"),i=a("2b4c")("species");t.exports=function(t){var e;return n(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!n(e.prototype)||(e=void 0),r(e)&&(e=e[i],null===e&&(e=void 0))),void 0===e?Array:e}},f0ce:function(t,e,a){"use strict";var r=a("6f1a"),n=a.n(r);n.a}}]);