# 用 Script Kit 来优化日常工作流吧
我们的日常工作中，往往充斥着各种琐碎的任务：打开项目，搜索信息，查文档等。这些任务在不断的侵蚀着我们的专注力，降低我们的工作效率。

[Script Kit](https://www.scriptkit.com/) 是一个功能强大，易用的启动器。它可以帮助我们快速的完成这些琐碎的任务。

本文通过一个 Demo 实现自动化如下几种任务：
1. 信息搜索。
2. 打开网站。
3. 用搜索引擎搜索信息。
4. 打开项目。
5. 查看代码参考。

效果如下: 

话不多说，我们来 Building 吧~

## 1 安装 Script Kit
在 [官网](https://www.scriptkit.com/) 下载安装包下载。

打开 Script Kit 后，Script Kit 处于最小化状态。展开 Script Kit 有两种方式: 
1. 快捷键 `command + ;`。
2. 点击头部状态栏中的图标。

## 2 创建脚本
进入 Script Kit 输入脚本的名字，然后回车，就完成了脚本的创建。我们这边的 Demo 的名字叫 `nav`。

![创建](./imgs/create.png)

Script Kit 创建了如下的空的脚本文件 `nav.js`

```js
// Name: nav

import "@johnlindquist/kit"

```

其中: 
1. `// Name: nav` 该脚本的名称。 
2. `import "@johnlindquist/kit"` 引入工具库。必须的。


## 3 运行脚本
在上面的脚本中添加内容，`div('Hello World!')`:
```
// Name: nav

import "@johnlindquist/kit"

div('Hello World!')
```

1. 展开 Script Kit: `command + ;`。
2. 输入 `nav`。
3. 回车运行。


![运行](imgs/run.png)

运行结果:




## 4 渲染用户选择列表
每个类型一个。
```js
args([
  // 文本；链接；
  {

  }
])
```

展示效果:

其中，
* name:
* description:
* tag:
* preview


代码高亮的实现，用的 `highlight.js`：

## 5 选择后的处理
// 文本拷贝到


## 6 细节优化
加描述。在头部
```
// Description: 快速显示常用信息，网站，项目，工具等。
```

加快捷键
```js
// Shortcut: cmd shift j
```

加交互反馈
```js
new applescript(`display alert "已拷贝内容到粘贴板"`)
```

将列表
完整代码: [这里](...)


## 总结
本文只是只是冰山一角。

可以通过 applescipt 和 本地应用交互。比如，如下脚本实现了关闭所有的 Finder 窗口：
```js
new applescript(`
tell application "Finder"
	set theWindowList to windows
	repeat with i from 1 to number of items in theWindowList
		set this_item to item i of theWindowList
		set windowName to name of this_item
		close this_item
	end repeat
end tell
`)
```

调接口来查询网上的信息，生成摘要并显示。比如，查询图书信息信息
```js
let query = await arg('Search for a book title:')

//This API can be a little slow. Wait a couple seconds
let response = await get(`http://openlibrary.org/search.json?q=${query}`)

let transform = ({title, author_name}) =>
  `* "${title}" - ${author_name?.length && author_name[0]}`

let markdown = response.data.docs.map(transform).join('\n')

inspect(markdown, 'md')
```

用定时任务来做定时需要做的事。每天间隔2个小时提醒喝水。
```js
// Shedule
```


## 常见问题
### 如何调试?
```
inspect(内容)
```

## 链接
* 论坛
* 其他用户写的脚本


