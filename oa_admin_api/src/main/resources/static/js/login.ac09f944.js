(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"5c89":function(e,t,s){"use strict";var r=s("b31d"),n=s.n(r);n.a},a55b:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login-wrap"},[s("div",{staticClass:"ms-login"},[s("div",{staticClass:"ms-title"},[e._v("后台管理系统-ui-ygf")]),s("el-form",{ref:"login",staticClass:"ms-content",attrs:{model:e.user,rules:e.rules,"label-width":"0px"}},[s("el-form-item",{attrs:{prop:"account"}},[s("el-input",{attrs:{placeholder:"account"},model:{value:e.user.account,callback:function(t){e.$set(e.user,"account",t)},expression:"user.account"}},[s("el-button",{attrs:{slot:"prepend",icon:"el-icon-lx-people"},slot:"prepend"})],1)],1),s("el-form-item",{attrs:{prop:"password"}},[s("el-input",{attrs:{type:"password",placeholder:"password"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitForm()}},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}},[s("el-button",{attrs:{slot:"prepend",icon:"el-icon-lx-lock"},slot:"prepend"})],1)],1),s("div",{staticClass:"login-btn"},[s("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm()}}},[e._v("登录")])],1),s("p",{staticClass:"login-tips"},[e._v("Tips : 用户名和密码随便填。")])],1)],1)])},n=[],o=(s("7f7f"),s("b775")),a=s("ac01");function l(e){return Object(o["a"])({url:a["a"].rubberBasePath+"/login",method:"post",params:e})}var i=s("5f87"),u={data:function(){return{user:{account:"admin",password:"123123"},rules:{account:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{submitForm:function(){var e=this;this.$refs.login.validate((function(t){console.info(e.user),l(e.user).then((function(t){if(t.code!==a["a"].SUCCESS)return e.$message.error(t.msg),console.log("error submit!!"),!1;var s=t.data;e.$message.success("登录成功"),localStorage.setItem("ms_username",s.name),Object(i["d"])(s.token),e.$router.push("/")}))}))}}},c=u,p=(s("5c89"),s("2877")),d=Object(p["a"])(c,r,n,!1,null,"7c5f6321",null);t["default"]=d.exports},b31d:function(e,t,s){}}]);