# StartKit 特性


## 元信息
元信息包含脚本的名称，描述。元信息会在选择命令时显示。

元信息以注释的形式写在文件的开头。

### 脚本名称
```js
// Name: 名称
```

### 脚本描述
```js
// Description: 描述
```

### 快捷键
触发命令执行的快捷键。

```js
// Shortcut: opt i
```

多个快捷键同时按下。其他几个按键：`cmd`, `shift`。

## 获取用户输入
### 文本输入
```js
const textInput = await arg('请输入:')
```



### 下拉选择
```js
const selected = await arg('请选择最喜欢的食物:', [
  {
    name: '苹果',
    description: '有利于身体健康',
    tag: '水果',
    value: 1
  },
  {
    name: '红烧肉',
    tag: '肉',
    preview: () => md(`
# 红烧肉
balabalaba.
`),
    value: 2
  },
])
```

字段说明: 
* name: 选项名称。
* description: 选项描述。可选。
* tag: 标签。在选项的右侧显示。可选。
* preview: 预览。移动到选项会显示预览内容。可选。
* value: 用户选择时，程序获得的值。

:::tip

value 可以是对象。

:::

### 表单
适用于多个数据的书
```js
let [name, age] = await fields([
  {
      name: "name",
      label: "Name",
      type: "text",
      placeholder: "John",
      value: 'Joel' // 默认值
  },
  {
      name: "age",
      label: "Age",
      type: "number",
      placeholder: "40",
  }
])
```

### 文件选择
```js
const file = await selectFile()
```

或通过放文件：  
```js
let fileInfos = await drop()
```

获取文件的路径。然后，可以根据路径来读取文件，做一些处理，比如：图片操作。比如，下面是读取图片元信息的代码：
```js
const imgPath = await selectFile()
const exif = await npm('exifr')
const res = await exif.parse(imgPath)

inspect(res)
```

### 读取按键
```js
const keyData = await hotkey()
```

输入 `command + c`, 会返回这样的结果：
```
{
	"key": "c",
	"command": true,
	"shift": false,
	"option": false,
	"control": false,
	"fn": false,
	"hyper": false,
	"os": false,
	"super": false,
	"win": false,
	"shortcut": "command c",
	"keyCode": "KeyC"
}
```

监听按键和鼠标移动，可以用 [iohook](https://www.npmjs.com/package/@hcfy/iohook)。

### 信息确认
```js
let confirm = (await arg({
        placeholder: `确认删除 XXX?`,
        hint: '删除数据不可恢复',
    }, [
        { name: "取消", value: false },
        { name: "确认", value: true },
    ]))
```

## 展示
### 展示 HTML
```js
div(`
<h1>快乐的一天</h1>
<p>今天真是个好日子</p>
`)
```

支持 thailwind

### 展示 Markdown
```js
div(md(`
# 快乐的一天
- 阳光明媚
- 不用上班
- 追的剧更新了
`))
```

:::tip

md() 返回的是解析成 html 的字符串，因此展示 Markdown 必须配合 div() 使用。

:::

## 与 App 交互
### 命令行
```js
await term(命令)
```

比如
```js
await term(`cd ~/.kenv/scripts && ls`)
```

### 文件操作

### 浏览器
#### 获取浏览器打开的窗口
```js
const tabs = await getTabs()
```

返回:
```js
[
  {
    url: 'http: //...',
  }
]
```

某项工作，
摸鱼：一键切换网页。然后再一键恢复。


### Chrome 控制台

## 执行命令行命令


## 调 npm 包

## 调接口


## 定时任务

