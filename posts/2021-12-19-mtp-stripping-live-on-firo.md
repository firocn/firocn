<%# {
  "title": "MTP 剥离在 Firo 上线",
  "summary": "更小的区块链来了！",
  "description": "MTP 剥离使 Firo 的区块链大小从 60 多 GB 降至 4GB 以下",
  "img": "https://firo.org/blog/assets/day-4-mtp-stripping.png",
  "author": "Reuben Yap",
  "source": "https://firo.org/2021/12/19/mtp-stripping-live-on-firo.html"
} %>

![MTP 剥离](https://firo.org/blog/assets/day-4-mtp-stripping.png#size=8000x4000)

在[我们的最新版本](https://github.com/firoorg/firo/releases)中，[MTP 剥离](https://firo.org/2021/11/08/mtp-data-stripping.html)现在已经在 Firo 上线。MTP 剥离使 Firo 的区块链大小从 60 多 GB 降至 4GB 以下，降低了节点要求，也使其可以在普通计算设备上运行，特别是在空间宝贵的固态硬盘上。

MTP 剥离的作用是删除我们之前的工作量证明中不需要的 [MTP 数据证明](https://arxiv.org/pdf/1606.03588.pdf)。如果需要，节点仍然可以选择保留这些证明。随着越来越多的节点使用 MTP 剥离模式，节点也会以剥离的形式推送旧块，大大减少了进行全新同步所需的数据量。

## 如何进行 MTP 剥离

一次全新的同步将自动剥离 MTP 证明。如果你有一个现有的钱包，你想使用剥离的版本，你将需要清除你现有的区块链（但不要删除你的钱包文件），并重新同步，这可能需要一段时间，所以只有在你不急于使用你的钱包时才这样做。

按照[这个指南](https://github.com/firoorg/firo/wiki/MTP-stripping)来进行 MTP 剥离。**请务必备份你的钱包！**

1. 确保你的 Firo-QT 钱包没有在运行
2. 在你的 [Firo 数据目录](https://github.com/firoorg/firo/wiki/Default-data-directories)中，删除以下文件夹
    * blocks
    * chainstate
    * evodb
    * llmq
3. 再次启动你的 Firo-QT 钱包。它将从头开始同步
