<%# {
  "title": "Firo × Pursuit of Privacy AMA Recap",
  "description": "March 20, 2022",
  "author": "Reuben Yap",
  "img": "firo_privacypursuit_ama.jpg",
  "type": "memo",
  "icon": "ama",
  "hidden": true,
  "language": "en"
} %>

![Firo × Pursuit of Privacy AMA](firo_privacypursuit_ama.jpg)

## What are your thoughts on privacy, and how can Firo be part of the answer to this issue?

Privacy is one of those things that we have taken for granted. We must remember that privacy is something that we enjoyed without knowing it prior to the digital age. The meat space provided a lot of privacy. For instance, cash is private and unless you have someone tailing you, your movements and whereabouts were private.

The rapid transition to where everything is connected on the internet meant that society had yet to catch up to the implications of these changes. Before we knew it, the likes of Google and Facebook sucked up all this data we gave away for free and governments started performing mass surveillance.

Whatever your views are on Snowden, his leaks were a catalyst that made many people wake up as to how much of our data was being recorded and stored and, in some cases, abused. This led to many improvements such as the normalization of privacy (I ran a VPN service back in 2007 and was labelled as a high-risk business that enabled illicit activity) and an increased demand for end-to-end encryption from messengers to websites. But it isn’t enough!

We are now reaching an important juncture in civilisation whereby the same is happening to our money. We are already seeing the gradual displacement of cash in favour of digital forms of payment. “Going cashless” is the in thing especially in Malaysia where it is promoted as convenient and part of becoming a modern country. In some countries, it is almost gone completely! Take China for instance where WeChat Pay and Alipay are the norm and cash is hardly used in the major cities. The next step are Central Bank Digital Currencies (CBDCs) where the country’s central bank directly issues it and this raises many privacy issues. It basically allows a central bank to view the movement of all money and to even lock people out of its system. Again, China is the leader here with the digital yuan rapidly being rolled out and are also taking market share away from WeChat Pay and AliPay. Other countries including the US are also rapidly following suit.

Firo and other privacy preserving cryptocurrencies serve as an alternative to these surveillance systems and a chance to preserve money as a public utility except one that is free from borders or centralized ownership. In some ways, privacy coins can be seen as perhaps one of the purest realizations of the initial motivations of cryptocurrency that was seen as an answer to central bank control and bailouts that benefited bankers who created the problem in the first place. Firo is at the forefront of this with a focus on building the underlying privacy protocols and technologies that enable and power this future.

## Zencash (now Horizen) was the first project to develop a smartcontract/token ecosystem on its blockchain. It was not an initial choice of Zcoin/Firo. Can you explain us this change of strategy and the development of "Elysium"?

Horizen chose to pivot away from a privacy coin to be more focused on sidechains and allowing custom blockchain building which has allowed them to attract investment when 'enterprise blockchains' were a thing.

They don't have smart contract capabilities and have similar scripting capabilities as Bitcoin and Firo.

The idea of Elysium was to allow others to build their own tokens on top of our ecosystem and utilize our technology. We aren't sure in the current market if just being a privacy coin is enough and having others build on our privacy tech also empowers others and strengthens the Firo network. Also, the idea of Elysium is to also allow tokens from other chains to bridge into Elysium such as let's say bridging over DAI or USDC into Elysium and making your coins private there.

This leverages the network effects of those stablecoins without going into the legal morass of issuing your own stablecoin or relying on oracles or other algorithmic methods to build them. It also really opens up the ability to create your own voting systems using elysium tokens and Lelantus technology.

We want to see more people use our privacy technology and expand our community in this way hence why we think Elysium is an important component to Firo's growth.

Elysium is currently on testnet and we hope to roll it out soon though we are already in the planning stage for Elysium v2!

Our partnership with DotOracle already allows many stablecoins to be bridged over from many different chains directly into Elysium and we can't wait to go live on this.

## There is an important network effect in blockchain projects, the "Bluechip" aspect (Monero for privacy coins). Do you think Firo can become a leader in the privacy sector? Do you think there will be just one leader or is there room for several major projects?

