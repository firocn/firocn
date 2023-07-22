<%# {
  "title": "推进隐私：Aram Jivanyan 推进 Lelantus Spark 研究",
  "description": "Magic Grants 已经批准为 Firo 的密码学家 Aram Jivanyan 提供研究经费，让他在 MAGIC Firo 基金的资助下进行为期六个月的曲线树研究。\n\n这项研究的结果有望解决 Spark 面临的主要挑战，即实现百万级的匿名集。除了 Lelantus Spark 的研究，这笔资金将支持 Aram 在 Aura 投票协议方面的持续工作。",
  "summary": "椭圆曲线研究",
  "img": "https://firo.org/blog/assets/elliptic-curves.png",
  "author": "AJay",
  "type": "announcement",
  "icon": "curve",
  "source": "https://firo.org/2023/05/26/elliptic-curves-research.html"
} %>

![推进隐私：椭圆曲线](https://firo.org/blog/assets/elliptic-curves.png#size=1920x960)

我们很高兴地宣布，Magic Grants 已经批准为 Firo 的密码学家 Aram Jivanyan 提供研究经费，让他在 MAGIC Firo 基金的资助下进行为期六个月的曲线树研究。其主要目的是加强 Lelantus Spark 的隐私功能，进一步巩固其作为前沿隐私协议的地位。

[MAGIC Firo 基金](https://magicgrants.org/funds/firo/)在 [Arcadia](https://www.arcadiamgroup.com/) 的[慷慨捐助](https://magicgrants.org/200000-Donation-from-Arcadia-for-Firo/)下，使这项研究资助成为可能。在与 MAGIC Grants 合作之前，Aram 进行了初步工作，以评估这个研究方向的可行性。在初步分析的鼓舞下，他相信这个项目将大大扩展 Lelantus Spark 最终实现中的匿名集。

在即将到来的六个月里，研究将集中在以下关键领域：

1. 探讨实现成对椭圆曲线（如 secP256k1、secQ256k1 和其他相关曲线）的最高效方法。这包括在现有曲线实现的基础上开发一个 C++ 实现，或者考虑将 Rust 的实现绑定到我们的 C++ 库中。

2. 将带有曲线树的成员证明整合到 Lelantus Spark 的综合设计中，确保与其他 Spark 组件的无缝互操作性。

3. 设计一个基于 bulletproof 的电路，用于集合成员检查，并最终确定实现细节。

4. 准备一份全面的研究论文，总结所有的发现和设计方面，具体重点是使用曲线树扩展 Lelantus Spark 的匿名集。

这项研究的结果有望解决 Spark 面临的主要挑战，即实现百万级的匿名集。此外，该研究结果可能对其他隐私加密货币协议有潜在的影响，如 Monero 的 Seraphis。

除了 Lelantus Spark 的研究，这笔资金将支持 Aram 在 [Aura 投票协议](https://eprint.iacr.org/2022/543)方面的持续工作。这包括完善论文、完善实现设计和架构，以及改进预印本以提交给受人尊敬的加密会议。

我们感谢 MAGIC Grants 和 Arcadia 的慷慨支持，这使我们能够进一步突破隐私的界限，推进加密货币研究领域。请继续关注这一合作进展的激动人心的最新信息！

相关文章：
[MAGIC Firo 基金](https://magicgrants.org/funds/firo/)
[MAGIC Grants 收到 Arcadia 为 Firo 生态系统捐赠的 200,000 美元](https://magicgrants.org/200000-Donation-from-Arcadia-for-Firo/)
