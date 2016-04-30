# Sass 文件夹结构说明

参考：[http://sass-guidelin.es/zh/#section-53](http://sass-guidelin.es/zh/#section-53)

### Base 文件夹
> `base/`文件夹存放项目中的模板文件。在这里，可以找到重置文件、排版规范文件或者一个样式表——定义一些 HTML 元素公认的标准样式（我喜欢命名为_base.scss）。

- **_base.scss**:公认的标准样式
- **_reset.scss**:浏览器重置样式
- **_animations.scss**:动画
- 。。。

### Layout / Partials文件夹
> `layout/`(partials/) 文件夹存放构建网站或者应用程序使用到的布局部分。该文件夹存放网站主体（头部、尾部、导航栏、侧边栏…）的样式表、栅格系统甚至是所有表单的 CSS 样式。

### Components / Modules 文件夹
>对于小型组件来说，有一个 `components/` 文件夹来存放。相对于 `layout/` 的宏观（定义全局线框结构），`components/` 更专注于局部组件。该文件夹包含各类具体模块，基本上是所有的独立模块，比如一个滑块、一个加载块、一个部件……由于整个网站或应用程序主要由微型模块构成，`components/` 中往往有大量文件。

### Pages 文件夹
> 如果页面有特定的样式，最好将该样式文件放进 `pages/` 文件夹并用页面名字。例如，主页通常具有独特的样式，因此可以在 `pages/` 下包含一个 `_home.scss` 以实现需求。
> 取决于各自的开发流程，这些文件可以使用你自己的前缀命名，避免在最终样式表中与他人的样式表发生合并。一切完全取决于你。

### Themes 文件夹
> 在大型网站和应用程序中，往往有多种主题。虽有多种方式管理这些主题，但是我个人更喜欢把它们存放在 `themes/` 文件夹中。

### Utils / Helpers / Utilities 文件夹
> utils/ 文件夹包含了整个项目中使用到的 Sass 辅助工具，这里存放着每一个全局变量、函数、混合宏和占位符。
> 该文件夹的经验法则是，编译后这里不应该输出任何 CSS，单纯的只是一些 Sass 辅助工具。
> 当项目体量庞大工具复杂时，通过主题而不是类型分类整理可能更有帮助，比如排版（_typography.scss）、主题（_theming.scss）等。每一个文件都包含所有的相关信息：变量、函数、混合宏和占位符。这样做可以让维护更加单，特别针对于文件较长的情况。

### Vendors 文件夹
> 最后但并非最终的是，大多数的项目都有一个 vendors/ 文件夹，用来存放所有外部库和框架（Normalize, Bootstrap, jQueryUI, FancyCarouselSliderjQueryPowered……）的 CSS 文件。将这些文件放在同一个文件中是一个很好的说明方式:”嘿，这些不是我的代码，无关我的责任。”
> 如果你重写了任何库或框架的部分，建议设置第 8 个文件夹 vendors-extensions/ 来存放，并使用相同的名字命名。
> 例如，vendors-extensions/_boostrap.scss 文件存放所有重写 Bootstrap 默认 CSS 之后的 CSS 规则。这是为了避免在原库或者框架文件中进行二次编辑——显然不是好方法。

### 入口文件
> 主文件（通常写作 main.scss）应该是整个代码库中唯一开头不用下划线命名的 Sass 文件。除 @import 和注释外，该文件不应该包含任何其他代码。

***

# 文件引入方式：
为了保持可读性，主文件应遵守如下两种准则一种
#### 方式一：
- 每个 @import引用一个文件；
- 每个 @import单独一行；
- 从相同文件夹中引入的文件之间不用空行；
- 从不同文件夹中引入的文件之间用空行分隔；
- 忽略文件扩展名和下划线前缀。
```css
@import 'utils/variables';
@import 'utils/functions';
@import 'utils/mixins';
@import 'utils/placeholders';

@import 'vendors/bootstrap';
@import 'vendors/jquery-ui';

@import 'base/reset';
@import 'base/typography';

@import 'layout/navigation';
@import 'layout/grid';
@import 'layout/header';
@import 'layout/footer';
@import 'layout/sidebar';
@import 'layout/forms';

@import 'components/buttons';
@import 'components/carousel';
@import 'components/cover';
@import 'components/dropdown';

@import 'pages/home';
@import 'pages/contact';

@import 'themes/theme';
@import 'themes/admin';
```

#### 方式二：
- 每个文件夹只使用一个@import
- 每个@import之后都断行
- 每个文件占一行
- 新的文件跟在最后的文件夹后面
- 文件扩展名都可以省略
```css
@import
  'utils/variables',
  'utils/functions',
  'utils/mixins',
  'utils/placeholders';

@import
  'vendors/bootstrap',
  'vendors/jquery-ui';

@import
  'base/reset',
  'base/typography';

@import
  'layout/navigation',
  'layout/grid',
  'layout/header',
  'layout/footer',
  'layout/sidebar',
  'layout/forms';

@import
  'components/buttons',
  'components/carousel',
  'components/cover',
  'components/dropdown';

@import
  'pages/home',
  'pages/demo';

@import
  'themes/theme',
  'themes/admin';
```















