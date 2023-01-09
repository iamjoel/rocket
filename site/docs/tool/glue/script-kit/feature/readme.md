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

### 进一步选择

### 路径


### 文件选择
```js
const file = await selectFile()
```

获取文件的路径。


## 与 App 交互
### 命令行

### 文件操作

### 浏览器
#### 获取浏览器打开的
```
```

### Chrome 控制台

## 执行命令行命令


## 调 npm 包

## 调接口


## 定时任务

