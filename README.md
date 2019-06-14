# wepy_demo
小程序demo架构

## 开发环境

- node
- [yarn](https://yarn.bootcss.com/)
- wepy-cli

## 参考文档

- [wepy](https://tencent.github.io/wepy/index.html)
- [小程序](https://developers.weixin.qq.com/miniprogram/dev/index.html)

## 项目初始化

```
$ cd wepy_demo
$ ./init.sh

```
## 项目启动

```

// 未进行压缩启动
$ npm run dev  
// 进行压缩启动
$ npm run prod

```
## 项目目录
```
├── src
    ├── components 组件
    ├── plugins 插件集合
    ├── pages 页面
        ├── wxParse 解析html和markdown的插件
    └── libs
        ├── apis.js 接口请求url聚合
        ├── hosts.js 接口域名聚合，可以通过手动切换Env值来切换接口环境
        ├── http.js http请求方法封装
        ├── interface.js 调用聚合、方便引用
        └── utils.js 工具函数封装
    ├── images 图标集合
    └── css 样式集合
└── app.wpy 小程序入口，全局配置，对应小程序app.json
```
## 项目环境切换

项目启动后手动切换，libs/hosts.js中Env的值。

## 单位使用说明

可以根据750px设计稿中的直接写样式，例如：设计稿中宽度80px。
```
width: 80rpx;

```

# 微信小程序
   1、 小程序开发框架的目标是通过尽可能简单、高效的方式让开发者可以在微信中开发具有原生 APP 体验的服务。
   2、 框架提供了自己的视图层描述语言 WXML 和 WXSS，以及基于 JavaScript 的逻辑层框架
       a、WXML是框架设计的一套标签语言，结合基础组件、事件系统，可以构建出页面的结构。
       b、WXSS具有 CSS 大部分特性，扩展了【尺寸单位rpx】【样式导入@import】
       c、JSON用来对微信小程序进行配置
# 小程序开发痛点
    1、 频繁调用 setData及 setData过程中页面跳闪。
    2、 组件化支持能力太弱(几乎没有)
    3、 不能使用 less、jade 等
    4、 无法使用 NPM 包及 ES 高级语法
    5、 一个页面对应4个文件，看的眼花缭乱
    6、 request 并发次数限制，最大并发限制是 10 个
    7、 学习成本比较高
# wepy
    1、 全局安装：npm install wepy-cli -g
    2、 初始化项目：wepy init standard myproject（1.7.0之后版本）开发者工具关闭ES6转ES5
    3、 代码规范（类vue.js规范）
        a、变量与方法使用尽量使用驼峰式命名，避免使用$开头。 以$开头的方法或者属性为框架内建方法或者属性，可以被使用，使用前请参考API文档。
        b、入口，页面，组件的命名后缀为.wpy，外链的文件可以是其它后缀。
        c、使用ES6语法开发。 框架在ES6下开发，因此也需要使用ES6开发小程序，ES6中有大量的语法糖可以让我们的代码更加简洁高效。
        d、使用Promise  Promise 处理，甚至可以直接使用async/await等新特性进行开发。
           wepy使用promise:https://github.com/Tencent/wepy/wiki/wepy项目中使用Promise。
        e、事件传参使用优化后语法代替。 原bindtap="click" data-index={{index}} 替换为 @tap="click({{index}})"。
    4、主要功能特性
        a、开发模式转换
        b、支持组件化开发
        c、支持加载外部NPM包
        d、单文件模式，目录结构更清晰，开发更方便
        f、默认使用babel编译，支持ES6/7的一些新特性
        g、针对原生API进行优化（比如：wx.request的并发问题，最多发起5个请求：this.use('requestfix') 开启promise await async等功能的必需代码：this.use('promisify')）
    5、 注意事项
        a、页面中的methods只能放置bind/catch等方法，其他方法跟methods同级 
        b、在异步函数中更新数据的时候，必须手动调用$apply方法，才会触发脏数据检查流程的运行
        c、wepy.config.js里控制eslint，如果报错 “wx is undefined” 到.eslintrc.js设置

# .wpy文件说明
    1、结构部分，即<template></template>模板部分，对应于原生的.wxml文件 app.wpy文件不需要template
    2、样式部分，即<style></style>样式部分，对应于原生的.wxss文件。
    3、脚本部分，即<script></script>标签中的内容，又可分为两个部分：
            逻辑部分，除了config对象之外的部分，对应于原生的.js文件；
            配置部分，即config对象，对应于原生的.json文件。
# 脚本部分说明
    1、小程序入口app.wpy
        包含一个config属性和其他全局属性、方法、事件。其中config属性对应原生的app.json文件，build编译时会根据config属性自动生成app.json文件
    2、页面page.wpy
        a、config	    页面配置对象，对应于原生的page.json文件，类似于app.wpy中的config
        b、components	页面组件列表对象，声明页面所引入的组件列表
        c、data	        页面渲染数据对象，存放可用于页面模板绑定的渲染数据
        d、methods	    wxml事件处理函数对象，存放响应wxml中所捕获到的事件的函数，如bindtap、bindchange
        e、events	    WePY组件事件处理函数对象，存放响应组件之间通过$broadcast、$emit、$invoke所传递的事件的函数
        f、其它	        小程序页面生命周期函数，如onLoad、onReady等，以及其它自定义的方法与属性
    3、组件com.wpy
        除了不需要config配置以及页面特有的一些生命周期函数之外，其属性与页面属性大致相同。
# 数据绑定方式
    1、原生小程序： this.setData({title: 'this is title'});
    2、wepy： 使用脏数据检查对setData进行封装，在函数运行周期结束时执行脏数据检查 this.title = 'this is title';
       注意： 在异步函数中更新数据的时候，必须手动调用$apply方法，这样才会触发脏数据检查,否则数据无变化
# 优化细节
    1、wx.request 接收参数修改
        async function request () {
            let d = await wepy.request('xxxxx');
            console.log(d);
        }
    2、优化事件参数传递
    3、改变数据绑定方式
    4、组件代替模板和模块
# wepy解析markdown
    1、下载wxParse wxparse:https://github.com/icindy/wxParse 下载完之后我们需要用到目录下的wxParse文件夹，把他拷贝到我们的项目目录下
    2、修改了数据之后，需要手动调用$apply()方法更新数据，并调用通知接口通知组件更新数据 this.$invoke('htmlParser', 'htmlParserNotice');