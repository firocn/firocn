<%# {
  "title": "Firo x DotOracle AMA Recap",
  "author": "Reuben Yap",
  "language": "en"
} %>

*January 28, 2022*

## Can you tell the community about yourself and your team?

Sure my name is Reuben and I'm the project steward of Firo meaning I take care of the general strategy and direction of the project. As a decentralized project we don't have a CEO so I'm the caretaker of the project and help move it forward according to the community :)

We have quite a global team, I'm from Malaysia, our co founder is Thai but our researchers and developers are from the US, Armenia, Thailand, Russia and a couple of other places so we're a pretty global and decentralized team :)

We do have independent cryptographic research which is actually pretty active and well respected in the privacy space.

## And Can you tell me about Firo project?

Sure! We started in 2016 under the name Zcoin, and we're actually one of the pioneers of ZKP privacy technology (we went to mainnet even before Zcash). We have our own privacy technology that allows people to destroy their coins and then redeem them for brand new ones using zk proofs and unlike zkSNARKs, we don't need trusted setup or any exotic math while achieving pretty high anonymity sets. Our work in Lelantus has inspired other privacy projects like Monero and Beam to use parts of work such as Triptych, Seraphis and Lelantus-MW.

In 2018 our blockchain was also used to host the world's first large scale political election in Thailand with over 127,000 votes cast on our blockchain and I don't think we've seen an election of this scale on the blockchain since. You can read more here: [nationthailand.com/in-focus/30359633](https://www.nationthailand.com/in-focus/30359633)

We're listed on major exchanges like Binance, Huobi, Gate, MXC and Bittrex just to name a few and also recently launched FiroDEX which is an atomic swap based decentralized exchange.

Beyond just being a privacy coin, we have started moving into becoming privacy infrastructure such as Elysium which allows others to create their own tokens on our blockchain and enjoy all the privacy technology that we have on Firo natively and cheaply. This is also part of why we are partnering with DotOracle but we can cover more about that later.

Other blockchains without native support of privacy either suffer from very high fees or limited anonymity sets with lots of opportunities of information leakage so we believe there's a need for privacy first blockchains like ours.

## There are many privacy coins out there. What does Firo do differently than the others?

Good question. While there are quite a lot of privacy coins, most of them are forks of others without development of their own privacy protocols. For e.g. most are just modifications of Zcash's zkSNARKs technology or Monero's RingCT technology and a few using Mimblewimble.

Lelantus Spark which we developed and created technically presents a very compelling alternative to this that solves many of the issues that are faced by these other protocols.

Without going into too much detail I'll lay it out simply.

Monero's RingCT technology uses a decoy model which means it tries to hide its transactions with 10 other possible inputs. This means that its anonymity per TX is low and there are often issues and deanonymization risks faced when picking the right 'inputs' to form your decoy. This is a continuing problem that can't be mitigated entirely with their model. Firo doesn't suffer this sort of problem since everyone who does a transaction could have possibly come from a huge pool of previous available burns.

Zcash's technology does have great anonymity but it also suffers from the need for trusted setup and high mathematical complexity that often leads to over reliance on ECC and many moving parts that can go wrong. It's a great solution but we prefer a more simple and modular approach that doesn't require trust and can be easily understood and checked by others.

Mimblewimble has its own issues with limited transaction graph protection meaning that someone who monitors the network can ascertain the flow of funds which can be partially mitigated.

Lelantus Spark doesn't have any of these issues and is a fully fledged privacy protocol.

We are also one of the few that are actively developing the privacy infrastructure play with DotOracle being the first component of it.

You can read more about our privacy tech and how it compares here: [firo.org/guide/privacy-coin-comparison.html](https://firo.org/guide/privacy-coin-comparison.html)

## Speaking about technology, how much of a difference is there between the currently implemented Lelantus compared to the upcoming Lelantus Spark?

For those of you don't know Lelantus allows people to burn any number of coins and then redeem any amount of it in the future. However Lelantus still partially reveals amounts meaning you can still see how much is being transacted. This is ok for supply auditability as we phase into full privacy but for full privacy we want to hide amounts.

Lelantus also lacks stealth addressing meaning for good privacy, people need to constantly provide new addresses or use RAP addresses (another innovation of ours). However Spark does away with this meaning you can provide your Spark address to somebody and those Spark addresses aren't searchable on the blockchain.

Think of Spark addresses like your e-mail address where you can freely share it but no one knows when it receives mail or when it sends out mail.

Unlike Bitcoin or Eth addresses where anytime it receives or sends funds, everyone knows.

Lelantus Spark also allows you to transact totally privately, sender, receiver and amounts are all hidden.

So it's a huge improvement and it's also designed to be modular which makes it more future proof.

What that means is that if new tech arises, we can upgrade components

So Lelantus Spark is a natural evolution of the original Lelantus but greatly improves its functionality. Multi sig support, both incoming and outgoing view key support so it's really a complete privacy protocol. Lelantus is an interim step.

## Privacy in the cryptocurrency ecosystem has always been talked about but hasn't yet seen much interest beyond niche circles, why do you think this is the case?

Good question, this bull market has been kinda about DeFi, NFTs, Metaverse and dog coins ;)

