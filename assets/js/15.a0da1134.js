(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{595:function(s,n,a){"use strict";a.r(n);var t=a(11),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[s._v("本节文档介绍如何写一个非常简单的对话出来")])]),a("h2",{attrs:{id:"脚本功能基本认知"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#脚本功能基本认知"}},[s._v("#")]),s._v(" 脚本功能基本认知")]),s._v(" "),a("p",[s._v("看了上面一节，你可能还是觉得有点难度，这里我来带你实际来上手修改一下，写一个简单的场景")]),s._v(" "),a("blockquote",[a("p",[s._v("注意，在本节教程中，不需要你删除工程目录内的任何文件")])]),s._v(" "),a("p",[s._v("我们知道，"),a("code",[s._v("script.rpy")]),s._v(" 是程序的入口，我们先来看下入口的关键代码")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# script.rpy 7099-7111行")]),s._v("\nlabel start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# start 表明这是程序入口")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 游戏开始")]),s._v("\n    stop music fadeout "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止主菜单音乐")]),s._v("\n    play sound "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"voice/effect/start.ogg"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 播放开始音效")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" fade "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 主菜单到正式游戏的过场")]),s._v("\n    pause "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.8")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# $ persistent.one = True # 调试用")]),s._v("\n    $ persistent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("gameStarted "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里是一个持久性变量，暂时不理解不要紧")]),s._v("\n    $ check_playthrough"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自己写的一个周目处理函数，见 script.rpy 58-79行，暂时不理解也不要紧")]),s._v("\n    jump scene01 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开始 scene01 的脚本")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("再来看一下 "),a("code",[s._v("scene01")]),s._v(" 的开头的关键代码")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# scene01.rpy 22行")]),s._v("\nlabel scene01"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 表明这是 scene01 的入口")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("看了这些，我们应该能够大概了解程序运作的流程了，下面我再画一个本项目剧情脚本的流程图来帮助大家理解")]),s._v(" "),a("p",[a("img",{attrs:{src:"/Doc/images/dev/%E5%86%99%E4%B8%80%E4%B8%AA%E9%9D%9E%E5%B8%B8%E7%AE%80%E5%8D%95%E7%9A%84%E5%AF%B9%E8%AF%9D/%E7%A8%8B%E5%BA%8F%E8%BF%90%E4%BD%9C%E6%B5%81%E7%A8%8B.png",alt:"程序运作流程"}})]),s._v(" "),a("p",[s._v("暂时不能理解的话不要紧，首先我们先来改一个简单的对话出来")]),s._v(" "),a("h2",{attrs:{id:"一个简单的小对话"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一个简单的小对话"}},[s._v("#")]),s._v(" 一个简单的小对话")]),s._v(" "),a("h3",{attrs:{id:"最简单的对话"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最简单的对话"}},[s._v("#")]),s._v(" 最简单的对话")]),s._v(" "),a("p",[s._v("为了能让程序进入到我们新做的对话，我们需要让程序跳转到我们新写的脚本中而不是 scene01 中，所以我们把上面的"),a("code",[s._v("script.rpy")]),s._v(" 关键代码进行这样的修改")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# jump scene01 # 开始 scene01 的脚本，我们不到 scene01 了，所以注释掉（前面加一个“#”）这行（当然删了也行）")]),s._v("\n    jump demo "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开始我们的脚本，这个场景我们叫它 demo 好了")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("这样，我们就让程序跳转到了 demo 而不是原本的 scene01 啦")]),s._v(" "),a("p",[s._v("但是此时，我们并没有 demo 的 label ，所以程序会不知道跳到那里，所以我们需要在 "),a("code",[s._v("scripts")]),s._v(" 文件夹内新建一个 "),a("code",[s._v("demo.rpy")]),s._v(" （VSCode 内资源管理器空白区域->右键->新建文件->填写文件名称 "),a("code",[s._v("demo.rpy")]),s._v("）")]),s._v(" "),a("p",[s._v("然后复制以下代码粘贴到该文件内")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# demo.rpy 一个简单的对话")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 人物已经在 character.rpy 定义好了，")]),s._v("\n\nlabel demo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 表明这是 demo 的开始")]),s._v("\n    \n    dong "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"大家吼呀~虽然现在是炎热的盛夏，但我还是一如既往的真冬"')]),s._v("\n\n    ai "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"嘛呼"')]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"这样就生成了一个最简单的对话"')]),s._v("\n\n    luckykeeper "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"嘛呼"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h3",{attrs:{id:"一个稍复杂的场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一个稍复杂的场景"}},[s._v("#")]),s._v(" 一个稍复杂的场景")]),s._v(" "),a("p",[s._v("接下来，我们来提高一下难度，做一个稍复杂的场景")]),s._v(" "),a("p",[s._v("先来改一下 "),a("code",[s._v("demo.rpy")]),s._v(" 文件")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# demo.rpy 一个简单的对话")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 人物已经在 character.rpy 定义好了，")]),s._v("\n\nlabel demo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 表明这是 demo 的开始")]),s._v("\n    \n    dong "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"大家吼呀~虽然现在是炎热的盛夏，但我还是一如既往的真冬"')]),s._v("\n\n    ai "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"嘛呼"')]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"这样就生成了一个最简单的对话"')]),s._v("\n\n    luckykeeper "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"嘛呼"')]),s._v("\n\n    jump demo02 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 跳转到更复杂的 demo02")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("同样，新建 "),a("code",[s._v("demo02.rpy")]),s._v(" 复制以下内容（请注意看注释）")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# demo02.rpy 复杂场景的实现")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 人物已经在 character.rpy 定义好了，")]),s._v("\n\nlabel demo02"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 表明这是 demo02 的开始")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下面的内容可能有点难，别怕，仔细看注释，一定会懂的")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# image 定义一个图片")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# bg 表明该图片是背景图片（background），它的名字被定义为“リビングa_昼”")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 等于号后面的是这个图片的具体位置")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 为什么要定义？")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 因为这样在用的时候就可以直接用“リビングa_昼”来指代这个路径的图片了，更加方便")]),s._v("\n    image bg リビングa_昼 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"images/bg/リビングa_昼.png"')]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# scene 定义背景图片")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 需要注意调用 scene 会刷新掉当前画面的其他内容，后面会做示范，with 是变换方法，可参见 Ren'Py 官方文档")]),s._v("\n    scene リビングa_昼 at truecenter "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" wiperight\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 背景音乐 ，fadein 是渐入")]),s._v("\n    play music bgmfive fadein "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这个方法是我们提供用来调整对话框小头像位置的参数，你可以尝试修改下面的数字，并观察效果")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这个语句是针对真冬设计的参数，能够调整真冬在对话框里面的位置")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更多参数，参考文档站 “代码规范”->“可用方法一节” https://love69-renpy-remaster-project.github.io/Doc/standard/%E5%8F%AF%E7%94%A8%E6%96%B9%E6%B3%95.html")]),s._v("\n    $ sideimagesize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SideImageXalign "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.08")]),s._v("\n    $ sideimagesize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SideImageYalign "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("29.35")]),s._v("\n    $ sideimagesize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SideImageZoom "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.95")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# show 展示人物立绘，不需要提前定义，名称写图片名称，不加扩展名")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 真冬_制服_基本_おやつ3 位于 ./images/face/真冬/真冬_制服_基本_おやつ3.png")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# at love69_left ，at 加方法，可用方法也请见 “代码规范”->“可用方法一节”，到里面提示的位置复制相应")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# transform 方法到这里，先定义，后使用")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用方法前需要定义，方法使用 transform 定义")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 定义 love69_left 变换方法")]),s._v("\n    transform love69_left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        zoom "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.5")]),s._v("\n        xalign "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.5")]),s._v("\n        yalign "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.09")]),s._v("\n        linear "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(" xalign "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.13")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 展示立绘")]),s._v("\n    show 真冬_制服_基本_おやつ"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" at love69_left "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" Dissolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.15")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 对话，这里的“真冬_制服_基本_おやつ3”是小头像的内容，小头像已经先在 character.rpy 定义好了，定义方法请去")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 该文件内查看")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# voice 需要放在对话之前，放在对话之后就是下一句对话的内容了")]),s._v("\n    voice "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"voice/真冬/maf_a1_0086.ogg"')]),s._v("\n    dong 真冬_制服_基本_にっこり "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"啊，心爱酱，早上好~ 给，欧尼酱，书包"')]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 同一人物之间，可以不需要调用小头像调整参数")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里就注释掉真冬的小头像调整参数啦（相当于没有写）")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# $ sideimagesize.SideImageXalign = 0.08")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# $ sideimagesize.SideImageYalign = -29.35")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# $ sideimagesize.SideImageZoom = 0.95")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 场景切换示例，这里要用 love69_bg1440 这个方法（这个素材分辨率是1920*1440），依然要先定义")]),s._v("\n    transform love69_bg1440"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        yalign "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.5")]),s._v("\n    image bg 玄関_朝 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"images/bg/玄関_朝.png"')]),s._v("\n    scene 玄関_朝 at love69_bg1440 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" dissolve\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 真冬 「ごめんごめん。あ、心愛ちゃん梅昆布茶飲む？」")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 先在新的位置 show 新立绘，话说完了在 hide 旧立绘")]),s._v("\n    show 真冬_制服_基本_にっこり at love69_left "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" dissolve\n    voice "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"voice/真冬/maf_a1_0088.ogg"')]),s._v("\n    dong 真冬_制服_基本_にっこり "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"抱歉，抱歉，啊，心爱酱，你要喝梅昆布茶吗? "')]),s._v("\n    hide 真冬_制服_基本_無表情\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换人物需要调用小头像调整函数，不同人物的调整数值不同，请参考 “代码规范”->“可用方法一节”")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这个语句是针对心爱设计的参数，能够调整心爱在对话框里面的位置")]),s._v("\n    $ sideimagesize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SideImageXalign "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.10")]),s._v("\n    $ sideimagesize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SideImageYalign "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15.72")]),s._v("\n    $ sideimagesize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SideImageZoom "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.96")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 心爱 「飲むー♪」")]),s._v("\n    show 心愛_制服_おやつ_にっこり at love69_right "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" dissolve\n    voice "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"voice/心愛/cca_a1_0036.ogg"')]),s._v("\n    ai 心愛_制服_おやつ_にっこり "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"嗯——姆——♪"')]),s._v("\n    hide 心愛_制服_おやつ_不機嫌\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止背景音乐，fadeout 淡出")]),s._v("\n    stop music fadeout "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.0")]),s._v("\n    scene black "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" Dissolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br")])]),a("p",[s._v("通过这两个示例，相信你一定可以上手进行二创啦~")])])}),[],!1,null,null,null);n.default=e.exports}}]);