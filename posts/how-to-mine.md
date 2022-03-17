<%# {
  "title": "Firo 挖矿教程",
  "description": "Firo 是为显卡挖矿而设计的。",
  "img": "https://firo.org/guide/assets/how-to-mine/firopow-banner.png",
  "date" : "2022-03-17",
  "author": "firo.org",
  "hidden": true,
  "source": "https://firo.org/guide/how-to-mine-firo.html"
} %>

![Firo 挖矿教程](https://firo.org/guide/assets/how-to-mine/firopow-banner.png#size=1920x960 "Firo 挖矿教程")

Firo 是为显卡挖矿而设计的。

FiroPoW 挖矿算法（ProgPoW 0.9.4 的修改版）旨在完全利用 GPU，并包括一个随机序列，每个区块都会发生变化，以进一步增强对 ASIC（专用矿机）和 FPGA 的抵抗能力。

我们相信公平分发在 FIRO 中的重要性，并继续致力于让它可以使用像显卡这样的商品硬件进行挖矿。

在开始之前，请确保你有一个接收挖矿报酬的 Firo 地址。要获得一个，请下载一个 [Firo 钱包](https://firo.org/zh-cn/get-firo/download/)，并将其与网络同步。

本指南是为 Windows 用户准备的，不过 Linux 用户也可以轻松适应。

## 第 1 步：获取你的挖矿软件

* [官方参考挖矿软件](github.com/firoorg/firominer/releases)（开源，不收费。在较新的 AMD 卡上性能差）
* [NVIDIA GPU: T-Rex Miner](github.com/trexminer/T-Rex/releases)（闭源，1% 费用）
* [AMD GPU: Team Red Miner](github.com/todxx/teamredminer/releases)（闭源，2% 费用）
* [AMD GPU: SRBMiner-Multi](github.com/doktor83/SRBMiner-Multi/releases)（闭源，0.85% 费用）

_**警告：**为方便起见，这里列出了多个挖矿软件。非官方挖矿软件未经审查。请自行承担使用风险。所有费用都是给挖矿软件的开发者的。_

解压到你选择的文件夹。

## 第 2 步：注册矿池（如果不是 Solo 挖矿）

有几个矿池在运行 FiroPoW。为了去中心化，请尽量分散算力，以便没有一个矿池的算力超过总算力的 50%！请注意，由于 ChainLocks 技术，纯 51% 攻击在 Firo 上是不可能的，这需要同时破坏或关闭主节点网络并拥有必要的算力。你可以在[这里](https://poolbay.io/crypto/317/firo)查看当前的算力分布。

* [Mintpond](https://mintpond.com/#!/firo)
  * firo.mintpond.com:3000
  * [Mintpond 的 Firo 挖矿指南](https://mintpond.com/getting-started-guide/firo)
* [WoolyPooly](https://woolypooly.com/en/coin/firo)
  * pool.woolypooly.com:3104
* [2Miners](https://2miners.com/firo-mining-pool)
  * firo.2miners.com:8181
* [Nanopool's Picopool](https://picopool.org/)
  * firo-eu1.picopool.org:22222
* [Zergpool](http://zergpool.com/)
  * firopow.mine.zergpool.com:3001
  * firopow.eu.mine.zergpool.com:3001
* [Solo Pool](https://firo.solopool.org/)
  * s3.solopool.org:8014

有关详细的 Stratum 信息，请访问矿池自己的网站。

这里列出的大多数矿池都不需要注册，只需要一个有效的 **Firo 地址**作为用户名和**矿工**的详细信息。确保你也得到**矿池的地址**和**端口**。

## 第 3 步：配置你的挖矿软件

打开你最喜欢的文本编辑器，复制并粘贴以下与你选择的矿池和挖矿软件对应的命令行，并对其进行相应的编辑。

### 矿池挖矿

#### Firominer

Nvidia:
```
firominer -U -P stratum+tcp://用户名或FIRO地址.worker:password@POOLADDRESS:PORT
```
AMD:
```
firominer -G -P stratum+tcp://用户名或FIRO地址.worker:password@矿池地址:端口
```

#### T-Rex Miner（Nvidia）

```
t-rex.exe -a firopow -o stratum+tcp://矿池地址:端口 -u 用户名或FIRO地址.worker -p password
```

#### Team Red Miner（AMD）

```
teamredminer.exe -a firopow -o stratum+tcp://矿池地址:端口 -u 用户名或FIRO地址.worker -p password
```

#### SRBMiner-Multi (AMD)

```
SRBMiner-MULTI.exe --disable-cpu --algorithm firopow --pool 矿池地址:端口 --wallet 用户名或FIRO地址.worker --gpu-boost 3
```

粘贴后，将该文件保存为 .bat 文件（例如 **miner.bat**），放在你之前解压的挖矿软件的同一文件夹中。

### Solo 挖矿

你需要编辑 **firo.conf** 来允许 RPC 调用。导航到[数据目录](https://github.com/firoorg/firo/wiki/Default-data-directories)，创建一个名为 **firo.conf** 的文件，并添加和修改以下行：

```
rpcuser=firo (up to you to change)
rpcpassword=firopow (up to you to change)
rpcport=8382
rpcallowip=127.0.0.1
listen=1
server=1
daemon=1
```

完成此操作后，重新启动你的 Firo 钱包，确保它同步到最新的区块。然后创建一个名为 miner.bat 的新文件，如下所示，并将其保存在你之前解压的挖矿软件的同一文件夹中。

```
firominer -P http://firo:firopow@127.0.0.1:8382 --reward-address FIRO地址
```

## 第 4 步：运行挖矿软件

完成后，运行你创建的 bat 文件。你应该会看到一个命令行窗口，该窗口会因你使用的挖矿软件而异。对于 Solo 挖矿，你的 Firo 钱包需要同步。

如果你看到你的 Share 被接受，应该就可以了。可能需要几分钟的时间，正确的速度才会反映在矿池的网站和你的挖矿软件上。

挖矿愉快！
