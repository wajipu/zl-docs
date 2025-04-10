---
title: 众流小程序
createTime: 2025/03/25 17:40:20
permalink: /standard/k46maie8/
tags: 
  - 指南
  - 快速上手
---
## 依赖环境

- [Dart](https://dart.cn/get-dart/) : **^3.6.2**
- [Flutter](https://docs.flutter.cn/get-started/install) : **^3.27.4 或 >= ^3.27.4**

## 怎么安装依赖环境？ 

我们提供了一个 `依赖库地址`，帮助您构建一个基本小程序项目。您可以通过以下`依赖库地址`添加到 `pubspec.yaml`
::: steps
- ==[Dart](https://dart.cn/get-dart/):→依赖库== 
    ``` dart
    dart_eval:
     git:
        url: git@codeup.aliyun.com:xxxxx/infrastructure/dart_eval.git
        ref: 仓库版本号
    ```
- ==[Flutter](https://docs.flutter.cn/get-started/install):→依赖库== 
    ```dart
    flutter_eval:
      git:
        url: git@codeup.aliyun.com:xxxxxxxxx/infrastructure/flutter_eval.git
        ref: 仓库版本号
    ```
- ==[Applet](https:)→依赖库== 
    ```dart
    applet:
      git:
        url: git@codeup.aliyun.com:xxxxxxxxx/infrastructure/applet.git
        ref: 仓库版本号
    ```

:::

 ##  `众流小程序` 开发注意事项
::: steps
-  ### ==小程序代码存放目录：==

    ```
    lib/app/{小程序项目名称}
    ```

- ### ==小程序头文件：==
  

- ### ==版本控制文件：==

- #### ==manifest.json：==
    ```json
    {
        ///小程序名称
        "name": "支付管理",
        ///小程序版本
        "version": "0.0.1"
     }
    ```
- ### ==入口文件：==
  
   携带参数说明:

    1.`url`: 用于小程序路由路径

    2.`arguments`: 用于提供小程序参数

    ```dart
     App.open(url, arguments: arguments);
    ```

- ####  ==main.dart `众流小程序`：==

    ```dart
        ///小程序入口函数
    Widget entrypoint(
        ///路径
        String path,

        ///参数
        dynamic argments,
    ) {
        ///注意：当前无法使用  switch () 语法，请使用 if ！

        ///加载详情页
       if (path == '/detail') {
          return PageDetail();
    }
       ///加载默认首页
       return PageHome();
    }
    ```

- ### ==小程序网络请求拦截器：==

  文件：lib/services/interceptor.dart

- ## ==语法注意事项：==

    1. [支持的语法](https://pub.dev/packages/dart_eval#language-feature-support-table)
    2. 由于语法限制尽量避免面使用高级语法糖，否则可能碰见一些比较难以排查或修复的 BUG。

- ## ==常规事项：==

    1. 宿主已接管授权业务，小程序不需要关心授权业务
    2. 引用的三方库需要进行桥接，界面库桥接至 flutter_eval ，基础功能库桥接至 applet。

- ## ==小刀项目如何迭代小程序：==

    1. 众流生意 进入 管理端 / 应用管理 / {选择应用} / 编辑菜单
    2. 遵循 URL 规范填入 小程序路由 ( 例：app://payment_manager/ )

    宿主会根据填写的 小程序路由 进行判断加载 小程序 还是 小刀应用



- ## ==FUTURE/TODO：==
    1. 拦截器应该需要适配更多的错误码(与小刀的错误码对齐实现)。
    2. 拖拽组件封装
    3. 图片上传编辑组件封装
