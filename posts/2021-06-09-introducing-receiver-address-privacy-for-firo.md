# Firo 在主网上推出 RAP 地址以保护链上接收方隐私

2021 年 6 月 9 日

![推出 RAP 地址](https://firo.org/blog/assets/rap-launch/rap-launch.png)

我们很自豪地宣布在 Firo 的主网上推出接收方地址隐私（RAP）！RAP 允许用户公开发布他们的 RAP 地址而不影响隐私。你可以像分享电子邮件地址一样分享你的 RAP 地址。即使他们有你的 RAP 地址，也没有人可以知道你收到了多少付款或哪些交易是你的。

RAP 地址试图解决地址重复使用的问题。今天，如果你公开发布你的比特币或以太坊地址，有人可以在区块链浏览器上查找该地址，并确切地知道你使用该地址收到了多少钱以及与之相关的所有活动。如果你有定期付款，例如工资支付，同样的问题也会发生，如果你使用一个地址，有人可以很容易地知道你被支付了多少钱。克服这一问题的建议方法是由收款人不断分享新生成的地址，但这往往很麻烦。

RAP 地址解决了这个问题，它作为一种特殊类型的地址，你可以安全地重复使用，因为每个 RAP 地址的发送方可以衍生出多达 20 亿个对他们来说是独一无二的存款地址。

## 它是如何工作的？

RAP 地址是由 Justus Ranvier 的 [BIP47 可重复使用支付码](https://github.com/bitcoin/bips/blob/master/bip-0047.mediawiki)改编的，也是由[比特币的 Samourai 钱包](https://blog.samouraiwallet.com/post/137698771697/why-were-bringing-reusable-payment-codes-to-the)普及的。他们的工作方式是在链上向接收方发送一次性通知交易，在发送方和接收方之间建立一个支付通道。然后，发送方可以自动得出新的地址，而不需要接收方的进一步输入。这一切都利用现有的区块链网络发生，不需要任何第三方服务器。不幸的是，由于比特币缺乏链上隐私机制，这种通知交易可能是一种隐私泄露，因为它建立了发送方的一个地址与接收方之间的关系。

Firo 在 RAP 地址中对 BIP47 的实现有一个重要的不同之处：发送方在一个[隐私的 Lelantus 交易](https://firo.org/2021/01/06/lelantus-activating-on-firo.html)中发送通知交易，因此通知交易的来源是未知的，这就解决了这个隐私泄露问题。

Firo 的实现也是 BIP47 在 C++ 和桌面钱包上的第一个完整实现。

## Firo 用户如何访问这个功能？

RAP 地址目前可以通过 Firo 最新的官方 [QT 钱包 v14.7.0](https://github.com/firoorg/firo/releases/tag/v0.14.7.0) 访问，并且正在努力将其整合到我们的桌面 Electron 钱包。RAP 地址是一个软分叉，所以升级和采用这些地址是可选的。

![钱包 RAP 功能截图](https://firo.org/blog/assets/rap-launch/rap1.png)

![钱包 RAP 功能截图](https://firo.org/blog/assets/rap-launch/rap2.png)

所有存放在 RAP 地址中的资金都可以使用备份的钱包助记词进行恢复。

## 它与传统的隐形地址有什么不同？

RAP 地址具有与隐形地址类似的效用。隐形地址的不同实现方式有一些缺点，比如需要广泛地扫描整个区块链，或者有一个安全通道来分享钥匙。RAP 地址没有这些缺点。

此外，对 RAP 地址的支付与其他交易没有区别，因此不能被识别或审查。

请看 Splineapple 发布的视频概述：
[https://mp.weixin.qq.com/s/U6XDUQqNa3XoeYlUcDKNfw](https://mp.weixin.qq.com/s/U6XDUQqNa3XoeYlUcDKNfw)

我们很高兴在 Firo 中成功实现了 RAP 地址；解决了链上隐私的一个重要部分，即接收方隐私。我们还要特别感谢我们的核心开发人员 Andrey Bezrukov，他在实现 RAP 地址方面做了大部分繁重的工作，以及 [Arcadia 集团](https://arcadiamgroup.com/)，他们提供了一个早期的工作实现，这是由我们的[社区众筹系统](https://ccs.firo.org/)提供部分资金。