Monero definitely is the current blue chip along with Zcash for privacy coins. Monero had a strong first mover advantage as for a very long time it was the only serious privacy coin. Zcash on the other hand has great technology and serious VC investments.

I do think that the market is large enough to fit several privacy coins especially as I do think that people are beginning to realize the importance of privacy coins with recent developments in regulation and enforcement. We've seen what is happening in Russia/Ukraine and Canada or even recent news that US is prioritizing developments of a CBDC. That with ignorant viewpoints from Elizabeth Warren on privacy mixers.... ;)

Firo offers a very good balance. It will have much larger anonymity sets than Monero and is more open to doing changes beyond just being a privacy coin.

Zcash on the other hand has become increasingly opaque with their research and development and the tech they work is very complex where even top level cryptographers can miss details. There is a strong reliance on ECC for development of this tech and to disclose any vulnerabilities. We have seen how during their vulnerability in Sprout, they also chose who to disclose it to.

Firo's construction of Lelantus Spark on the other hand is much more modular and relies on much simpler and well understood cryptographic components making it much easier to audit while providing very large anonymity sets. At the same time because of its modular nature, it can be upgraded to support newer developments as they come along.

I think Firo has amazing potential and while we have suffered from some setbacks in the past such as hacks and a 51% attack and a malicious seed investor , all of those are behind us now and we have survived and come out stronger from it which shows how resilient the project is. I hope we can push forward new heights and am very excited of all the things coming soon with Firo in 2022!

## Can you explain us the technology "Lelantus Spark" and the differences with Zk-Snarks and these possibilities of evolution of the protocol (Halo 2, Sonic,..)?

Lelantus Spark while using zero knowledge proof technology uses completely different technology than zkSNARKs and its variants.

We use a membership proof called one-out-of-many proofs (or Grootle proofs) which only rely on discrete log assumptions and are pretty efficient. We also use bulletproofs+ to provide range proofs and also have our own balance proof. These are all modular and can be more or less replaced with newer stuff at any time.

Unlike zkSNARKs, Grootle proofs don't require any sort of trusted setup and does not rely on the more exotic knowledge of exponent cryptographic assumptions!

Halo2 is of course pretty exciting technology and one that is on our radar but is yet to be deployed and I think we need to see how it pans out. The recent audit actually showed how several parts of it lacked cryptographic security proofs. it also lacks a traditional academic paper that makes it harder to analyze (one exists for halo1) Halo2 is of course immensely complex and there are many many moving parts. It is definitely on our list of exciting tech to look into but I think it needs to prove itself.

Spark takes a middle ground and a more conservative approach while offering flexibility, optional auditability and modular structure. In fact, Seraphis, a privacy protocol being considered by Monero takes a lot of ideas from Spark which is why it looks similar but Firo's implementation will still use much higher anonymity sets.

## Can you tell us about the other research and development projects that the Firo team is working on?

We recently released our paper on Spats (Spark Assets) that allows you to hide asset type with Lelantus Spark. What this means is that when Spats goes live on Elysium v2, outsiders won't know whether you're sending USDT, DAI or some other token on elysium. This also means that ANY transaction on Elysium v2 would increase the anonymity set of all other assets on Elysium!

We also released Helsing, a way to enable masternode staking with Lelantus Spark for added privacy.

There's also a soon to be released paper called Aura that enables private voting that also protects ballot progress and has lots of other cool features such as support for quadratic voting or preference voting etc. This builds off our lessons from Lelantus and can be used in DAOs and perhaps a future DAO for Firo.

The other thing we're in active research are the best way to have trustless bridging from other protocols. Existing protocols are still not that great in terms of user experience or require custodians which is not ideal. We'll announce more on this later.

While this isn't research, we are also in early stages of seeing whether an Avalanche style consensus model can replace our masternode consensus. We haven't reached a decision on this yet as we are still evaluating the fine details of this.

Mixnets are also being looked at :)

## You have a team of very qualified developers in cryptography (non-volunteer) and the price of Firo has not changed much for about 3 years now. How do you manage to survive and finance the project and its development with its market conditions?

