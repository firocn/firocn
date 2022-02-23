<%# {
  "title": "Helsing：Lelantus Spark 中的隐私 Firo 主节点",
  "description": "Helsing 允许用户将他们的 FIRO 抵押在 Spark 上，并可以直接向 Spark 地址支付收益直接将其匿名化。这改善了 Firo 主节点运营者的隐私，增加了匿名集，也减少了对透明地址的需求。",
  "img": "https://firo.org/blog/assets/firo-helsing.png",
  "author": "Reuben Yap",
  "type": "research",
  "icon": "moneybag",
  "source": "https://firo.org/2022/01/28/helsing-private-firo-masternode.html"
} %>

![Helsing：隐私主节点抵押](https://firo.org/blog/assets/firo-helsing.png#size=8000x4000)

我们很自豪地公布我们的 [Helsing](https://firo.org/blog/assets/helsing-1049371.pdf) 提案，这是一种在 Firo 中实现隐私主节点抵押的方法。Firo 中的主节点有几个重要的功能，比如通过 ChainLocks 保护链免受 51% 攻击，并可以在几秒钟内快速完成交易。

为了抵御[女巫攻击](https://en.wikipedia.org/wiki/Sybil_attack)，抵押 1000 FIRO 以鼓励主节点的诚实行为，这需要由网络的其余部分进行验证。我们即将推出的隐私协议 Lelantus Spark 通过隐藏金额、资金流入流出时间来极大地改善隐私。因此，需要有一种不同的方法来确定抵押品是否存在，同时保护隐私。

Helsing（以 [Van Helsing](https://en.wikipedia.org/wiki/Abraham_Van_Helsing) 的名字命名），允许用户在 Spark 中抵押他们的 1000 FIRO，并在不透露被抵押的币的来源的情况下证明抵押品在 Spark 中存在且没有被移动。Helsing 还允许主节点的付款直接支付给 Spark 地址直接将其匿名化。

## 为什么是 Helsing？

作为一个以隐私为中心的币，我们希望 Spark 和 Spark 地址成为 FIRO 的默认使用方式，并减少对透明地址的依赖，作为我们逐步淘汰它们的努力的一部分。主节点构成了我们区块链网络的一个关键组成部分，Helsing 使主节点的抵押品能够保存在 Spark 池中，并且可以直接匿名支付。匿名的主节点支付增加了整个 Lelantus Spark 的匿名集，并通过防止主节点奖励的这些资金与主节点挂钩来保护主节点持有者的隐私。

## Helsing 什么时候上线？

目前的计划是先在 Firo 的主网上部署 Lelantus Spark（预计 2022 年第二季度），然后再实现 Helsing。由于 Helsing 仍然是一项正在进行中的工作，尚待正式和外部审查，这使我们有时间从 Firo 社区和更广泛的技术社区获得反馈、评论和建议。我们建议将反馈意见张贴在我们的[论坛](https://forum.firo.org/t/helsing-private-masternode-staking-in-lelantus-spark)上！
