import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const standardNote = defineNoteConfig({
  dir: 'standard',
  link: '/standard',
  sidebar: [{
    text: '快速上手',
    icon: 'fluent-mdl2:edit-create',
    collapsed: true,
    items: [{
      text: '开发规范',
      icon: 'material-symbols:markdown-outline',
      collapsed: false,
      items:[
        '',
        'applet',
      ]
    }],
  },
 {
    text: '小程序组件',
    icon: 'gravity-ui:hammer',
    collapsed: false,
    items: [{
      text: '图表',
      icon: 'gravity-ui:chart-pie',
      collapsed: false,
      prefix: 'eval',
      items:[
        'pie',
      ]
    }],
  },
 ],
},
)

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [standardNote],
})



// {
//   text: '小程序组件',
//   icon: 'gravity-ui:hammer',
//   collapsed: true,
//   link: '/eval/',
//   items: [{
//     text: '图表',
//     icon: 'gravity-ui:chart-pie',
//     collapsed: false,
//     items:[
//       'pie',
//     ]
//   }],
// },