Well there are many reasons for Firo's price not rising but i think most of it is behind us. If I had to blame a single thing it was this malicious seed investor who tried to take control of the project from the community but failed to do so and in retaliation dumped on us strategically for an entire year out of spite. Any sort of release we made, he dumped on it. Our rebrand, dumped on it. And because it was done over a long period of time it really hurt us as opposed to a huge dump at one go. It was designed for max pain.

Even the 51% attack was a clear TARGETED attack.

From analysis we saw that a few million Firo was acquired to do the double spend.

and then the attack was done by a rented GPU farm NOT from Nicehash

this was not your regular attacker.

and was designed to hurt us and get us delisted from exchanges.

For your information this was weeks before we were scheduled to deploy Chainlocks which would have made this 51% attack impossible. Now you cannot attack Firo's chain with proof of work alone, you need to bring down the masternodes.

We've had a supportive community with some people making donations to us. Our other seed investors had also helped cover some expenses during our toughest times.

And our developers have been pretty loyal to us. They've been offered higher salaries elsewhere but they enjoy working with us and believe in what we're building.

I've myself gone without salary for several months during tough times and because we're a lean organization we have been able to survive.

Some of our contractors are even so nice to even waive their fees to us for a bit when we were hurting

## Sad to hear, however the road to succes is always bumpy. This also shows you guys have a lot of experience now and makes ur community strong. I have no doubt you guys will move to greater prices in the near future👍

So it's not been an easy journey but I think we've done quite well :) Those who think we are making a fortune developing Firo can just take a look at our latest transparency report on our forums at [forum.firo.org](https://forum.firo.org/t/firo-core-team-finances-and-expenses-report-february-2022)

Yeah and no more malicious seed investor is a big win ;)

## At the time Zcoin became Firo wanted to set up a governance system with masternode technology. Today it still is a "business" type operation with a project manager and a selffinancing team. What is your opinion today on the change of governance (becoming a community project)? With the experience you have, do you think it's possible to make a transition from a "corporate" project to a community project?

I disagree that we're a 'business' since well we don't really make any profit from this haha. There's a reason why my title is not CEO

It's Project Steward (a title that another project XYM also now uses ;) )

We are self financed from the block reward but we are accountable to our community.

One of the thing that perhaps the core team has been lacking is fostering a community culture.

Because of the existence of the block subsidy, often people think that we should be responsible for the project like other pre-sales/ico teams where yeah maybe the team gets 15% but they also have ecosystem funds and exchange funds and what not which adds up to 60-70% of the total supply.

Now THAT's a 'business' operation where you preallocate.

Let me put it in context, 85% of the supply goes to COMMUNITY

for Firo

We organize many community meetings and have a [Firo Crowdfunding System](https://fcs.firo.org/) where anyone can open up a proposal for the community to fund.

There's also discussion in our forums about creating a separate community fund for the community to use directly which is something I would definitely support giving the community a bigger sense of ownership.

My personal hope is that eventually the 'dev fund' can be converted to a pure 'community fund' when the community is educated and strong enough.

And we are already making these steps :)

Let the core team roll out the key foundations of Firo like Spark and Spats :) and it'll be in a great state then for community to build on the solid foundations

## What are Firo's masternode network stats? Are you going to create a website to have this information available?

I think there are third party services already like [MNO](https://masternodes.online/). There are over 4000 masternodes atm

## Where does Firo and the other layer-1 projects (Beam, Zcash, Monero, etc..) stand compared to layer-2 anonymity projects (Suterusu, Aztec 2.0) or projects like Tornado cash? Is there a future in/for L2 privacy projects compared to the L1?

So one of the main issues for L2s is that you often have to bridge from L1 into L2 which results in delays and in some ways it's the same time as bridging into a privacy coin.

The other issue with L2s is that they only provide privacy for that one chain while we at Firo see ourselves eventually to be a one stop shop for many other chains to bridge into us.

But sure I have great respect for projects like Aztec. Their  cryptographer Ariel Gabizon is actually a big fan of our work on Lelantus :)

For Tornado Cash there are other issues

It's limited by the constraints of the system and Ethereum l1 is very hard to provide base layer privacy.

