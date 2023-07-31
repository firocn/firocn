<%# {
  "title": "Lelantus Spark 测试网启动",
  "description": "🚀 Lelantus Spark 测试网已经上线了 Firo 家人们！\n\n我们非常高兴地宣布，Lelantus Spark 测试网正式向公众开放，我们邀请您成为其中的一员！\n\n立即安装 FIRO 测试网钱包，参与我们的测试网启动活动，赢取仅在此期间提供的独家商品，以纪念您的参与！🎉",
  "summary": "Spark 测试网公开启动",
  "img": "https://firo.org/blog/assets/spark-testnet/banner.jpg",
  "author": "Augustus Jong",
  "type": "announcement",
  "icon": "firework",
  "source": "https://firo.org/2023/07/31/lelantus-spark-testnet-launched.html"
} %>

![Spark 测试网启动！](https://firo.org/blog/assets/spark-testnet/banner.jpg#size=1280x640)

## Spark 测试网启动

随着 Firo 不断推动隐私技术的发展，我们很高兴地宣布向公众推出 Lelantus Spark 测试网。该测试网提供了一个环境，开发人员和用户可以在 Lelantus Spark 协议正式发布到主网之前对其进行实验、评估和完善。它使我们能够发现并解决任何潜在问题，对性能进行微调，并从社区收集宝贵的反馈意见。这样，我们就能确保 Lelantus Spark 健壮、可靠，并准备好为全球 Firo 用户提供更高级别的隐私保护。

## 使用 Spark 地址简化隐私保护

Lelantus Spark 引入了一种灵活、保护隐私的隐形地址系统，可增强交易接收方的隐私保护。Spark 地址在区块链上是不可搜索的，因此没有人可以通过查询您的地址来了解您持有的金额或交易时间。此外，在 Spark 地址之间进行交易时，发送方、接收方和金额都是完全隐藏的。比特币和以太坊等更传统的地址系统允许任何人通过将地址放入区块链浏览器来查询地址的全部历史。Spark 地址完全取代了我们之前即将停用的（接收方地址隐私）RAP 地址系统。

与 Firo 当前的隐私协议 Lelantus 不同，用户可以直接向隐私 Spark 地址发送透明资金，而无需执行额外的匿名化操作，从而大大简化了隐私保护交易的使用及其用户体验。这也标志着 Firo 向所有交易的强制性隐私保护过渡迈出了第一步。

![Spark 交易](https://firo.org/blog/assets/spark-testnet/spark-address.jpg)

## 测试网的目的

Lelantus Spark 测试网是 Firo 致力于严格测试和社区参与的关键一步。通过部署测试网，开发人员和用户都可以评估 Lelantus Spark 的功能、性能和安全性。

在主网正式发布之前，从测试网参与者那里收集到的反馈和见解将对协议的微调起到非常宝贵的作用。这种迭代方法确保 Lelantus Spark 稳健、安全且经过优化，为 Firo 用户提供最高级别的金融隐私保护。

## 如何使用测试网

注意：测试 Spark 测试网前，请备份您的主网 **wallet.dat**！

我们**不**对任何钱包损坏负责。

### 1) 下载测试网二进制文件

* [Windows](https://github.com/firoorg/firo/releases/download/v0.14.12.4/firo-0f292f6f0390-win64.zip)
* [macOS](https://github.com/firoorg/firo/releases/download/v0.14.12.4/firo-0f292f6f0390-osx-unsigned.dmg)
* [Linux](https://github.com/firoorg/firo/releases/download/v0.14.12.4/firo-0f292f6f0390-x86_64-linux-gnu.tar.gz)

### 2) 打开命令提示符/终端，使用 `-testnet` 参数启动 `firo-qt` 或 `firo-qt.exe`。

#### Windows：

```
firo-qt.exe -testnet
```

#### macOS：

```
open -a Firo-Qt --args -testnet
```

#### Linux：

```
firo-qt -testnet
```

![Windows 启动 Firo 测试网](https://firo.org/blog/assets/spark-testnet/step2.png#size=603x363#small)

![macOS 启动 Firo 测试网](https://firo.org/blog/assets/spark-testnet/step2mac.png#size=1138x264#small)

或者，您也可以编辑 FIRO [数据目录](https://github.com/firoorg/firo/wiki/Default-data-directories)中的 `firo.conf`，然后添加

```
testnet=1

```

启动 Firo-QT 应用程序将自动启动测试网而不是主网。

![firo.conf](https://firo.org/blog/assets/spark-testnet/firoconf.png#size=450x402#small)

### 3) Firo-QT（测试网）将启动并弹出创建新钱包窗口

![创建新钱包窗口](https://firo.org/blog/assets/spark-testnet/step3.png)

### 4) 确保您在 Firo 核心 - 钱包测试网上。并让钱包同步到最新区块。

![Firo 核心 - 钱包](https://firo.org/blog/assets/spark-testnet/step4.png)

### 5) 同步后，您就可以使用测试网钱包了。

您可以通过 [Firo 测试网水龙头](https://testexplorer.firo.org/faucet)获得测试币，也可以通过 Firo [Telegram](https://t.me/firoorg) 群或 [Discord](https://discord.com/invite/TGZPRbRT3Y) 向社区索取。您可以使用我们的[测试网浏览器](https://testexplorer.firo.org/)查询测试网交易。

## 加入激动人心的活动： Firo 的 Spark 测试网启动活动！

为了庆祝这一重要的里程碑，我们准备了一系列有趣的活动，将我们大家凝聚成一个社区，并确保每个级别的每个人都有机会参与其中！我们期待您的参与，因为您在提升 Firo 体验方面发挥着至关重要的作用。加入我们，让 Spark 测试网的发布取得圆满成功！

## Bug 悬赏： 您的反馈很重要！

在我们为测试网启动做准备的同时，我们邀请社区的每一位成员积极参与我们的 Bug 赏金计划。为了表达我们的谢意，您将有机会通过贡献获得主网 Firo 奖励。

第一个在 Firo 的 GitHub 上报告任何问题并提供清晰、详细和可重现描述的人将获得丰厚奖励。没有清晰、详细和可重现描述的报告将不予考虑。

**外观/用户界面问题：**最高 5 Firo 奖励！
**小问题：**最高可获得 50 Firo 奖励！
**重大问题：**获得高达 1000 Firo 奖励！

Firo 核心团队将拥有确定问题严重性的最终决定权。

## 如何参与：

要参与我们的测试网 Bug 赏金计划，只需访问我们的 [GitHub 存储库](https://github.com/firoorg/firo/issues)并提交您的 Bug 报告即可。我们非常重视您对 Firo 未来发展的参与，我们迫不及待地想看到您的贡献！

## Spark 大乱斗：释放 Spark 地址的力量！

准备参加以 Spark 地址为中心的有趣活动——在 Facebook、Twitter 和 CoinMarketCap 上举行的两部分盛会！

**在 Facebook 上：**点赞我们的启动公告帖子，用您的测试网 Spark 地址发表评论，并分享该帖子！
**在 Twitter 上：**点赞、转发并使用您的测试网 Spark 地址发表评论！
**在 CoinMarketCap 上：**点击反应表情，使用您的测试网 Spark 地址发表评论，并转发！

通过 Spark 地址收到测试网 Firo 后，请务必记下交易 ID（txid）和收到的金额。这些详细信息对于日后领取一些独家神秘奖励至关重要！

## 现场活动：Firo 和 Spark 问答

最后，加入我们的现场活动，该活动将展示 Spark 的令人兴奋的功能并测试您对 Firo 技术和历史的了解！准备好参加一场引人入胜的问答活动吧，它将给您带来无穷的乐趣和知识，您还有机会赢得仅在测试网期间提供的 Firo 独家商品。更多信息将在稍后公布。

日期：2023 年 8 月 6 日
时间：14:30-15:30 UTC

记下这个日期，邀请您的朋友，参与这次盛会，让我们深入了解 Firo 的新功能！