The masses are beginning to come into crypto but are attracted more with the allure of riches rather than the tech or the idealogy behind it.

But this will eventually change and when people start using crypto for actual use, they will find that privacy is absolutely essential.

We are heading towards a world where everything is surveilled and with surveillance comes control.

But often we only miss our freedoms when they are taken away.

We are already beginning to see this with regulations aimed at discouraging self custodied wallets and instead asking people to store it with exchanges or  custodian wallets which really replicate the existing financial system. My answer to that is not your keys, not your coins. Anyone who has ever used exchanges or custodied wallets a lot would have experienced things like delays in withdrawals, or sudden questions asking you to justify yoru withdrawal or additional verification etc etc.

Blockchains and cryptocurrencies are meant to be permissionless and privacy is necessary to protect it.

On top of that if we do expect people to use it for payments or in the real world, would people be happy to let everyone know their networth, their salary or their finances or how much companies are paying their suppliers/contractors=?

With the lack of privacy, opens the door to censorship and surveillance and I do believe that crypto is here to stay

and many of these 'fads' will come and go, but if we believe in crypto taking off, privacy is absolutely a necessity and Firo is positioning ourselves to be ready when that day comes :)

## How does Elysium utilize Firo's Privacy Infrastructure?

So Elysium as mentioned before allows people to create their own coins/tokens but has native Lelantus support meaning it can do all the privacy stuff that native Firo can. The fees that power this also come from Lelantus spends meaning that the source of fees are also hidden preserving privacy. This is a very tough problem to solve for chains like Ethereum but Elysium does all of this. We're not intending to be a replacement to Eth but we feel that there is a need for privacy tokens be it for private stable coins or voting tokens where you can setup DAOs where voting is anonymous but verifiable (just like real life elections).

Elysium is on testnet at the moment and we're looking to launch it soon :) Hopefully with DotOracle support at the same time!

## Tell me more about how DotOracle's partnership with Firo will benefit both projects.

So DotOracle's focus has been on being decentralized oracle and also a multichain bridge. We love what DotOracle is doing with their MPC technology and multichain bridge. DotOracle's initial focus is to provide multichain support of stablecoins allowing people to move stablecoins from chain to chain easily using DotOracle infrastructure but none of these chains have privacy.

DotOracle's integration with Elysium would allow stablecoins from other chains to be bridged through DotOracle's infrastructure and these stable coins can then be anonymized using Lelantus technology allowing people to transact and hold their stablecoins privately on Elysium. This in turn gives DotOracle an immediate privacy solution for its bridged tokens and also helps to drive volume through their swaps so it's a win win!

Several advisors and team members of DotOracle have had some connection/friendships/work with Firo before so we felt it was really a good fit with DotOracle's bridging becoming Elysium's first use case and Firo's Elysium becoming DotOracle's first privacy solution.

From what I can tell with our discussions with the DTO team, integration with Elysium is proceeding smoothly and we are really excited and hope the DTO community will utilize it once we go live!

## Considering the decentralized nature and transparent nature of blockchain technology, do you think that implementing privacy in blockchain technology is an ethical thing that is congruent with the principles of blockchain? Will privacy in blockchain encourage illegal activities like money laundering?
Considering the decentralized nature and transparent nature of blockchain technology, do you think that implementing privacy in blockchain technology is an ethical thing that is congruent with the principles of blockchain? Will privacy in blockchain encourage illegal activities like money laundering?

Transparency in blockchain is primarily about making sure everyone can verify that no coins are being created out of thin air and that the rules of the blockchain are being adhered to. When Satoshi created Bitcoin, there were no technologies available then to anonymize this and while privacy was a goal (Satoshi encouraged people to create new addresses all the time), the tech was not available until very recently. I think there are other writings by Satoshi to indicate that he was pro privacy as well.

