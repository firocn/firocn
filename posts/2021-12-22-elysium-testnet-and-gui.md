<%# {
  "title": "Elysium 测试网以及图形用户界面",
  "description": "Elysium 是 Firo 的代币化层，允许任何人创建自己的代币并享受 Lelantus 技术的所有隐私优势。它打开了通往隐私稳定币和投票代币的大门，使 Firo 成为整个加密经济的隐私基础设施。",
  "img": "https://firo.org/blog/assets/elysium-testnet/day-7-firo-gui-elysium.png",
  "author": "Reuben Yap",
  "source": "https://firo.org/2021/12/22/elysium-testnet-and-gui.html"
} %>

![Elysium 测试网以及图形用户界面](https://firo.org/blog/assets/elysium-testnet/day-7-firo-gui-elysium.png#size=8000x4000)

Elysium 是 Firo 的代币化层，允许任何人创建自己的代币并享受 Lelantus 技术的所有隐私优势。它打开了通往隐私稳定币和投票代币的大门。今天，我们很高兴在我们的测试网中开放 Elysium 进行测试！

我们也正在敲定架构，以便通过去中心化的托管方将资产从其他链桥接到 Elysium，使 Firo 成为整个加密经济的隐私基础设施，以利用直接内置于协议中的隐私技术，允许便宜的隐私交易。

要在测试网上使用 Elysium，请看下面的说明。我们仍在对 Elysium 进行微调，感谢任何反馈或 [Github](https://github.com/firoorg/firo/issues) 上的错误报告。

**此版本仅用于测试网。请勿与你的主网钱包一起使用。**

测试网的二进制文件可[在此获得](https://github.com/firoorg/firo/releases)。它们被标记为 **Elysium Testnet**。

## 在测试网上使用 Elysium 启动钱包

### Windows：

```
firo-qt.exe -testnet -elysium
```

### Linux：

```
./firo-qt -testnet -elysium
```

### macOS：

```
./firo-qt -testnet -elysium
```

如果你在 macOS 的安全性设置方面有问题，请修改你的 **firo.conf** 并添加 **`testnet=1`**

## 要求

请使用[测试网水龙头](https://testexplorer.firo.org/faucet)来获得测试网 FIRO。如果你需要更多，请在公共 Telegram 或 Discord 频道中联系 Anwar。

公开的 Elysium 操作需要使用公开的 FIRO，而隐私的 Elysium 操作需要隐私的 FIRO。请根据需要进行匿名。

## 指南

[这里](https://gist.github.com/sproxet/a39e152fdbc4e7d552d09bdbba881ad5)有一份关于 Elysium 的粗略指南。一个更全面的指南正在制定中。

![elysium-testnet-01](https://firo.org/blog/assets/elysium-testnet/elysium-testnet-01.png)

![elysium-testnet-02](https://firo.org/blog/assets/elysium-testnet/elysium-testnet-02.png)