And often very expensive too for gas costs!!

Tornado Cash uses fixed denominations and also their anonymity set is limited to each asset type

so if not many people anonymize DAI, you don't get much anonymity by using Tornado Cash using DAI so it's a chicken and egg situation

You also run into a problem where interaction with these mixers can result in you being flagged which is already happening today.

With dedicated privacy chains, this isn't an issue and while we face resistance from exchanges and regulation we have many advantages for being focused on privacy.

## Yeah, L2 solutions have always given me a ''just not it'' feeling. Its cool what they do, and how creative they can be. But for real privacy we definitely need privacy by default coins!<br>Currently, many exchanges have unlisted privacycoins due to concerns about legal issues and money laundering, is Firo concerned about this?

Sure this is definitely a concern and it's kinda sad given how subjective it is.

What is a privacy coin?

If a coin has privacy preserving tech on it does it make it a privacy coin?

We have seen how some chains even strip off their privacy features to avoid this classification.

But one should read perkins coie's opinion on how privacy coins can still exist in an AMLA regulatory environment

it's a great insight into it

While we are of course against excessive regulation we also accept regulation as a reality. We won't compromise our core values on it but we can build tools to help those who have to comply to do so.

For example with Lelantus Spark, Spark addresses have flexible view keys.

They allow selective disclosure of a wallet or a single address

both incoming and outgoing!

With monero, their view keys only can see incoming

so they can't ascertain balance.

## Yeah. Many people still try to compare for example Secret Network to Firo. Meanwhile you really can't imo

Well Secret also relies almost exclusively on Intel SGX technology which is full of problems and being deprecated....sooo

It's another form of centralization and trust

and a big one at that

it's a trade off

you don't need to do all the fancy crypto work cause you're trusting proprietary hardware and tech to do it

It's an understandable trade off but not one that i think we should be taking

and they've done well because of it so kudos

## Will FIRO focus on DEXes?

And yes we're definitely big on DEXes

we recently launched FiroDEX which is powered by AtomicDEX

It's decentralized infrastructure, doesn't rely on smart contracts and you can do atomic swaps with TONS of networks

AVA, BSC, ETH, moonbeam etc etc

it's fully functional today

Also we're looking at other 'Thorchain' style of DEXes :) as well

We'll announce those once it's more firmed up !

Atomic swaps do have some drawbacks but they work great for UTXO chains :)

## Is it possible that a user can prove/audit a transaction if asked by a government or the police? Does this seem like an interesting function to you or not? What is Firo's philosophy on these aspects?

hahaha yes i refer to the above :) We're not against some regulation but sometimes it is over reaching and not balanced. Or paints privacy in a bad light. It's unfortunate that sometimes people who are privacy coins see ALL regulation as bad. They aren't. But yes, regulation is often over reaching ;)

## What do u think if the worst case happens, which means the government take a step to bring in the policies to confront with the growth of privacy coins in order to maintain their "right" authority to steal our privacy? In  that case, would u have a drastic improvement as a change Lelantus Spark?

Well the biggest thing that we can do is to make privacy coins like ours form a bigger part of the space. They currently only are a small fraction of the total market cap of crypto and so exchanges can delist us without affecting their bottom line too much.

However, this is why DEX technology is becoming a very key component and we are beginning to see many usable DEXes along with cross-chain ones. Remember DEXes were around for a long time but only took off very recently in DeFi and those are primarily single chain DEXes. I believe we'll see more cross chain DEXes like FiroDEX (AtomicDEX) and Thorchain and others.

There's nothing we need to do to change Spark though. We won't introduce a backdoor or anything like that. View keys fit all the compliance requirements for the most part.

## Rueben, what are your thoughts about migrations or prevention 51% attacks on Blockchains. Are hybrid Blockchains a solution? Or a third party checking the validity or block emissions?

Firo already uses a hybrid system :) LLMQ chainlocks protect the chain against 51% attack while still retaining PoW :) You can read about it here: https://firo.org/2021/01/28/chainlocks-activated-mainnet.html

Spark, Elysium, Aura are the main ones. You can view more here: https://firo.org/about/roadmap/

