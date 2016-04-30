
# 本目录存放JSX文件

- [ReactJS中文官方](http://reactjs.cn/)
- [React 入门实例教程](http://www.ruanyifeng.com/blog/2015/03/react.html)

> React 用于构建用户界面的JAVASCRIPT库


# 离线转换JSX文件

### `准备`
- 先本地安装[NodeJS](https://nodejs.org/)
- npm 安装React转换jsx的命令行工具
```
npm install -g react-tools
```

### `转换方式一`
cmd模式进入static文件夹，设置监听及输出目录
```
jsx --watch jsx/ js/react/
```
此时一旦jsx中的文件有变化，就会自动生成到输出目录，生成的JS文件可以用require的方式引用


### `转换方式二`
运行jsx目录下的`JSXTransformer.bat`批处理文件，
在CMD窗口会将监听（jsx）和输出目录（js/react）打印出来