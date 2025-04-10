import{_ as r,c as k,d as l,a as t,w as a,r as d,o as p,e as i,f as n}from"./app-Cwa4zWpf.js";const g={};function c(y,s){const e=d("VPCard"),h=d("VPCardGrid");return p(),k("div",null,[s[4]||(s[4]=l('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>该图标 <code>DChart</code> 二次封装,若要查看详情内容<a href="https://dchart.pages.dev/docs/tutorial/pie" target="_blank" rel="noopener noreferrer">DChart</a> 点这里</p></div><h3 id="一、效果" tabindex="-1"><a class="header-anchor" href="#一、效果"><span><mark><strong>一、效果</strong></mark></span></a></h3>',2)),t(h,null,{default:a(()=>[t(e,{title:"示例 1"},{default:a(()=>s[0]||(s[0]=[i("p",null,[i("img",{src:"https://dchart.pages.dev/assets/images/p7-2d4b93cacfebdf56189e3803234e5905.png",alt:"alt text",loading:"lazy"}),n(" 环形图")],-1)])),_:1}),t(e,{title:"示例 2"},{default:a(()=>s[1]||(s[1]=[i("p",null,[i("img",{src:"https://dchart.pages.dev/assets/images/p4-3ecf8f597053530cd98e8f4fa34d8d1b.png",alt:"alt text",loading:"lazy"}),n(" 圆角环形图")],-1)])),_:1}),t(e,{title:"示例 3"},{default:a(()=>s[2]||(s[2]=[i("p",null,[i("img",{src:"https://dchart.pages.dev/assets/images/p6-af4c0ac1dc65d84105c51ca86881d542.png",alt:"alt text",loading:"lazy"}),n(" 半环形图")],-1)])),_:1}),t(e,{title:"示例 4"},{default:a(()=>s[3]||(s[3]=[i("p",null,[i("img",{src:"https://dchart.pages.dev/assets/images/p8-29ad700ad84b72c9266dcfc32688be2d.png",alt:"alt text",loading:"lazy"}),n(" 半环形图")],-1)])),_:1})]),_:1}),s[5]||(s[5]=l(`<h3 id="二、代码示例" tabindex="-1"><a class="header-anchor" href="#二、代码示例"><span><mark><strong>二、代码示例</strong></mark></span></a></h3><div class="language-dart line-numbers-mode" data-highlighter="shiki" data-ext="dart" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  DChartPieO</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">(</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">      data</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">:</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> ordinalDataList</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">         animate</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">           onChangedListener</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">:</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> (</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">OrdinalData</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> data) {</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">              print</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">(</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">\${data.domain}</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">&quot;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">           }</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">          configRenderPie</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> ConfigRenderPie</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">(</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">            arcRatio</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0.45</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">            strokeWidthPx </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">:</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> -</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">           arcLabelDecorator</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> ArcLabelDecorator</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">(</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">             labelPosition</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> ArcLabelPosition</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">auto</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">              insideLabelStyle</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">:</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> const</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> LabelStyle</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">(</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">                color</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> Colors</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">black</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">                fontSize</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 18</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">                )</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">             outsideLabelStyle</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">:</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> const</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> LabelStyle</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">(</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">                  color</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> Colors</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">red</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">                  fontSize</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 16</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">                )</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">               labelPadding</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 10</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">              leaderLineStyle</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">:</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> const</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> ArcLabelLeaderLineStyle</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">(</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">               color</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;"> Colors</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">blue</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">                 length</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 30</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">                 thickness</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">               )</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">                 showLeaderLines</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">             )</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">         )</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">      )</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三、属性" tabindex="-1"><a class="header-anchor" href="#三、属性"><span><mark><strong>三、属性</strong></mark></span></a></h3><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">说明</th><th style="text-align:center;">类型</th><th style="text-align:center;">可选值</th><th style="text-align:center;">默认值</th></tr></thead><tbody><tr><td style="text-align:center;">data</td><td style="text-align:center;">图标值</td><td style="text-align:center;">OrdinalData</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">animate</td><td style="text-align:center;">图表时动画化</td><td style="text-align:center;">bool</td><td style="text-align:center;">-</td><td style="text-align:center;">false</td></tr><tr><td style="text-align:center;">animationDuration</td><td style="text-align:center;">图表时动画化时长</td><td style="text-align:center;">Duration</td><td style="text-align:center;">-</td><td style="text-align:center;">milliseconds: 300</td></tr><tr><td style="text-align:center;">configRenderPie</td><td style="text-align:center;">扩展图标</td><td style="text-align:center;">ConfigRenderPie</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">onChangedListener</td><td style="text-align:center;">点击图标回调</td><td style="text-align:center;">Function</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td></tr></tbody></table><h2 id="configrenderpie" tabindex="-1"><a class="header-anchor" href="#configrenderpie"><span>ConfigRenderPie</span></a></h2><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">说明</th><th style="text-align:center;">类型</th><th style="text-align:center;">可选值</th><th style="text-align:center;">默认值</th></tr></thead><tbody><tr><td style="text-align:center;">insideLabelStyle</td><td style="text-align:center;">圆弧内的标签配置</td><td style="text-align:center;">LabelStyle</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">outsideLabelStyle</td><td style="text-align:center;">圆弧外的标签配置</td><td style="text-align:center;">LabelStyle</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">leaderLineStyle</td><td style="text-align:center;">标签的前导行配置</td><td style="text-align:center;">ArcLabelLeaderLineStyle</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td></tr><tr><td style="text-align:center;">labelPosition</td><td style="text-align:center;">圆弧放置标签的位置</td><td style="text-align:center;">ArcLabelPosition</td><td style="text-align:center;">auto/outside/inside</td><td style="text-align:center;">auto</td></tr><tr><td style="text-align:center;">labelPadding</td><td style="text-align:center;">标签文本前后的空格</td><td style="text-align:center;">int</td><td style="text-align:center;">-</td><td style="text-align:center;">5</td></tr><tr><td style="text-align:center;">showLeaderLines</td><td style="text-align:center;">圆弧外的标签画引线</td><td style="text-align:center;">bool</td><td style="text-align:center;">-</td><td style="text-align:center;">true</td></tr></tbody></table>`,6))])}const o=r(g,[["render",c]]),B=JSON.parse('{"path":"/standard/pie/","title":"圆角环形图(Pie)","lang":"zh-CN","frontmatter":{"title":"圆角环形图(Pie)","createTime":"2025/03/26 10:48:41","permalink":"/standard/pie/","tags":["pie图标","小程序组件"],"watermark":true},"headers":[],"readingTime":{"minutes":0.98,"words":295},"git":{"updatedTime":1744261661000,"contributors":[{"name":"瓦吉普","username":"","email":"wajipu@qq.com","commits":1,"avatar":"https://gravatar.com/avatar/f627dee9b95c4c406ce9542b40c232cfc8f3dd4f7a6de716ac83073c7a39efd7?d=retro"}]},"filePathRelative":"notes/standard/eval/pie.md"}');export{o as comp,B as data};
