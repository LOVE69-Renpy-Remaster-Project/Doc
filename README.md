<p align="center"><a href="https://love69renpyremasterproject.github.io/"><img src="images/项目组logo_smallsize.png" alt="项目组logo" style="zoom:50%;" /></a></p>
<h2 align="center">LOVE69 Ren’Py Remaster Project Document</h2>
<h3 align="center">LOVE69 Ren’Py Remaster Project 文档</h3>
<h4 align="center">用实际项目带你快速上手 Galgame 汉化移植 和 Ren’Py 引擎，小白也能轻松成为程序dalao</h4>

<p align="center"><img src=https://img.shields.io/github/stars/LOVE69-Renpy-Remaster-Project/Doc>  <img src=https://img.shields.io/github/forks/LOVE69-Renpy-Remaster-Project/Doc>  <img src=https://img.shields.io/github/issues/LOVE69-Renpy-Remaster-Project/Doc><a href="https://github.com/LOVE69-Renpy-Remaster-Project/Doc"><img src="https://img.shields.io/badge/%E6%96%87%E6%A1%A3-%E6%88%B3%E8%BF%99%E9%87%8C-brightgreen.svg"></a><a href="https://eatcocoa.luckykeeper.site:44443/"><img src="https://img.shields.io/badge/%E5%B0%8F%E6%B8%B8%E6%88%8F-%E6%88%B3%E8%BF%99%E9%87%8C-blue.svg"></a><a href="https://love69renpyremasterproject.github.io/"><img src="https://img.shields.io/badge/%E9%A1%B9%E7%9B%AE%E7%BB%84%E5%AE%98%E7%BD%91-%E6%88%B3%E8%BF%99%E9%87%8C-brightgreen.svg"></a></p>

------

# 前言

**【闲叙几言】**

​	大家好，我是 Luckykeeper ，LOVE69 Ren'Py Remaster Project 的项目组长，在我写下这段文字时，时值农历牛年最后一天，还有十分钟不到就要到虎年了，所以，在此先祝各位在将来，都能虎虎生威，事事顺利，有所成就！

