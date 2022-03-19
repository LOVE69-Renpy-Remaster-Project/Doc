(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{600:function(s,t,a){"use strict";a.r(t);var e=a(11),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("本节对项目组提供的一些可用方法进行说明")]),s._v(" "),a("h2",{attrs:{id:"对话框小头像调整参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对话框小头像调整参数"}},[s._v("#")]),s._v(" 对话框小头像调整参数")]),s._v(" "),a("h3",{attrs:{id:"定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[s._v("#")]),s._v(" 定义")]),s._v(" "),a("p",[a("code",[s._v("screens.rpy:33")])]),s._v(" "),a("p",[a("code",[s._v("screens.rpy:178")])]),s._v(" "),a("p",[s._v("这个参数实际上是将 "),a("code",[s._v("SideImage()")]),s._v(" 的 "),a("code",[s._v("xalign")]),s._v(" "),a("code",[s._v("yalign")]),s._v(" "),a("code",[s._v("zoom")]),s._v(" 参数从固定的变为可变参数")]),s._v(" "),a("p",[s._v("使用该参数的原因主要是各立绘大小不一，需要使用不同参数调整到合适位置")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# screens.rpy:176")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" renpy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("variant"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"small"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n        add SideImage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" xalign sideimagesize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SideImageXalign yalign sideimagesize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SideImageYalign zoom sideimagesize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SideImageZoom\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("该参数存储在 "),a("code",[s._v("sideimagesize")]),s._v(" 存储空间，参数可变且不会被持久化存储，热加载，参数变化不需要重新启动")]),s._v(" "),a("h3",{attrs:{id:"参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[s._v("#")]),s._v(" 参数")]),s._v(" "),a("p",[s._v("对话框小头像调整参数一共有三个，你应当同时使用")]),s._v(" "),a("p",[a("code",[s._v("$ sideimagesize.SideImageXalign")])]),s._v(" "),a("p",[s._v("说明：调整图像横坐标，允许超过屏幕边界")]),s._v(" "),a("p",[s._v("允许带小数点或者不带小数点，具体用法参照 Ren’Py "),a("code",[s._v("xalign")]),s._v(" 用法")]),s._v(" "),a("p",[a("code",[s._v("$ sideimagesize.SideImageYalign")])]),s._v(" "),a("p",[s._v("说明：调整图像纵坐标，允许超过屏幕边界")]),s._v(" "),a("p",[s._v("允许带小数点或者不带小数点，具体用法参照 Ren’Py "),a("code",[s._v("yalign")]),s._v(" 用法")]),s._v(" "),a("p",[a("code",[s._v("$ sideimagesize.SideImageZoom")])]),s._v(" "),a("p",[s._v("说明：调整图像缩放，允许超过屏幕边界")]),s._v(" "),a("p",[s._v("允许带小数点或者不带小数点，具体用法参照 Ren’Py "),a("code",[s._v("zoom")]),s._v(" 用法")]),s._v(" "),a("h3",{attrs:{id:"使用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[s._v("#")]),s._v(" 使用示例")]),s._v(" "),a("p",[s._v("在调用小图像前使用，使用规范请参照上一小节："),a("RouterLink",{attrs:{to:"/standard/代码规范.html"}},[s._v("代码规范")])],1),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这个语句是针对心爱设计的参数，能够调整心爱在对话框里面的位置")]),s._v("\n    $ sideimagesize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SideImageXalign "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.10")]),s._v("\n    $ sideimagesize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SideImageYalign "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15.72")]),s._v("\n    $ sideimagesize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SideImageZoom "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.96")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 心爱 「ふい～…まさか、シャンプーの入れ物にリンスが入ってるとは…」")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#（原作少了右半括号捏）")]),s._v("\n    show 心愛_制服_基本_不機嫌 at love69_xinai_center "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" dissolve\n    voice "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"voice/心愛/cca_a1_0865.ogg"')]),s._v("\n    ai 心愛_制服_基本_不機嫌 "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"呜欸欸~……怎么说呢，没想到洗发水的瓶子里面竟然装了护发素……"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h3",{attrs:{id:"可用方法一览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可用方法一览"}},[s._v("#")]),s._v(" 可用方法一览")]),s._v(" "),a("p",[a("strong",[s._v("心爱")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这个语句是针对心爱设计的参数，能够调整心爱在对话框里面的位置")]),s._v("\n    $ sideimagesize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SideImageXalign "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.10")]),s._v("\n    $ sideimagesize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SideImageYalign "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15.72")]),s._v("\n    $ sideimagesize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SideImageZoom "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.96")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这个语句是针对电话里的心爱设计的参数，能够调整电话里的心爱在对话框里面的位置")]),s._v("\n    $ sideimagesize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SideImageXalign "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.04")]),s._v("\n    $ sideimagesize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SideImageYalign "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.04")]),s._v("\n    $ sideimagesize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SideImageZoom "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.6")]),s._v("\n    \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[a("strong",[s._v("真冬")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这个语句是针对真冬设计的参数，能够调整真冬在对话框里面的位置")]),s._v("\n    $ sideimagesize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SideImageXalign "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.08")]),s._v("\n    $ sideimagesize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SideImageYalign "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("29.35")]),s._v("\n    $ sideimagesize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SideImageZoom "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.95")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这个语句是针对电话里的真冬设计的参数，能够调整电话里的真冬在对话框里面的位置")]),s._v("\n    $ sideimagesize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SideImageXalign "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.04")]),s._v("\n    $ sideimagesize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SideImageYalign "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.04")]),s._v("\n    $ sideimagesize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SideImageZoom "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.6")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[a("strong",[s._v("里昂")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这个语句是针对里昂设计的参数，能够调整里昂在对话框里面的位置")]),s._v("\n    $ sideimagesize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SideImageXalign "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.09")]),s._v("\n    $ sideimagesize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SideImageYalign "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.32")]),s._v("\n    $ sideimagesize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SideImageZoom "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这个语句是针对电话里的里昂设计的参数，能够调整电话里的里昂在对话框里面的位置")]),s._v("\n    $ sideimagesize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SideImageXalign "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.04")]),s._v("\n    $ sideimagesize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SideImageYalign "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.04")]),s._v("\n    $ sideimagesize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SideImageZoom "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.6")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[a("strong",[s._v("想瑠")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这个语句是针对想瑠喵设计的参数，能够调整想瑠喵在对话框里面的位置")]),s._v("\n    $ sideimagesize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SideImageXalign "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.01")]),s._v("\n    $ sideimagesize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SideImageYalign "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.65")]),s._v("\n    $ sideimagesize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SideImageZoom "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("strong",[s._v("雾叶")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这个语句是针对雾叶设计的参数，能够调整雾叶在对话框里面的位置")]),s._v("\n    $ sideimagesize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SideImageXalign "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.07")]),s._v("\n    $ sideimagesize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SideImageYalign "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.05")]),s._v("\n    $ sideimagesize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SideImageZoom "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("strong",[s._v("花盆君")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这个语句是针对花盆君设计的参数，能够调整花盆君在对话框里面的位置")]),s._v("\n    $ sideimagesize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SideImageXalign "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.15")]),s._v("\n    $ sideimagesize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SideImageYalign "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.21")]),s._v("\n    $ sideimagesize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SideImageZoom "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.5")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("strong",[s._v("MJ")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这个语句是针对MJ设计的参数，能够调整MJ在对话框里面的位置")]),s._v("\n    $ sideimagesize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SideImageXalign "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.1")]),s._v("\n    $ sideimagesize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SideImageYalign "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.78")]),s._v("\n    $ sideimagesize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SideImageZoom "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("strong",[s._v("亚十礼")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这个语句是针对亚十礼设计的参数，能够调整亚十礼在对话框里面的位置")]),s._v("\n    $ sideimagesize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SideImageXalign "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.1")]),s._v("\n    $ sideimagesize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SideImageYalign "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14.3")]),s._v("\n    $ sideimagesize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SideImageZoom "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("strong",[s._v("瑠那")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这个语句是针对瑠那设计的参数，能够调整瑠那在对话框里面的位置")]),s._v("\n    $ sideimagesize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SideImageXalign "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.11")]),s._v("\n    $ sideimagesize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SideImageYalign "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.46")]),s._v("\n    $ sideimagesize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SideImageZoom "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"背景图片调整参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景图片调整参数"}},[s._v("#")]),s._v(" 背景图片调整参数")]),s._v(" "),a("h3",{attrs:{id:"定义-使用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义-使用示例"}},[s._v("#")]),s._v(" 定义&使用示例")]),s._v(" "),a("p",[s._v("有多个功能、代码类似的示例，此处仅举一例：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# scene01.rpy:63")]),s._v("\n    transform love69_bg1620"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        truecenter\n        zoom "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.89")]),s._v("\n        xalign "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v("\n        yalign "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.5")]),s._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# scene06.rpy:24")]),s._v("\n\t    scene 自室a_朝 at love69_bg1620 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" ImageDissolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"images/tr/縦ブラインド.png"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ramplen"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("128")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" reverse"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" alpha"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" time_warp"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("该类参数命名的共同特点："),a("code",[s._v("love69_bg")]),s._v(" + 素材像素之高(px)，如 "),a("code",[s._v("love69_bg1620")]),s._v(" ， "),a("code",[s._v("love69_bg1440")]),s._v(" ， "),a("code",[s._v("love69_bg1220")])]),s._v(" "),a("p",[s._v("使用该参数时不需要传其它参数")]),s._v(" "),a("p",[s._v("定义该参数主要是因为原作背景图片大小不一，需要统一调整至合适位置")]),s._v(" "),a("p",[s._v("需要注意的是：1920x1080 大小的背景可以直接使用，不需要这样的参数，即不需要 at 分句，如下例：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("    scene 霧葉ちゃんのお店 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" ImageDissolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"images/tr/ysr006.png"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ramplen"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" reverse"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" alpha"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" time_warp"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"可用方法一览-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可用方法一览-2"}},[s._v("#")]),s._v(" 可用方法一览")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("方法名称")]),s._v(" "),a("th",[s._v("定义")]),s._v(" "),a("th",[s._v("说明")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("love69_bg1620")]),s._v(" "),a("td",[s._v("scene01.rpy:63")]),s._v(" "),a("td",[s._v("2160*1620 图片素材定位参数")])]),s._v(" "),a("tr",[a("td",[s._v("love69_bg1440")]),s._v(" "),a("td",[s._v("scene01.rpy:69")]),s._v(" "),a("td",[s._v("1920*1440 图片素材定位参数")])]),s._v(" "),a("tr",[a("td",[s._v("love69_bg1220")]),s._v(" "),a("td",[s._v("scene01.rpy:72")]),s._v(" "),a("td",[s._v("1920*1220 图片素材定位参数")])])])]),s._v(" "),a("h2",{attrs:{id:"立绘调整参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#立绘调整参数"}},[s._v("#")]),s._v(" 立绘调整参数")]),s._v(" "),a("h3",{attrs:{id:"定义-使用示例-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义-使用示例-2"}},[s._v("#")]),s._v(" 定义&使用示例")]),s._v(" "),a("p",[s._v("有多个功能、代码类似的示例，此处仅举一例：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("show 心愛_制服_基本_不機嫌 at love69_xinai_center "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" dissolve\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("该类参数命名的共同特点："),a("code",[s._v("love69_人物_位置")])]),s._v(" "),a("p",[s._v("使用该参数时不需要传其它参数")]),s._v(" "),a("p",[s._v("定义该参数主要是因为原作立绘图片不同人物大小不一，需要统一调整至合适位置")]),s._v(" "),a("p",[a("strong",[s._v("需要注意的是")]),s._v("：因为我的失误和历史代码遗留问题等原因，以下方法与其它方法不同，使用时还请注意")]),s._v(" "),a("p",[a("code",[s._v("love69_center")]),s._v(" ：命名上应当为 "),a("code",[s._v("love69_dong_center （没有这个方法）")]),s._v("  这个方法定义真冬在中间的参数，不应该给真冬以外的角色使用")]),s._v(" "),a("p",[a("code",[s._v("love69_left")]),s._v(" ：命名上应当为 "),a("code",[s._v("love69_dong_left （没有这个方法）")]),s._v("  这个方法定义真冬在左边的参数，不应该给真冬以外的角色使用")]),s._v(" "),a("p",[a("code",[s._v("love69_right")]),s._v(" ：命名上应当为 "),a("code",[s._v("love69_xinai_right （没有这个方法）")]),s._v("  这个方法定义心爱在右边的参数，不应该给心爱以外的角色使用")]),s._v(" "),a("p",[s._v("其它方法没有这个问题")]),s._v(" "),a("h3",{attrs:{id:"可用方法一览-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可用方法一览-3"}},[s._v("#")]),s._v(" 可用方法一览")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("方法名称")]),s._v(" "),a("th",[s._v("定义")]),s._v(" "),a("th",[s._v("说明")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[a("strong",[s._v("真冬")])]),s._v(" "),a("td"),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("注意！🐷🥼love69_left")]),s._v(" "),a("td",[s._v("scene01.rpy:1646")]),s._v(" "),a("td",[s._v("真冬在左的参数")])]),s._v(" "),a("tr",[a("td",[s._v("🐷🥼love69_center")]),s._v(" "),a("td",[s._v("scene01.rpy:54")]),s._v(" "),a("td",[s._v("真冬在中间的参数")])]),s._v(" "),a("tr",[a("td",[s._v("love69_dong_bg_center")]),s._v(" "),a("td",[s._v("scene06.rpy:488")]),s._v(" "),a("td",[s._v("大真冬在中间的参数")])]),s._v(" "),a("tr",[a("td",[a("strong",[s._v("心爱")])]),s._v(" "),a("td"),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("🐷🥼love69_right")]),s._v(" "),a("td",[s._v("scene01.rpy:1632")]),s._v(" "),a("td",[s._v("心爱在右的参数")])]),s._v(" "),a("tr",[a("td",[s._v("love69_xinai_center")]),s._v(" "),a("td",[s._v("scene01.rpy:5195")]),s._v(" "),a("td",[s._v("心爱在中间的参数")])]),s._v(" "),a("tr",[a("td",[s._v("love69_xinai_left")]),s._v(" "),a("td",[s._v("scene01.rpy:5843")]),s._v(" "),a("td",[s._v("心爱在左的参数")])]),s._v(" "),a("tr",[a("td",[s._v("love69_xinai_bg_center")]),s._v(" "),a("td",[s._v("scene02.rpy:2097")]),s._v(" "),a("td",[s._v("大心爱在中间的参数")])]),s._v(" "),a("tr",[a("td",[s._v("love69_xinai_leftest")]),s._v(" "),a("td",[s._v("scene13.rpy:2098")]),s._v(" "),a("td",[s._v("心爱在最左的参数")])]),s._v(" "),a("tr",[a("td",[a("strong",[s._v("花盆君")])]),s._v(" "),a("td"),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("love69_huapen_center")]),s._v(" "),a("td",[s._v("scene01.rpy:2709")]),s._v(" "),a("td",[s._v("花盆君在中间的参数")])]),s._v(" "),a("tr",[a("td",[s._v("love69_huapen_right")]),s._v(" "),a("td",[s._v("scene09.rpy:587")]),s._v(" "),a("td",[s._v("花盆君在右的参数")])]),s._v(" "),a("tr",[a("td",[s._v("love69_huapen_rightest")]),s._v(" "),a("td",[s._v("scene10.rpy:2190")]),s._v(" "),a("td",[s._v("花盆君在最右的参数")])]),s._v(" "),a("tr",[a("td",[a("strong",[s._v("想瑠")])]),s._v(" "),a("td"),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("love69_xiangliu_center")]),s._v(" "),a("td",[s._v("scene01.rpy:2867")]),s._v(" "),a("td",[s._v("想瑠在中间的参数")])]),s._v(" "),a("tr",[a("td",[s._v("love69_xiangliu_right")]),s._v(" "),a("td",[s._v("scene02.rpy:1532")]),s._v(" "),a("td",[s._v("想瑠在右边的参数")])]),s._v(" "),a("tr",[a("td",[s._v("love69_xiangliu_left")]),s._v(" "),a("td",[s._v("scene11.rpy:182")]),s._v(" "),a("td",[s._v("想瑠在左的参数")])]),s._v(" "),a("tr",[a("td",[s._v("love69_xiangliu_rightest")]),s._v(" "),a("td",[s._v("scene11.rpy:524")]),s._v(" "),a("td",[s._v("想瑠在最右的参数")])]),s._v(" "),a("tr",[a("td",[a("strong",[s._v("MJ")])]),s._v(" "),a("td"),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("love69_mj_center")]),s._v(" "),a("td",[s._v("scene01.rpy:4191")]),s._v(" "),a("td",[s._v("MJ在中间的参数")])]),s._v(" "),a("tr",[a("td",[a("strong",[s._v("里昂")])]),s._v(" "),a("td"),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("love69_lion_center")]),s._v(" "),a("td",[s._v("scene01.rpy:4322")]),s._v(" "),a("td",[s._v("里昂在中间的参数")])]),s._v(" "),a("tr",[a("td",[s._v("love69_lion_right")]),s._v(" "),a("td",[s._v("scene09.rpy:3221")]),s._v(" "),a("td",[s._v("里昂在右的参数")])]),s._v(" "),a("tr",[a("td",[s._v("love69_lion_bg_center")]),s._v(" "),a("td",[s._v("scene17.rpy:1527")]),s._v(" "),a("td",[s._v("大里昂在中间的参数")])]),s._v(" "),a("tr",[a("td",[a("strong",[s._v("雾叶")])]),s._v(" "),a("td"),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("love69_wuye_right")]),s._v(" "),a("td",[s._v("scene01.rpy:5848")]),s._v(" "),a("td",[s._v("雾叶在右的参数")])]),s._v(" "),a("tr",[a("td",[s._v("love69_wuye_center")]),s._v(" "),a("td",[s._v("scene01.rpy:6130")]),s._v(" "),a("td",[s._v("雾叶在中间的参数")])]),s._v(" "),a("tr",[a("td",[s._v("love69_wuye_left")]),s._v(" "),a("td",[s._v("scene07.rpy:46")]),s._v(" "),a("td",[s._v("雾叶在左的参数")])]),s._v(" "),a("tr",[a("td",[a("strong",[s._v("亚十礼")])]),s._v(" "),a("td"),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("love69_atri_leftest")]),s._v(" "),a("td",[s._v("scene11.rpy:792")]),s._v(" "),a("td",[s._v("亚十礼在最左的参数")])]),s._v(" "),a("tr",[a("td",[s._v("love69_atri_center")]),s._v(" "),a("td",[s._v("scene11.rpy:1435")]),s._v(" "),a("td",[s._v("亚十礼在中间的参数")])]),s._v(" "),a("tr",[a("td",[s._v("love69_atri_left")]),s._v(" "),a("td",[s._v("scene17.rpy:317")]),s._v(" "),a("td",[s._v("亚十礼在左的参数")])]),s._v(" "),a("tr",[a("td",[a("strong",[s._v("瑠那")])]),s._v(" "),a("td"),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("love69_liuna_rightest")]),s._v(" "),a("td",[s._v("scene11.rpy:811")]),s._v(" "),a("td",[s._v("瑠那在最右的参数")])]),s._v(" "),a("tr",[a("td",[s._v("love69_liuna_center")]),s._v(" "),a("td",[s._v("scene11.rpy:1417")]),s._v(" "),a("td",[s._v("瑠那在中间的参数")])]),s._v(" "),a("tr",[a("td",[s._v("love69_liuna_right")]),s._v(" "),a("td",[s._v("scene17.rpy:1059")]),s._v(" "),a("td",[s._v("瑠那在右的参数")])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);