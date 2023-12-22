(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{618:function(s,t,a){"use strict";a.r(t);var n=a(11),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[s._v("本节文档介绍如何制作历史记录跳跃的功能")])]),a("p",[s._v("参考资料：https://www.renpy.cn/thread-221-1-1.html")]),s._v(" "),a("h2",{attrs:{id:"前置知识"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前置知识"}},[s._v("#")]),s._v(" 前置知识")]),s._v(" "),a("p",[s._v("textbutton，见“QuickMenu（快捷菜单）的制作”一节")]),s._v(" "),a("h2",{attrs:{id:"需求描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#需求描述"}},[s._v("#")]),s._v(" 需求描述")]),s._v(" "),a("p",[s._v("历史记录跳跃是 Galgame 中的常见功能，Ren'Py 默认没有实现，我们来实现一个简单的历史记录跳跃")]),s._v(" "),a("h2",{attrs:{id:"修改代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改代码"}},[s._v("#")]),s._v(" 修改代码")]),s._v(" "),a("h3",{attrs:{id:"默认实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#默认实现"}},[s._v("#")]),s._v(" 默认实现")]),s._v(" "),a("p",[s._v("先来看 Ren'Py 的历史记录默认实现")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 参考 提交 35e1328 链接： https://github.com/luckykeeper/LOVE69_renpy_remaster/blob/35e1328bce09152fc7ebaf9394102ccbb856c350/%E5%B7%B2%E5%AE%8C%E6%88%90%E7%9A%84%E6%96%87%E6%A1%A3/%E7%94%A8%E6%88%B7%E5%9B%BE%E5%BD%A2%E7%95%8C%E9%9D%A2/screens.rpy#L899 screen.rpy 899-935行")]),s._v("\nscreen history"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n    tag menu\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 避免预缓存此界面，因为它可能非常大。")]),s._v("\n    predict "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),s._v("\n\n    use game_menu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"历史"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" scroll"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vpgrid"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" gui"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("history_height "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"viewport"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" yinitial"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n        style_prefix "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"history"')]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" h "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" _history_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n            window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 此语句可确保如果“history_height”为“None”的话仍可正常显示条")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 目。")]),s._v("\n                has fixed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                    yfit "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),s._v("\n\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("who"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n                    label h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("who"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                        style "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"history_name"')]),s._v("\n                        substitute "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),s._v("\n\n                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 若角色颜色已设置，则从“Character”对象中读取颜色到叙述")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 人文本中。")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"color"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("who_args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                            text_color h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("who_args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"color"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n                $ what "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" renpy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("filter_text_tags"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("what"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" allow"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("gui"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("history_allow_tags"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                text what"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                    substitute "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" _history_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            label _"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"尚无对话历史记录。"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br")])]),a("h3",{attrs:{id:"修改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改"}},[s._v("#")]),s._v(" 修改")]),s._v(" "),a("p",[s._v("其实是把这里的 "),a("code",[s._v("text what:")]),s._v(" 改成了一个 "),a("code",[s._v("textbutton")]),s._v(" ，点击后执行跳转功能")]),s._v(" "),a("p",[s._v("修改后的 History 部分代码如下")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 参考 ver1.0 screen.rpy 1653-1694行")]),s._v("\nscreen history"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n    tag menu\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 避免预缓存此界面，因为它可能非常大。")]),s._v("\n    predict "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),s._v("\n\n    use game_menu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"历史"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" scroll"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vpgrid"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" gui"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("history_height "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"viewport"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" yinitial"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n        style_prefix "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"history"')]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" h "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" _history_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n            window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 此语句可确保如果“history_height”为“None”的话仍可正常显示条")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 目。")]),s._v("\n                has fixed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                    yfit "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),s._v("\n\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("who"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n                    label h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("who"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                        style "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"history_name"')]),s._v("\n                        substitute "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),s._v("\n\n                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 若角色颜色已设置，则从“Character”对象中读取颜色到叙述")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 人文本中。")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"color"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("who_args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                            text_color h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("who_args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"color"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n                $ what "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" renpy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("filter_text_tags"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("what"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" allow"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("gui"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("history_allow_tags"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 历史记录跳跃")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## https://www.renpy.cn/thread-221-1-1.html")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改的部分就在这里")]),s._v("\n                textbutton what"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n\n                    substitute "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),s._v("\n                    style "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"history_text"')]),s._v("\n                    action Confirm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"要跳转到该处吗？"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" yes"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("RollbackToIdentifier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rollback_identifier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" no"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" confirm_selected"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" _history_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            label _"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"尚无对话历史记录。"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);