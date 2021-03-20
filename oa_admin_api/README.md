#### rubber_single_oa_admin 系统
> 该系统是rubber系列框架中的一个单列后台系统，开发采用SpringBoot+vue分离开发，整合发布的方式。


#### oa_admin_api 部署流程
1. 系统依赖权限开发jar包：springboot-rubber-admin-start-1.0.1.jar。如何系统需要打包，则需要通过一下命令加入到maven仓库
、、、java
mvn install:install-file -Dfile=本地jar包的路径 -DgroupId=组名 -DartifactId=项目名 -Dversion=版本号 -Dpackaging=jar
、、、

2. 通过sql文件 建立数据库。库表都是单库单表。注意部分sql表涉及到一些权限管理的部分，但是本项目已经屏蔽，无需多关注。另外rubber.security.openInterfaceAuth 必须设置成 false。
否则可能引起全部接口无权限。 

#### rubber_admin_ui 部署流程
1. 安装vue、node环境。
2. 执行 node run build 。回在dist的文件中生成static的静态文件 和 index.html的文件。
3. 执行 node run dev 来启动项目，其中可以在vue.config.js 中修改本地服务的ip和端口

#### 整体系统发布
> 在执行了 node run build之后，拷贝 ubber_admin_ui 项目中的 dist的 index.html的文件 到 oa_admin_api的 resource/templates目录下。
> 在拷贝 dist的 static中的全部文件 到 resource/static下，并进行全部覆盖
