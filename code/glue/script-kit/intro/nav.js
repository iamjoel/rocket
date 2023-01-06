// Name: 导航
// Description: 快速访问文本信息，网站，搜索引擎，项目和代码参考。
// Shortcut: cmd shift 0

import "@johnlindquist/kit"
import highlightCode from './utils/highlight.js'

const codeContent = `
JSX.Element // 元素
React.ComponentType // 组件类型 
React.RefObject<HTMLDivElement> // ref

// 样式
React.CSSProperties

// 事件
React.SyntheticEvent<EventTarget> // 事件
React.ChangeEvent<HTMLInputElement> // change事件
React.KeyboardEvent<HTMLInputElement> // 键盘事件
React.MouseEvent<HTMLElement> // 鼠标事件
React.UIEvent<HTMLElement> // 滚动事件
`

const selected = await arg('请选择', [
  // 文本
  {
    name: '快速创建 React 项目的命令',
    description: '用 cra 创建',
    tag: '文本',
    value: {
      type: 'text',
      content: 'npx create-react-app 项目名称',
    }
  },
  // 链接
  {
    name: 'Vue3 文档',
    description: 'Vue3 的官方文档地址',
    tag: '链接',
    value: {
      type: 'url',
      content: 'https://cn.vuejs.org/guide/introduction.html'
    }
  },
  // 搜索引擎
  {
    name: '必应',
    description: '用必应搜索信息',
    tag: '搜索引擎',
    value: {
      type: 'search-engine',
      content: 'https://cn.bing.com/search?q={q}'
    }
  },
  // 项目
  {
    name: 'JoJo 石之海 官网项目',
    description: '用 VSCode 打开该项目',
    tag: '项目',
    value: {
      type: 'project',
      content: home('project/jojo/website')
    }
  },
  // 代码参考
  {
    name: 'React 相关 ts 类型写法',
    tag: '代码参考',
    preview:  async () => {
      const code = await highlightCode({
        contents: codeContent, 
        language: 'javascript'
      })
      return code
    },
    value: {}
  },
])

const {
  content,
  type,
} = selected

switch(type) {
  // 文本
  case 'text':
    copy(content) // 将文本复制到粘贴板。
    new applescript(`display alert "内容已拷贝到粘贴板"`)
    break
  // 链接
  case 'url':
    browse(content) // 用浏览器打开。
    break
  // 搜索引擎
  case 'search-engine':
    const query = await arg('关键字:')
    const url = content.replace('{q}', encodeURIComponent(query))
    browse(url)
    break
  // 项目
  case 'project':
    exec(`code ${content}`) // 用 VSCode  打开。
    break
}
