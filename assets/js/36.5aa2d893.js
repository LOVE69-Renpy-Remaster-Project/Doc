(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{616:function(t,s,a){"use strict";a.r(s);var n=a(11),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[t._v("本节文档介绍如何制作多周目BGM切换功能")])]),a("p",[t._v("参考资料：https://lemmasoft.renai.us/forums/viewtopic.php?t=51629")]),t._v(" "),a("p",[t._v("官方文档：https://www.renpy.cn/doc/label.html?highlight=before_main_menu")]),t._v(" "),a("h2",{attrs:{id:"前置知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前置知识"}},[t._v("#")]),t._v(" 前置知识")]),t._v(" "),a("p",[t._v("持久化变量，见“设置和持久化变量”一节")]),t._v(" "),a("h2",{attrs:{id:"需求描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#需求描述"}},[t._v("#")]),t._v(" 需求描述")]),t._v(" "),a("p",[t._v("很多 Galgame 多周目的 BGM 通常和首次打开不同，我们使用 Ren'Py 来实现这个功能")]),t._v(" "),a("h2",{attrs:{id:"修改代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改代码"}},[t._v("#")]),t._v(" 修改代码")]),t._v(" "),a("p",[t._v("很不幸的是，Ren'Py 对这里的功能仅仅用了一句话带过，并没有说具体应该怎么办，我当时看了文档完全是懵圈的，试着用 if 在 "),a("code",[t._v("option.rpy")]),t._v(" 中进行判断或者在 "),a("code",[t._v("init python")]),t._v(" 初始化阶段进行判断，但是并不好弄，后来在外网 Google 的时候在 lemmasoft 论坛上面看到了这个方法")]),t._v(" "),a("h3",{attrs:{id:"修改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改"}},[t._v("#")]),t._v(" 修改")]),t._v(" "),a("p",[t._v("使用一个特殊的 label "),a("code",[t._v("before_main_menu")]),t._v(" ，搭配持久化变量就可以解决这个问题")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 参考 ver1.0 screen.rpy 2482-2490行")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可变 BGM")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## https://lemmasoft.renai.us/forums/viewtopic.php?t=51629")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## https://www.renpy.cn/doc/label.html?highlight=before_main_menu")]),t._v("\nlabel before_main_menu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" persistent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("one"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        $ renpy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("music"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("play"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bgm/bgm01.ogg"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'music'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" loop"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        $ renpy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("music"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("play"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bgm/bgm08.ogg"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'music'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" loop"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);