​	2022年就要到来，回想起去年的这个时候，我还在倒腾我的[个人博客](https://luckykeeper.site)，从 WordPress 迁移到 Plumemo ，研究令人抓狂的混淆压缩过的 Javascript 文件，今年此时依然在倒腾代码，回首过去一年，感觉收获颇丰，乐趣无穷。也希望对汉化有志的你、或是对汉化感兴趣的你、或是想要制作 Galgame 的你、亦或是想要用 Ren'Py 为他人带来快乐的你，能通过本系列文档学有所成，学有所获，让圈子更加繁荣，为更多人带去欢乐！

​	LOVE69 Ren'Py Remaster Project ，不仅仅是汉化移植！我们的初心是想通过本项目，吸引更多的 Galgamer ，尤其是想要参与汉化但是又苦于搞不定程序的 Galgamer ，以及想要创作自己的故事，为国产 Galgame 增光添彩的 Galgamer 参与到实践中来！想要通过这个项目向大家展示：写 Galgame 的程序，是一件非常非常简单的事情！就像制作 PPT 一样，即使是编程小白也能轻松学会！

**【以何入手】**

​	本系列文档将会以 LOVE69 Ren'Py Remaster Project 的整个制作流程出发，横贯整个 Galgame 的汉化移植项目周期，以一个人全部包干的形式，从基本流程（解包、翻译、修图、脚本、封包等）到本项目使用的 Ren'Py 引擎的各个细节，来为大家揭开中小型 Galgame 汉化移植的神秘面纱。我相信，即使是没有任何编程基础的小白，只要看了本系列文档，适当跟着上手操作操作，也能轻松成为别人眼中的“程序dalao”！

**【项目简介】**

​	LOVEPOTION SIXTYNINE 在内容非常有趣的同时，还是一个有着一二周目、存在选择肢的典型日式 ADV  游戏（或者叫 Galgame ），所以，只要能搞懂这样的 Galgame 是怎么做出来的，那么，搞定一般的 Galgame 也就一定不在话下啦！虽然 Ren’Py 的中文文档非常详细，但是去阅读引擎文档，从引擎文档去学习总是晦涩的，也有不少人望引擎文档而却步。而本文档想要带你从实际的 Galgame 出发，以活灵活现的案例带你一步步做出像我们一样的效果！

**【相关说明】**

​	**文档目前还没有开工，待项目结束之后再开始动笔**，还请各位注意[主项目](https://github.com/luckykeeper/LOVE69_renpy_remaster)动向（阔以使用 GitHub 的 Watch 功能），在等待期间你可以先去推别的 Gal ，玩玩本项目的 [Demo](https://github.com/luckykeeper/LOVE69_renpy_remaster/releases/tag/0.1.0)，康康[主项目](https://github.com/luckykeeper/LOVE69_renpy_remaster)的情况并**给个Star**，关注[项目组官网](https://love69renpyremasterproject.github.io/)，或是去玩玩[小游戏](https://eatcocoa.luckykeeper.site:44443/)

​	本文档限于我的个人理解，必然会有很多纰漏以及包括但不限于代码冗余、非最佳实现等等问题，还请各位真·大佬不吝赐教，帮助本文档变得更好

​	允许自由转载本文档，但请保留文档 GitHub 链接，并在本文档 Issues 区告知一声

# 目录

内容待定，项目结束之后开始动笔，目前的设想在主项目的 [Project](https://github.com/luckykeeper/LOVE69_renpy_remaster/projects/3) 里可以看到，也欢迎大家到主项目给我提建议

# 鸣谢

> 也是大家学习的好去处
>
> 如果本项目帮助了你，也希望我能出现在你的感谢名单上捏

- [Ren’Py 引擎](https://www.renpy.org/) ：本项目使用的引擎，开发使用版本 7.4.6
- [Ren’Py 官方中文参考文档](https://www.renpy.cn/doc/) ：详细了解引擎特性，学习各种功能的大百科全书
- [Ren’Py 中文空间](https://www.renpy.cn/forum.php/) ：非常友好的社区，想实现某个具体的功能而毫无头绪？不妨去上面康康
- [“ Ren'Py 引擎从入门到放弃”系列教程](https://zhuanlan.zhihu.com/p/53084385) ：非常通俗的入门&进阶教程
- [枝江往事](https://github.com/A-Soul-GameMaker-Project/ZhiJiang) ：使用 Ren’Py 非常优秀的二创作品，填坑动力之一，比本项目做出的东西要好千倍，同样也开源了，我在制作过程中在这里学到了不少东西
- [CROSS † CHANNEL Chinese Localization Project](https://github.com/MewX/cross-channel_chinese-localization_project) ：非常优秀的全平台移植，我的开坑最初动力
- The Expression Amrilato （ことのはアムリラート\恋语）：Ren’Py 的优秀商业化作品，学习世界语的优秀教材
- [MisakaTranslator （御坂翻译器）](https://github.com/hanmin0822/MisakaTranslator) ：Galgame/文字游戏/漫画多语种实时机翻工具
- [Waifu2x-Extension-GUI](https://github.com/AaronFeng753/Waifu2x-Extension-GUI) ：Video, Image and GIF upscale/enlarge(Super-Resolution) and Video frame interpolation. Achieved with Waifu2x, Real-ESRGAN, SRMD, RealSR, Anime4K, RIFE, CAIN, DAIN, and ACNet.（使用机器学习放大 图片/视频/GIF 以及 视频插帧(补帧)）
- [AutoMatting](https://github.com/huanghaozi/AutoMatting) ：用Qt+OpenCV写的自动抠图的软件，使用removebg提供的api接口，可生成高清图
- [Visual Studio Code](https://code.visualstudio.com/) 提供的非常好用的 IDE 工具，以及 LuqueDaniel 提供的 [Ren’Py 扩展](https://marketplace.visualstudio.com/items?itemName=LuqueDaniel.languague-renpy) ，以及 [TabNine](https://github.com/codota/TabNine) 的 AI 代码补全工具

