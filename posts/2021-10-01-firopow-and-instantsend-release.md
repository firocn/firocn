<%# {
  "title": "FiroPoW 和即时发送随 Firo v0.14.9.0 发布",
  "summary": "硬分叉定于 10 月 26 日",
  "description": "硬分叉定于 10 月 26 日",
  "type": "announcement",
  "icon": "nice",
  "source": "https://firo.org/2021/10/01/firopow-and-instantsend-release.html"
} %>

![FiroPoW 和即时发送随 Firo v0.14.9.0 发布](https://firo.org/blog/assets/firopow-instantsend-release.png#size=8001x4001)

我们很自豪地宣布 Firo v0.14.9.0 的发布，它将启用 FiroPoW 和即时发送。这是一个强制性的更新，将于 10 月 26 日 6:00 UTC 在主网生效，所以你必须在此日期之前[将你的钱包和节点更新到 v0.14.9.0](https://firo.org/zh-cn/get-firo/download/)，以实现无缝过渡。

## 什么是 FiroPoW

FiroPoW 是 Firo 的新挖矿算法，将取代 Firo 目前的挖矿算法：MTP（Merkle Tree Proof）。它针对 GPU 挖矿进行了高度优化，并被设计为既能抵御 FPGA，又能抵御 ASIC，以平衡竞争环境，并允许人们从自己的消费级硬件中挖矿。我们一直是工作量证明的拥趸，它能够将虚拟货币的价值与现实世界联系起来，并以公平和去中心化的方式分配 Firo 的供应量，不受限制。

FiroPoW 遵循 [ProgPoW 的 0.9.4 规范](https://github.com/ifdefelse/ProgPOW)，并做了一个小的改动，使算法在每个区块中随机变化。起始的 DAG 大小将略高于 4GB，每 1300 个块（~4.5 天）将增加 8MB。选择这个 DAG 大小是为了支持大多数现代显卡。

FiroPoW 区块（不包括交易）比 MTP 小 ~500 倍，这大大减少了区块链的膨胀和网络带宽的要求。NVIDIA 和 AMD 显卡之间的差距也缩小了，允许更多的用户有竞争力地挖矿。

我们将发布使用新的 FiroPoW 算法挖 Firo 的更新的指南，并期待广泛的第三方挖矿软件支持和矿池。我们要感谢所有在这方面支持 Firo 生态系统的人。

## 什么是即时发送？

即时发送允许交易在几秒钟内被安全地认为是最终确定的，甚至不需要等待区块确认。与 ChainLocks 技术（使区块通过一次确认就能最终确定）相结合，它使 Firo 甚至可以作为一种货币用于现实生活中的交易。这两种技术都是利用 Firo 的主节点网络的 Quorums。

一旦 Firo 达到 421150 区块，即时发送将默认用于所有的钱包交易（包括 Lelantus 交易），我们将与生态系统的参与者，如交易所合作，允许快速识别 Firo 充值。

## 下一步是什么？

FiroPoW 是一项重大改进，加强了我们的承诺，使 Firo 可通过消费级硬件挖矿，并使竞争环境更加公平。它还通过减少存储和网络要求，大大改善了 Firo 的可扩展性。

即时发送极大地改善了作为货币的功能和 Firo 的用户体验，将交易最终确定所需的等待时间减少到几秒钟。

我们相信隐私技术与良好的用户体验是相辅相成的，我们将在这方面努力工作，原生手机钱包和快速同步钱包即将到来。
