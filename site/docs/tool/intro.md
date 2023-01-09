---
sidebar_position: 1
---

# 工具
优秀工具的特点：  
1. 易用性。凭直觉就会使用(使用的心智成本低)。
2. 功能性。不仅能完成功能，还提供恰到好处的自定义的地方。
3. 美观。

## 启动器
调用功能的快捷入口。主要的场景：
1. 打开 App。打开 App 也会有带参数的情况，如：在 VSCode 中打开指定项目(项目即为参数)；用搜索引擎搜索(搜索关键字即为参数）。
2. 展示结果。中间可能会调多个 App 或 外部服务(如 HTTP 接口)。

### Script Kit
1. 支持不同类型的输入：文本，下拉选择，文件路径，文件。
2. 打开，调用 App。
   1. 内置打开 App 的 API，如打开浏览器，命令行，浏览器的控制台，获取 shell 命令的执行结果。
   2. 用 Apple Script 来和 App 交互。
3. 外部调用。支持：调用 HTTP 接口。调用 npm 包。
4. 定时任务。

### 其他
Spot Light(聚焦搜索)
> 能快速打开 App 和 Finder 内容。

Alfred。
> 大量的插件。

## 工作流
### CI
Jerkin, Github Actions。

## 操作系统
### Mac


## 命令行
### oh my zsh
强大的插件：  
1. 提供更多的信息。如 Git 信息(当前分支，改动了的文件数量), Node 的版本。
2. 命令补全。
3. 能自定义 UI。

### just
自定义命令。比如在命令行任意地方，启动某个项目：
```sh
#!/usr/bin/env bash
echo "xx site starting..."
set -euo pipefail
cd ...
. ~/.nvm/nvm.sh
nvm use 14
# npm package reload
reload -b
```

git 别名
```sh
j-gc msg:
  git add -A
  git commit -am "{{msg}}"
  git push
```


## 代码编辑器
### VS Code
* 插件
* 快捷键
* 代码片段

## Git
* [配置git别名](./git/alias.md)

## 浏览器
### 浏览器框架
Puppteer， [Playwright](https://www.npmjs.com/package/playwright)

## 前端
### 第三方库
1. 表单： Formily
2. 表格
3. 拖放


## 设计
1. 布局
2. 配色工具
3. 素材，模板。
4. 设计软件： Sketch, Sigma