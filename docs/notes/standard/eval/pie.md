---
title: 圆角环形图(Pie)
createTime: 2025/03/26 10:48:41
permalink: /standard/pie/
tags:
 - pie图标
 - 小程序组件
---
::: warning
  该图标 `DChart` 二次封装,若要查看详情内容[DChart](https://dchart.pages.dev/docs/tutorial/pie) 点这里
:::
### ==**一、效果**==
:::: card-grid

::: card title="示例 1"

![alt text](https://dchart.pages.dev/assets/images/p7-2d4b93cacfebdf56189e3803234e5905.png)
环形图
:::

::: card title="示例 2"

 ![alt text](https://dchart.pages.dev/assets/images/p4-3ecf8f597053530cd98e8f4fa34d8d1b.png)
 圆角环形图
:::

::: card title="示例 3"

![alt text](https://dchart.pages.dev/assets/images/p6-af4c0ac1dc65d84105c51ca86881d542.png)
半环形图
:::

::: card title="示例 4"

![alt text](https://dchart.pages.dev/assets/images/p8-29ad700ad84b72c9266dcfc32688be2d.png)
半环形图
:::

::::

### ==**二、代码示例**==
```dart
  DChartPieO(
      data: ordinalDataList,
         animate: true,
           onChangedListener: (OrdinalData data) {
              print("${data.domain}");
           },
          configRenderPie: ConfigRenderPie(
            arcRatio: 0.45,
            strokeWidthPx : -1,
           arcLabelDecorator: ArcLabelDecorator(
             labelPosition: ArcLabelPosition.auto,
              insideLabelStyle: const LabelStyle(
                color: Colors.black,
                fontSize: 18,
                ),
             outsideLabelStyle: const LabelStyle(
                  color: Colors.red,
                  fontSize: 16,
                ),
               labelPadding: 10,
              leaderLineStyle: const ArcLabelLeaderLineStyle(
               color: Colors.blue,
                 length: 30,
                 thickness: 2,
               ),
                 showLeaderLines: true,
             ),
         ),
      ),
```

### ==**三、属性**==

|参数 | 说明 | 类型 | 可选值| 默认值|
|:--------:|:---:|:---:|:---:|:---:|
| data | 图标值 | OrdinalData | - | - |
| animate |图表时动画化 | bool | - | false |
| animationDuration | 图表时动画化时长 | Duration | - | milliseconds: 300 |
| configRenderPie | 扩展图标 | ConfigRenderPie | - | - |
| onChangedListener | 点击图标回调 | Function | - | - |

 ## ConfigRenderPie
|参数 | 说明 | 类型 | 可选值| 默认值|
|:--------:|:---:|:---:|:---:|:---:|
| insideLabelStyle | 圆弧内的标签配置 | LabelStyle | - | - |
| outsideLabelStyle |圆弧外的标签配置 | LabelStyle | - | - |
| leaderLineStyle |  标签的前导行配置 | ArcLabelLeaderLineStyle | - | - |
| labelPosition | 圆弧放置标签的位置 | ArcLabelPosition | auto/outside/inside | auto |
| labelPadding | 标签文本前后的空格 | int | - | 5 |
| showLeaderLines | 圆弧外的标签画引线 | bool | - | true |

