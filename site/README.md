#  Rocket

### 启动
```
$ yarn start
```

### 配置菜单
[sidebar.js](./sidebars.js)

### MDX
```js
export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

<Highlight color="#25c2a0">Docusaurus 绿</Highlight> 和 <Highlight color="#1877F2">Facebook 蓝</Highlight> 是我最喜欢的颜色。
```


## 文档
* [Docusaurus 2](https://docusaurus.io/)