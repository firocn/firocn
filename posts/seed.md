<%# {
  "title": "Firo 中国节点",
  "description": "seed.firocn.org",
  "summary": "seed.firocn.org",
  "img": "nodes.png",
  "card": "summary",
  "date" : "2022-03-17",
  "author": "Kuro",
  "hidden": true
} %>

如果的你的全节点钱包同步速度很慢，可以添加中国节点加快同步速度。

## 可以直接在控制台中添加（下次打开钱包失效）

在顶部菜单点击「帮助」，点击「调试窗口」，点击「控制台」选项卡。

输入：
```
addnode seed.firocn.org add
```

![截图1](seed-screenshot1.webp#small#smallradius)

## 也可以写进配置文件（永久有效）

进入你的 Firo 钱包数据目录。

![截图2](seed-screenshot2.webp#small#smallradius)

创建或编辑 firo.conf 文件。

添加一行：
```
addnode=seed.firocn.org
```

![截图3](seed-screenshot3.webp#small#smallradius)

保存后，重新打开钱包，在调试窗口的同伴选项卡中应该就能够看到你已连接上中国节点了。

![截图3](seed-screenshot4.webp#small#smallradius)

同步愉快！