## I have been testing Elysium. It looks very promising. What are the best use cases you envision for assets creating on Elysium? And thank you for staying up late to answer our questions. :-)

Well i think private stablecoins bridged over are a real use case. While I'm not a lover of fiat, I understand the need for a stablecoin for transactions. Voting is also an underrated use case ;) But i'll like to see a privacy meme coin on Elysium for sure ;)

## Why FIRO is better than Zec and Monero? What things put FIRO as pioneer on privacy transactions?

I answered above. You can also read our comparison guide here (purely looking at privacy tech). https://firo.org/guide/privacy-coin-comparison.html

## Can you please name few strategic partners who are contributing materially in FIRO ? What kind of Resources. Tech they are providing to FIRO?

Well Arcadia and Cypherstack are huge contributors. They contributed a native mobile wallet to us along with cryptographic assistance. Mikerah from Hashcloak has also been really helpful and did our Spark audit.

We also have partnerships with many other project and remain in close contact such as Panther, Railgun, DotOracle etc etc. There is also some collaborative research between researchers working in XMR and Firo.

## Besides being a platform with peer-reviewed platform with private transactions. I also read that FIRO will also be capable of synchronizing with other blockchains and running smart contracts. but exactly how does this work on the privacy framework in a way that it can be used on all the major blockchains?

So bridges into our Elysium tokenization layer allows tokens from many other chains to enjoy Lelantus privacy. Smart contracts is something that isn't trivial and introduces a lot of attack surface so we're doing research on what core functionalities we need. This will come in Elysium v2. Remember in DeFi we have seen countless hacks and flaws and rugs....Do you think we're really ready for full private DeFi when you won't even know that something goes wrong or that people are running away with your money? A lot of ppl don't consider this.

## Pirate chain uses a multi-party trusted setup, also known as the powers of tau. Where randomness is injected by multiple people and that produces what is called toxic waste. Toxic waste could be used to generate an unlimited number of coins in theory, because you can create transactions and use it to validate the amounts, making them look legitimate. But there is a catch. You need all of that toxic waste to do that. If only one person deleted their toxic waste, then no one can create unlimited coins. We know the trusted setup is safe here because the keys that pirate uses, are exactly the same as the ones for ZCash. And some of the people who participated in the trusted setup destroyed their toxic waste on live stream. There were 87 participants all over the world and as long as just 1 of them was honest the parameter generation is safe and secure.

So if Zcash doesn't think trusted setup is a problem, why are they moving to Halo2? Sapling has BETTER performance than halo2

Now, I'm not saying that trusted setup is necessarily horrible and agree that a lot of it is FUD

but it's still an undesirable trait overall

With any upgrade you also need to do a new ceremony

But there are new types of trusted setup such as those with universal updatable CRS

but obviously no trusted setup is preferable

It's a trade off

You have to remember that Sprout in Zcash also was a trusted setup and we were assured that unless all 6 participants colluded you can't compromise it.

But a flaw was found in the setup itself so that even the participants didn't collude, inflation could happen.

of course a lot of this was solved in powers of tau

but you shouldn't take this stuff at their word given that similar guarantees were given for Sprout and the flaw was hidden for 2 years.

It's not just the number of participants involved.

Remember this isn't a FUD against any projects using trusted setup. As I said it's a trade off. And I've already shown clear examples where problems in trusted setup occurs. If you can't accept that, then you lack objectivity. You can MITIGATE the problem but cannot remove it completely. Again, there's a reason why Zcash spent SO MUCH TIME developing Halo2. I spoke with Ian Miers and he actually thinks that the development time on Halo2 would probably have been better spent elsewhere.

But of course as one of the authors of the Zerocash paper he has a bias :) I do think Halo2 is a step in the right direction and opens up new possibilities and techniques

But privacy protocol development is often an expensive undertaking with unclear pay offs since other people can take the tech then. This is also why ECC has become more opaque with their development because they want to preserve their advantage.

The other shitty way to do this is to just close source your stuff or don't describe it well to preserve your 'advantage' but that comes with many other issues as well :)
