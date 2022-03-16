# Firo 中文网站

## 添加文章

文章使用 [Markdown](https://docs.github.com/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) 格式。在 posts 目录下新建 `.md` 文件。文件名格式为 `yyyy-mm-dd-title.md`。

文件内容顶部是文章的属性，被 `<%# %>` 包裹的 [JSON](https://zh.wikipedia.org/wiki/JSON)。例子：

```html
<%# {
  <!-- 标题 -->
  "title": "Helsing：Lelantus Spark 中的隐私 Firo 主节点",

  <!-- 描述 -->
  "description": "Helsing 允许用户将他们的 FIRO 抵押在 Spark 上，并可以直接向 Spark 地址支付收益直接将其匿名化。这改善了 Firo 主节点运营者的隐私，增加了匿名集，也减少了对透明地址的需求。",

  <!-- 概要（可选，显示在文章页面标题下方） -->
  "summary": "隐私 Firo 主节点",

  <!-- 配图（可选） -->
  "img": "https://firo.org/blog/assets/firo-helsing.png",

  <!-- 推特预览卡片类型（可选，summary 为小图，默认为大图） -->
  "card": "summary",

  <!-- 作者（可选） -->
  "author": "Reuben Yap",

  <!-- 语言（可选。设置 article 标签的语言。html 标签上语言已为 zh-CN） -->
  "language": "en",

  <!-- 是否隐藏（可选） -->
  "hidden": true,

  <!-- 类型（可选）：article、video、forum（默认为 article） -->
  "type": "forum",

  <!-- 图标（可选） -->
  "icon": "fire",

  <!-- 来源地址（可选） -->
  "source": "https://firo.org/2022/01/28/helsing-private-firo-masternode.html"
} %>

<!-- 以下为正文 -->
...
```

视频类型的文章请添加 `type` 和 `iframe` 属性（目前只支持 h5.video.weibo.com 微博视频），例子：
```html
...
"type": "video",
"iframe": "https://h5.video.weibo.com/show/1034:4661069545930830",
...
```

### 图片

放在 imgs 目录下，`.md` 文件中 `img` 的 `src` 直接填写文件名即可。不需要翻译的图片也可以直接引用官网 firo.org 的外链。

## 生成页面

```
node index
```

生成的页面全部在 _site 目录下，_site 文件夹即为整个网站。

## 发布

_site 目录与 `github-pages` 分支关联。

```
cd _site
git add .
git commit -m "Update"
git push
```
