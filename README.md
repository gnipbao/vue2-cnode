# vue2-cnode

> 学习使用vue2 搭建移动版cnode 基于官方vue-cli生成 接口由cnodejs.org官方提供 https://cnodejs.org/api

### 技术栈

+ vue2 + webpack + vuex + sass + vue-router + axios
+ 布局采用阿里团队的[高清方案](http://www.jianshu.com/p/985d26b40199)

### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:3030
npm run dev

# build for production with minification
npm run build
```

### 目录结构
```
.
|-- build                           // vue-cli构建目录                       
|-- config                           
|   |-- dev.env.js
|   |-- index.js 
|   |-- prod.env.js                    
|-- src                              // 源码目录
|   |-- components                   // 公共组件
|       |-- backtop.vue              
|       |-- header.vue            
|       |-- loading.vue               
|       |-- menu.vue               
|       |-- reply.js                 
|       |-- userinfo.vue              
|   |-- assets                       // 各种静态资源
|   |-- style                        // 样式文件
|       |-- common.scss              // 全局通用scss文件
|       |-- main.scss                // 主页样式
|       |-- mixin.scss               // 定义混入样式函数
|   |-- config                       // 组件的一些配置
|       |-- api.js 
|       |-- env.js                   // 环境参数配置
|   |-- pages                        // 各种页面组件
|       |-- about                    // 关于
|       |-- index                    // 首页
|       |-- login                    // 登录
|       |-- message                  // 消息列表
|       |-- newTopic                 // 发布主题页
|       |-- topic                    // 主题详情
|       |-- topicList                // 主题列表
|       |-- user                     // 查看用户资料
|   |-- router 
|       |--router.js                 //路由配置
|   |-- store                        // vuex的状态管理
|       |-- index.js                 // 加载各种store模块
|       |-- mutationTypes.js         // mutationTypes
|       |-- action.js                // action可以分出来
|       |-- getter.js                // getter需要时候可以划分
|       |-- topicTab.js              // tab选项
|   |-- utils                        // 公共的js方法
|   |-- App.vue                      // 页面入口文件
|   |-- main.js                      // 程序入口文件，加载各种公共组件
|-- index.html                       // 程序入口根组件  
|-- .editorconfig                    // 编辑器配置
|-- .gitignore                       // git忽略文件配置
|-- .babelrc                         // ES6语法编译配置
|-- README.md                        // 项目说明
|-- package.json                     // 配置项目相关信息，通过执行 npm init 命令创建
```
### 在线效果

![preview](https://cloud.githubusercontent.com/assets/16514704/25163967/7c193fe0-2500-11e7-84c3-ded87c48bf52.png)
