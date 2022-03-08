<%# {
  "title": "Spats：由 Spark 支持的机密资产",
  "description": "揭示 Spats，它扩展了 Spark 技术，以支持机密代币/资产。Spats 不仅隐藏发送方、接收方、金额，而且还隐藏资产类型！Spats 将构成 Firo 隐私生态系统层的基础。",
  "summary": "用户定义的用于 Spark 交易协议的机密资产",
  "img": "https://firo.org/blog/assets/spark-assets.png",
  "author": "Reuben Yap",
  "type": "announcement",
  "icon": "spats",
  "source": "https://firo.org/2022/03/07/spats-confidential-assets-lelantus-spark.html"
} %>

![Spark 资产：将 Lelantus Spark 扩展到机密资产](https://firo.org/blog/assets/spark-assets.png#size=1920x960 "Spark 资产：将 Lelantus Spark 扩展到机密资产")

我们很自豪地揭示 Firo 的研究论文 [Spats（Spark Assets 的缩写）](https://eprint.iacr.org/2022/288)，它扩展了 [Lelantus Spark](https://eprint.iacr.org/2021/1173)，以支持机密资产，这与 Firo 致力于为更广泛的加密货币生态系统提供隐私的重点相一致。

大多数加密货币生态系统平台，如以太坊、币安智能链、Solana 和 Avalanche，在设计时都没有考虑到隐私问题。虽然有各种尝试为这些生态系统添加隐私，但由于这些链的架构，它们要么依赖第二层解决方案，要么使用复杂而昂贵的智能合约，并经常以各种方式泄露数据。此外，这些隐私解决方案往往是零散的，或相互竞争，稀释了每种方法的匿名集。

Firo 的 [Lelantus Spark](https://mp.weixin.qq.com/s/Dr-6efV-bZyZyns6qSHEKw) 是一个完整的隐私协议，可以隐藏发送方、接收方和传输的金额，而不需要预信任机制。随着 Firo 开始使用 [Elysium](2021-12-22-elysium-testnet-and-gui.html) 支持代币化以构建隐私生态系统，Spats 扩展了 Spark 的功能，以隐藏正在传输的资产类型。

在许多现有的代币生态系统的链上隐私机制中，如 Tornado Cash，资产类型仍然是可见的，这限制了每个资产类型中的匿名集。Spats 允许代币化层的所有资产共享同一个匿名池，从而极大地提高了隐私性。此外，它保留了 Lelantus Spark 的所有优点，因此无需在固定面额中进行匿名，因为金额是隐藏的。同时，由于 Firo 是为隐私而设计的，因此可以在不透露来源的情况下支付交易费，这与其他代币生态系统不同。

为了举例说明这在全面部署后的样子，设想你在 Elysium 2.0 上创建或桥接了一个名为 fUSD 的资产，然后你还有另一个资产 fDAI。当使用 Spats 发送时，发送 fUSD 的交易与发送 fDAI 是没有区别的。因此，Elysium 2.0 代币化层上的任何交易也提高了 Elysium 中所有其他资产的匿名性。

## Spats 如何融入 Firo 的路线图？

Spats 使用 Lelantus Spark（已处于后期开发状态）作为基础，我们计划今年在主网上部署 Lelantus Spark。Spats 与 Lelantus Spark 共享许多相同的密码学构建基础，因此许多现有的代码可以被调整以支持它。

Elysium 1.0 即将发布，目前在测试网上，使用的 Lelantus（不是 Spark），因此尚不支持 Spats。我们已经在计划 Elysium 的继任者 Elysium 2.0 及其扩展功能，例如更容易与其他链桥接或更高级的脚本/智能合约功能，而 Spats 将成为 Elysium 2.0 的一部分。

随着 Lelantus Spark 研究的完成，我们将重点转移到扩大其实用性和用例，而不仅仅是支持隐私支付，并希望向社区展示我们的 Elysium 2.0 提案，作为一个完整的整体隐私生态系统，可以作为整个加密货币生态系统的基础设施。

我们欢迎学术界或研究人员对我们的 [Spats 研究论文](https://eprint.iacr.org/2022/288)提供反馈！
