(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dashboard"],{"454f":function(t,e,i){i("46a7");var a=i("584a").Object;t.exports=function(t,e,i){return a.defineProperty(t,e,i)}},"46a7":function(t,e,i){var a=i("63b6");a(a.S+a.F*!i("8e60"),"Object",{defineProperty:i("d9f6").f})},"5bfc":function(t,e,i){"use strict";var a=i("a602"),s=i.n(a);s.a},7159:function(t,e,i){t.exports=i.p+"static/img/img.146655c9.jpg"},"85f2":function(t,e,i){t.exports=i("454f")},a602:function(t,e,i){},b367:function(t,e,i){!function(e,i){t.exports=i()}(0,(function(){"use strict";function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function e(t){return function(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var i=window.devicePixelRatio||1,a=10*i,s=a/2;return function(){function n(t,e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.canvas=function(t){var e=document.getElementById(t),a=e.parentNode.clientWidth,s=e.parentNode.clientHeight;return e.style.width=a+"px",e.style.height=s+"px",e.width=a*i,e.height=s*i,e}(t),this.ctx=this.canvas.getContext("2d"),this.type="bar",this.showValue=!0,this.showGrid=!0,this.topPadding=60*i,this.leftPadding=50*i,this.rightPadding=10*i,this.bottomPadding=50*i,this.yEqual=5,this.yLength=0,this.xLength=0,this.ySpace=0,this.xRorate=0,this.yRorate=0,this.bgColor="#fff",this.axisColor="#666",this.gridColor="#eee",this.title={text:"",color:"#666",position:"top",font:"bold "+18*i+"px Arial",top:a,bottom:s},this.legend={display:!0,position:"top",color:"#666",font:14*i+"px Arial",top:45*i,bottom:15*i,textWidth:0},this.radius=100*i,this.innerRadius=60*i,this.colorList=["#4A90E2","#F5A623","#ff5858","#5e64ff","#2AC766","#743ee2","#b554ff","#199475"],this.init(e)}return function(e,i,a){i&&t(e.prototype,i),a&&t(e,a)}(n,[{key:"init",value:function(t){if(t.title=Object.assign({},this.title,t.title),t.legend=Object.assign({},this.legend,t.legend),Object.assign(this,t),!t.labels||!t.labels.length)throw new Error("缺少主要参数labels");if(!t.datasets||!t.datasets.length)throw new Error("缺少主要参数datasets");this.drawBackground(),"bar"===this.type||"line"===this.type?this.renderBarChart():this.renderPieChart(),this.drawLegend()}},{key:"renderBarChart",value:function(){this.yLength=Math.floor((this.canvas.height-this.topPadding-this.bottomPadding-a)/this.yEqual),this.xLength=Math.floor((this.canvas.width-this.leftPadding-this.rightPadding-a)/this.labels.length),this.ySpace=function(t,i){var a=t.map((function(t){return t.data.reduce((function(t,e){return e<t?t:e}))})),s=Math.ceil(Math.max.apply(Math,e(a))/i),n=s.toString().length-1;return n=2<n?2:n,Math.ceil(s/Math.pow(10,n))*Math.pow(10,n)}(this.datasets,this.yEqual),this.drawXAxis(),this.drawYAxis(),this.drawBarContent()}},{key:"drawBarContent",value:function(){var t=this.ctx,e=this.datasets.length;t.beginPath();for(var n=0;n<e;n++){t.font=this.legend.font,this.legend.textWidth+=Math.ceil(t.measureText(this.datasets[n].label).width),t.fillStyle=t.strokeStyle=this.datasets[n].fillColor||this.colorList[n];for(var o=this.datasets[n].data,r=0;r<o.length;r++)if(!(r>this.labels.length-1)){var l=this.xLength/(e+1),h=this.yLength/this.ySpace,c=this.leftPadding+this.xLength*r+l*(n+.5),d=c+l,f=this.canvas.height-this.bottomPadding,u=f-o[r]*h;if("bar"===this.type)t.fillRect(c,u,d-c,f-u),this.drawValue(o[r],c+l/2,u-s);else if("line"===this.type){var g=this.leftPadding+this.xLength*(r+.5);t.beginPath(),t.arc(g,u,3*i,0,2*Math.PI,!0),t.fill(),0!==r&&(t.beginPath(),t.strokeStyle=this.datasets[n].fillColor||this.colorList[n],t.lineWidth=2*i,t.moveTo(g-this.xLength,f-o[r-1]*h),t.lineTo(g,u),t.stroke(),t.lineWidth=1*i),this.drawValue(o[r],g,u-a)}}}t.stroke()}},{key:"renderPieChart",value:function(){for(var t=this.ctx,e=this.labels.length,i=this.datasets[0],a=i.data,s=a.reduce((function(t,e){return t+e})),n=-Math.PI/2,o=this.canvas.width/2,r=this.canvas.height/2,l=0;l<e;l++){t.font=this.legend.font,this.legend.textWidth+=Math.ceil(t.measureText(this.labels[l]).width),t.beginPath(),t.strokeStyle=t.fillStyle=i.colorList&&i.colorList[l]||this.colorList[l],t.moveTo(o,r);var h=n,c=n+=a[l]/s*2*Math.PI;t.arc(o,r,this.radius,h,c),t.closePath(),t.fill();var d=(h+c)/2;this.drawPieValue(a[l],d)}"ring"===this.type&&(t.beginPath(),t.fillStyle=this.bgColor,t.arc(o,r,this.innerRadius,0,2*Math.PI),t.closePath(),t.fill())}},{key:"drawValue",value:function(t,e,a){var s=this.ctx;this.showValue&&(s.textBaseline="middle",s.font=12*i+"px Arial",s.textAlign="center",s.fillText(t,e,a))}},{key:"drawPieValue",value:function(t,e){var i=this.ctx;if(this.showValue){var s=this.canvas.width/2,n=this.canvas.height/2,o=Math.ceil(Math.abs(this.radius*Math.cos(e))),r=Math.floor(Math.abs(this.radius*Math.sin(e)));i.textBaseline="middle",this.showValue&&(e<=0?(i.textAlign="left",i.moveTo(s+o,n-r),i.lineTo(s+o+a,n-r-a),i.moveTo(s+o+a,n-r-a),i.lineTo(s+o+3*a,n-r-a),i.stroke(),i.fillText(t,s+o+3.5*a,n-r-a)):0<e&&e<=Math.PI/2?(i.textAlign="left",i.moveTo(s+o,n+r),i.lineTo(s+o+a,n+r+a),i.moveTo(s+o+a,n+r+a),i.lineTo(s+o+3*a,n+r+a),i.stroke(),i.fillText(t,s+o+3.5*a,n+r+a)):e>Math.PI/2&&e<Math.PI?(i.textAlign="right",i.moveTo(s-o,n+r),i.lineTo(s-o-a,n+r+a),i.moveTo(s-o-a,n+r+a),i.lineTo(s-o-3*a,n+r+a),i.stroke(),i.fillText(t,s-o-3.5*a,n+r+a)):(i.textAlign="right",i.moveTo(s-o,n-r),i.lineTo(s-o-a,n-r-a),i.moveTo(s-o-a,n-r-a),i.lineTo(s-o-3*a,n-r-a),i.stroke(),i.fillText(t,s-o-3.5*a,n-r-a)))}}},{key:"drawBackground",value:function(){this.ctx.fillStyle=this.bgColor,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.drawTitle()}},{key:"drawTitle",value:function(){var t=this.title;if(t.text){var e=this.ctx;e.beginPath(),e.font=t.font,e.textAlign="center",e.fillStyle=t.color,"top"===t.position?(e.textBaseline="top",e.fillText(t.text,this.canvas.width/2,t.top)):(e.textBaseline="bottom",e.fillText(t.text,this.canvas.width/2,this.canvas.height-t.bottom))}}},{key:"drawXAxis",value:function(){var t=this.ctx,e=this.canvas.height-this.bottomPadding+.5;t.beginPath(),t.strokeStyle=this.axisColor,t.moveTo(this.leftPadding,e),t.lineTo(this.canvas.width-this.rightPadding,e),t.stroke(),this.drawXPoint()}},{key:"drawXPoint",value:function(){var t=this.ctx;t.beginPath(),t.font=12*i+"px Microsoft YaHei",t.textAlign=this.xRorate?"right":"center",t.textBaseline="top",t.fillStyle=this.axisColor;for(var e=0;e<this.labels.length;e++){var n=this.labels[e],o=this.leftPadding+this.xLength*(e+1)+.5,r=this.canvas.height-this.bottomPadding;this.showGrid?(t.strokeStyle=this.gridColor,t.moveTo(o,r),t.lineTo(o,this.topPadding+a)):(t.moveTo(o,r),t.lineTo(o,r-s)),t.stroke(),t.save(),t.translate(o-this.xLength/2,r+s),t.rotate(-this.xRorate*Math.PI/180),t.fillText(n,0,0),t.restore()}}},{key:"drawYAxis",value:function(){var t=this.ctx;t.beginPath(),t.strokeStyle=this.axisColor,t.moveTo(this.leftPadding-.5,this.canvas.height-this.bottomPadding+.5),t.lineTo(this.leftPadding-.5,this.topPadding+.5),t.stroke(),this.drawYPoint()}},{key:"drawYPoint",value:function(){var t=this.ctx;t.font=12*i+"px Microsoft YaHei",t.textAlign="right",t.textBaseline="middle",t.beginPath();for(var e=0;e<this.yEqual;e++){var n=this.leftPadding,o=this.canvas.height-this.bottomPadding-this.yLength*(e+1)+.5;this.showGrid?(t.strokeStyle=this.gridColor,t.moveTo(n,o),t.lineTo(this.canvas.width-this.rightPadding-a,o)):(t.strokeStyle=this.axisColor,t.moveTo(n-s,o),t.lineTo(n,o)),t.stroke(),t.save(),t.fillStyle=this.axisColor,t.translate(n-a,o),t.rotate(-this.yRorate*Math.PI/180),t.fillText(this.ySpace*(e+1),0,0),t.restore()}}},{key:"drawLegend",value:function(){var t=this.legend;if(t.display){var e=this.ctx,i="pie"===this.type||"ring"===this.type;e.beginPath(),e.font=t.font,e.textAlign="left",e.textBaseline="middle";for(var n=i?this.labels.length:this.datasets.length,o=(this.canvas.width-(this.legend.textWidth+(5*n-2)*a))/2,r=0,l=0;l<n;l++){var h=i?this.datasets[0]:this.datasets[l],c=(i?this.labels[l]:h.label)||"";e.fillStyle=h.colorList&&h.colorList[l]||h.fillColor||this.colorList[l],"top"===t.position?(this.drawLegendIcon(o+5*a*l+r,t.top-s,2*a,a),e.fillStyle=t.color,e.fillText(c,o+(5*l+3)*a+r,t.top)):"bottom"===t.position?(this.drawLegendIcon(o+5*a*l+r,this.canvas.height-t.bottom-s,2*a,a),e.fillStyle=t.color,e.fillText(c,o+(5*l+3)*a+r,this.canvas.height-t.bottom)):(e.fillRect(a,t.top+2*a*l,2*a,a),e.fillStyle=t.color,e.fillText(c,4*a,t.top+2*a*l+.5*a)),r+=Math.ceil(e.measureText(c).width)}}}},{key:"drawLegendIcon",value:function(t,e,n,o){var r=this.ctx;"line"===this.type?(r.beginPath(),r.strokeStyle=r.fillStyle,r.lineWidth=2*i,r.moveTo(t,e+s),r.lineTo(t+2*a,e+s),r.stroke(),r.lineWidth=1*i,r.arc(t+a,e+s,3*i,0,2*Math.PI,!0),r.fill()):r.fillRect(t,e,n,o)}}]),n}()}))},bf44:function(t,e,i){"use strict";var a=i("2b0e"),s=new a["default"];e["a"]=s},e2ad:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("el-card",{staticClass:"mgb20",staticStyle:{height:"252px"},attrs:{shadow:"hover"}},[a("div",{staticClass:"user-info"},[a("img",{staticClass:"user-avator",attrs:{src:i("7159"),alt:""}}),a("div",{staticClass:"user-info-cont"},[a("div",{staticClass:"user-info-name"},[t._v(t._s(t.name))]),a("div",[t._v(t._s(t.role))])])]),a("div",{staticClass:"user-info-list"},[t._v("\n                    上次登录时间：\n                    "),a("span",[t._v("2019-11-01")])]),a("div",{staticClass:"user-info-list"},[t._v("\n                    上次登录地点：\n                    "),a("span",[t._v("东莞")])])]),a("el-card",{staticStyle:{height:"252px"},attrs:{shadow:"hover"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("语言详情")])]),t._v("Vue\n                "),a("el-progress",{attrs:{percentage:71.3,color:"#42b983"}}),t._v("JavaScript\n                "),a("el-progress",{attrs:{percentage:24.1,color:"#f1e05a"}}),t._v("CSS\n                "),a("el-progress",{attrs:{percentage:13.7}}),t._v("HTML\n                "),a("el-progress",{attrs:{percentage:5.9,color:"#f56c6c"}})],1)],1),a("el-col",{attrs:{span:16}},[a("el-row",{staticClass:"mgb20",attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("el-card",{attrs:{shadow:"hover","body-style":{padding:"0px"}}},[a("div",{staticClass:"grid-content grid-con-1"},[a("i",{staticClass:"el-icon-lx-people grid-con-icon"}),a("div",{staticClass:"grid-cont-right"},[a("div",{staticClass:"grid-num"},[t._v("1234")]),a("div",[t._v("用户访问量")])])])])],1),a("el-col",{attrs:{span:8}},[a("el-card",{attrs:{shadow:"hover","body-style":{padding:"0px"}}},[a("div",{staticClass:"grid-content grid-con-2"},[a("i",{staticClass:"el-icon-lx-notice grid-con-icon"}),a("div",{staticClass:"grid-cont-right"},[a("div",{staticClass:"grid-num"},[t._v("321")]),a("div",[t._v("系统消息")])])])])],1),a("el-col",{attrs:{span:8}},[a("el-card",{attrs:{shadow:"hover","body-style":{padding:"0px"}}},[a("div",{staticClass:"grid-content grid-con-3"},[a("i",{staticClass:"el-icon-lx-goods grid-con-icon"}),a("div",{staticClass:"grid-cont-right"},[a("div",{staticClass:"grid-num"},[t._v("5000")]),a("div",[t._v("数量")])])])])],1)],1),a("el-card",{staticStyle:{height:"403px"},attrs:{shadow:"hover"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("待办事项")]),a("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"}},[t._v("添加")])],1),a("el-table",{staticStyle:{width:"100%"},attrs:{"show-header":!1,data:t.todoList}},[a("el-table-column",{attrs:{width:"40"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-checkbox",{model:{value:e.row.status,callback:function(i){t.$set(e.row,"status",i)},expression:"scope.row.status"}})]}}])}),a("el-table-column",{scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"todo-item",class:{"todo-item-del":e.row.status}},[t._v(t._s(e.row.title))])]}}])}),a("el-table-column",{attrs:{width:"60"}},[[a("i",{staticClass:"el-icon-edit"}),a("i",{staticClass:"el-icon-delete"})]],2)],1)],1)],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-card",{attrs:{shadow:"hover"}},[a("schart",{ref:"bar",staticClass:"schart",attrs:{canvasId:"bar",options:t.options}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-card",{attrs:{shadow:"hover"}},[a("schart",{ref:"line",staticClass:"schart",attrs:{canvasId:"line",options:t.options2}})],1)],1)],1)],1)},s=[],n=(i("ac6a"),i("7f7f"),i("f5ac")),o=(i("bf44"),{name:"dashboard",data:function(){return{name:localStorage.getItem("ms_username"),todoList:[{title:"今天要修复100个bug",status:!1},{title:"今天要修复100个bug",status:!1},{title:"今天要写100行代码加几个bug吧",status:!1},{title:"今天要修复100个bug",status:!1},{title:"今天要修复100个bug",status:!0},{title:"今天要写100行代码加几个bug吧",status:!0}],data:[{name:"2018/09/04",value:1083},{name:"2018/09/05",value:941},{name:"2018/09/06",value:1139},{name:"2018/09/07",value:816},{name:"2018/09/08",value:327},{name:"2018/09/09",value:228},{name:"2018/09/10",value:1065}],options:{type:"bar",title:{text:"最近一周各品类销售图"},xRorate:25,labels:["周一","周二","周三","周四","周五"],datasets:[{label:"家电",data:[234,278,270,190,230]},{label:"百货",data:[164,178,190,135,160]},{label:"食品",data:[144,198,150,235,120]}]},options2:{type:"line",title:{text:"最近几个月各品类销售趋势图"},labels:["6月","7月","8月","9月","10月"],datasets:[{label:"家电",data:[234,278,270,190,230]},{label:"百货",data:[164,178,150,135,160]},{label:"食品",data:[74,118,200,235,90]}]}}},components:{Schart:n["a"]},computed:{role:function(){return"admin"===this.name?"超级管理员":"普通用户"}},methods:{changeDate:function(){var t=(new Date).getTime();this.data.forEach((function(e,i){var a=new Date(t-864e5*(6-i));e.name="".concat(a.getFullYear(),"/").concat(a.getMonth()+1,"/").concat(a.getDate())}))}}}),r=o,l=(i("5bfc"),i("2877")),h=Object(l["a"])(r,a,s,!1,null,"536323e4",null);e["default"]=h.exports},f5ac:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("canvas",{attrs:{id:t.canvasId}})])},s=[],n=(i("8e6e"),i("ac6a"),i("456d"),i("85f2")),o=i.n(n);function r(t,e,i){return e in t?o()(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var l=i("b367"),h=i.n(l);function c(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function d(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?c(Object(i),!0).forEach((function(e){r(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var f={props:{canvasId:{type:String,default:"",required:!0},options:{type:Object,required:!0}},mounted:function(){this.renderChart()},methods:{renderChart:function(){if(this.checkOptions()){var t=d({},this.options);new h.a(this.canvasId,t)}},checkOptions:function(){var t=this.options;return!(!t.datasets||!t.datasets.length)&&!(!t.labels||!t.labels.length)}},watch:{options:{handler:function(t,e){this.renderChart()},deep:!0}}},u=f,g=i("2877"),v=Object(g["a"])(u,a,s,!1,null,null,null);e["a"]=v.exports}}]);