The transparency of Bitcoin and Eth and other cryptocurrencies have done little to prevent money laundering so whether it's private or not does not preclude money laundering. Even then, the transactions that do this have been shown to be a small proportion of total transactions. Similarly the regulation of the traditional financial system hasn't prevented money laundering and trade-based money laundering is very simple to do with or without privacy.

Equating privacy with illicit activity is a common mistake. Not so long ago, governments wanted a backdoor into all encryption (see Clipper chip) which would allow governments to tap into encrypted stuff. Now many major instant messengers have end to end encryption that precludes this (though this is a battle). Privacy is not about 'hiding' activity it's more about having the ability to choose what to reveal to the world. Just like our inner thoughts or intimate things about our lives that no one has business in knowing.

Embracing surveillance means we surrender all of this and trust people to not abuse this data which in the brief history of big data has shown time and time again to be a mistake be it being used to manipulate people's thoughts that can affect elections or to just profit,sale or even target them.

Privacy can co-exist with regulation and AML and regulation of fiat conversion points is one way along with employing other AML measure that already exist for other types of assets in the traditional financial world. Whether transactions on a public blockchain are private or not don't affect this.

You can read more about how this can be done through the legal opinion of a leading law firm here: [perkinscoie.com/en/news-insights/anti-money-laundering-regulation-of-privacy-enabling-cryptocurrencies.html](https://www.perkinscoie.com/en/news-insights/anti-money-laundering-regulation-of-privacy-enabling-cryptocurrencies.html)

Privacy is for everyone and isn't just for criminals. Privacy is a tool and utility which can be used for both good and evil but don't let the people trying to take away your freedoms convince you that you don't need privacy.

Remember the person who said "You have nothing to fear if you have nothing to hide" is Goebbels, Nazi propaganda chief. Look at how that turned out.

## What is the competitive advantage of working with FIROPoW? Can a person without knowledge of technology and programming experience attend the FIRO mining (run a node validation)?

Mining is quite simple, just download a miner, point it to a pool and enter your Firo address so you don't need any programming experience at all. FiroPoW is actually aimed to be mined by GPUs so anyone with decently modern GPU can mine it. FiroPoW is quite nice since the algorithm automatically morphs every single block making it hard to develop ASICs for it. It's pretty cool tech that's aimed at making Firo distribution as fair as possible.

It's based off ProgPoW and developed in close collaboration with the original developers who came up with it.

## How will  partners help FIRO growth and vision? How do you feel about the collaboration of good partners to further develop the ecosystem in CEX and DEX?

CEX and DEX are both important components of the crypto ecosystem. CEXs are often the only way to onboard from fiat and will remain so for the time being. DEXes are important for ultimately private asset transfers in and out of the system and also serve as a check and balance with CEX so that volume will move away to DEXes if CEXes become too oppressive or irresponsible.

Partnerships of course come in forms be it from cross pollination of community or utilising the strength of each project. For example, DotOracle specializes and has already built their cross-chain bridge so rather than having to do it ourselves in a field where we may not be the best at, it's best to play to each project's strengths and technical capabilities and benefit from it.

## Will Firo build Defi in Mainnet?

Right now this is something that we're discussing as to whether we need fully fledged DeFi or only a subset of it. Remember with privacy, often it's a lot harder to detect when something goes wrong. We have already seen in totally transparent DeFi systems plenty of rugs or exploits. Now just imagine if that was all private, you won't even know you're getting rugged so I'm a bit hesitant on this.

However there are some cool things that having a richer scripting/smart contract language enables such as easier cross chain bridges or automated market makers and currently our team is looking at what we need to enable the important things in DeFi without exposing the ecosystem to too much risk.

Right now we rely on bridges into other DeFi ecosystems (for e.g. we have a Binance Peg Firo token on BSC), to do DeFi stuff and there are some cool projects being built such as firopunks.com (which are NFTs that can battle each other).

So no immediate plans for full DeFi but we are looking into subsets of it.

## So will DotOracle fulfill role as some kind of exchange for Elysium tokens?

It's like a bridge to mint stablecoins such as DAI from Eth or other ecosystems into Elysium where you can transact with it privately and then when you're done, you can bridge out of it :)

DotOracle serves as the decentralized bridge between Elysium and other ecosystems.

## I love to send my Busd anonymously. Can I ask when your bridge finish? And how about the fee? Does it high? 5%?

I think we have to wait for DTO to announce their bridging fees but I think it would be the same as their other bridge fees afaik but I think right now both projects want adoption more than fees :)

## I read about the Firo project. When DTO partners with Firo. What is the next step?

Well as mentioned, one DTO enables elysium support each project will benefit from increased utility, DTO gets privacy for its bridged tokens while we get utilization of Elysium :) The integration is already well underway.

## Could it be an ETH Killer :)?

Hahaha :) I dunno, recently many Eth killers are breaking ;)

But we aren't intending to be Eth. It's a different set of priorities. Eth isn't designed for privacy. Its privacy is horrible.

## If other privacy coins like Monero use our Lelantus technology, will that undermine Firo.  Or maybe it contributes to our ecosystem through fees.  Not worried...just curious

Great question. Thing is with current trajectory, even if Monero uses a variant of Lelantus Spark (aka Seraphis), it is still implemented differently in a way that Firo still enjoys higher anonymity sets. Seraphis is intended to increase ring sizes but still doesn't solve the decoy selection algorithm issues and it's not easy for them to transition completely to the new system.

In a way, if XMR adopts Seraphis or Lelantus Spark it would actually also be a win for us since even if our implementations are different, we would share certain core cryptographic components that would benefit from the research of both teams. For example, Firo's researchers came up with the key idea that enabled Seraphis (which enable its flexible address system) while a bug disclosure on Seraphis also identified an issue with Spark that has already been resolved. This is an ideal symbiotic system.

I also think the way Firo is pivoting so that Spark is not just for Firo but for bridging other tokens into our ecosystem cheaply, means that Firo can almost be like a privacy L2 for other chains. We even recently came up with an extension to our Spark privacy protocol called Spats that can hide asset type so that when you move an asset on Elysium, it looks like any other Spark transaction (not just of the asset). This is not something that Monero is setup to do nor is it easy for them to do it.

I have great respect for Monero and other privacy projects but I don't think it's a zero sum game and we each have our strengths.

## Can we use firo's tech to create privacy in eth or bsc chain?

The idea is to bridge tokens from Eth or BSC into Elysium and you can enjoy privacy there but bridge out back to their blockchains if u want to do other stuff. Think of it a bit like a privacy L2. There are some other projects trying for L1 privacy on Eth (for example our friends at Railgun) but they are greatly limited. For e.g. a typical full transaction on Railgun costs about 1000 USD in fees....

There are use cases of course but we think having native privacy built in rather than through some smart contract has clear benefits esp when it's designed to be private in mind.

## Wouldn't "tunneling" any asset through Firo's private elysium layer also require some sort of protcol that the user needs to follow to remain hidden when i.e. you put any sufficiently unique amount and take out the same amount at the unprotected end? Wouldn't that be correlatable and require some sort of tactics to not expose yourself? i.e. taking out the value in less obvious chunks?

Similar to Lelantus currently. But as long as many people use it and eventually with Spats where all transactions look like each other as long as the amounts are not exactly the same or don't stand out, the plausible deniability is huge. But of course it requires users for it.

We'll be announcing Spats soon :)

## I love your answer, you’ve research well about cryptography and the use of it. I am just wonder what exactly are the information of a transaction that using FIRO coin hides? If I want to check my transaction how will I do it? Will it be public like on BSC or Etherscan? Or will I have to login?

So on a blockchain explorer with Spark, almost everything is hidden but with the appropriate 'view key' you can decrypt this information so that you can see its details. That's the beauty. If needed you can grant yourself or other people the view key so that people can see incoming and outgoing transactions. This has use case for example if you want to let your tax or auditor ppl know or you're holding funds on behalf of other people or operating a charity or just want another wallet to be able to see stuff without having spend privileges.

All on the blockchain you'll see is a txid, inputs with unknown sources and outputs to random points and a hidden amount. Only the intended ppl can view its details. That's the beauty of zero knowledge proof technology.

## You have a lot of passion for the Firo project. What do you love most about firo?

Honestly, I am a big fan of privacy. Even though I'm quite a public person by nature and quite open about myself I value the need for privacy and I do believe that eventually people will share this belief. In some cases breaches of privacy have cost me a lot of inconvenience or put me at risk. Firo encapsulates a lot of the values I want in a cryptocurrency, community based, research and technology driven and honesty.

But at the end of the day, Firo is primarily about its people. We've had amazing contributors, amazing research and people who are excited about the stuff we're building and we hope with Elysium and DotOracle, we increase the amount of people interested in building on our technology. I'm immensely proud that our achievements are being used to solve real problems in blockchain regardless of whether people want to give us the credit for it ;) and I'm also immensely proud that we have kept to our values despite intense pressures and we've had people stick with us through thick and thin.

Firo is for better or worse, a huge part of my life and while I'm only a cog in the wheel, I'm super honored to be given the opportunity to be part of this amazing project, building things that I care about.
