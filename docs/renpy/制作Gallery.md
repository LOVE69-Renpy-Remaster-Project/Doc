---
title: 制作Gallery
date: 2022-05-18 11:54:00
updated: 2022-05-18 11:54:00
---

::: tip
本节文档介绍如何制作Gallery，本篇**难度稍高**，强烈建议搭配源码学习
:::

官方文档：https://www.renpy.cn/doc/rooms.html#image-gallery

## 前置知识

textbutton、imagebutton，见“QuickMenu（快捷菜单）的制作”一节

相对坐标表示法、绝对坐标表示法，见“添加不同大小的小头像”一节

持久化变量，见“设置和持久化变量”一节

## 需求描述

Gallery 是一般 Galgame 中非常常见的功能，在本节我们实现一个能够根据周目情况，判断是否开放 Gallery 及开放多少 CG 的 Gallery

## 修改代码

### Extra 入口

Gallery 在 Extra 里面，一般 Galgame 在推完一周目之前 Extra 都是不开放的，本作也是，所以我们首先要实现一个能够根据周目情况开放 Extra 的功能，这里我们用到“设置和持久化变量”一节讲到的持久化变量即可

主菜单叫 `main_menu` ，Extra 菜单叫 `main_menu_2`

Extra 判断开放的代码如下，思路是检测到一周目通关之后提供按钮，否则不给玩家提供这个按钮，按钮的功能是跳转到 `main_menu_2` 页面

```python
# 节选 Ver1.0 screens.rpy 629-648行
    # Extra btn 的 vbox
    ## Extra 涉及到周目，由可变的 btn 组成，根据周目变量变化
    vbox:
        # 定位
        xalign 0.891
        yalign 0.64
        if persistent.one: # 一周目完成之后可以进入 Extra
        # if 1==1: # 调试用
            imagebutton:
                # Extra btn 放大到 1080p 对应的大小是 191x304 px ，稍稍大几个像素方便定位
                ## idle 初始状态
                ## hover 鼠标放在上面的状态
                ## selected_hover 按下 btn 的状态
                idle "gui/main_menu/btn_extra_base.png"
                hover "gui/main_menu/btn_extra_onMouse.png"
                selected_hover "gui/main_menu/btn_extra_onClick.png"
                hover_sound "voice/effect/マウス乗せ音.ogg"
                activate_sound "voice/effect/メニュー決定音.ogg"
                action ShowMenu("main_menu_2")
```

Extra 页面（main_menu_2）的实现和主菜单相似所以不重复讲了，接下来我们来看 Gallery 的实现

## Gallery 的实现

官方给出了四步的方法，这里我们在判断是否要将 CG 开放给玩家的方法和官方不大一样，官方文档给的方法是通过判断该 CG 是否被玩家看过决定是否开放，而我们的实现和上面“Extra 入口”的方法相似，使用持久化变量判断是否给玩家提供这个按钮，这和大多数 Galgame 是一致的

Gallery 这里需要注意，代码需要分两个部分写，一部分是 screen ，也就是前面制作主菜单那里提到的给玩家看的 GUI ，而还有一部分是 Gallery 的具体内容（也就是玩家能看到哪些 CG），这部分需要放到初始化模块里面，我们来看代码

### screen 部分

也就是给玩家看的 GUI

Gallery 可能需要播放与主菜单不同的 BGM ，本作就是这样，我们在这一小节的最下面的代码实现了这个功能

下面的 `grid` 类似 HTML 的 `<table>` ，能够生成一个表格（网格），需要注意的是 grid 生成的格子不能空着，一定要往里面放上东西，关于 `grid` 的参考文档，见：https://www.renpy.cn/doc/screens.html?highlight=grid#grid

```python
# 参考 Ver1.0 screens.rpy 2492-2586行
# ______________________________________________________________________________________________
# Gallery (ALBUM)
screen gallery:
    tag menu
    # 在这里播放音乐会导致 main_menu 的音乐混乱，暂时没有找到好的解决方法，后面再康康
    # 解决，这个可以参照 “MusicRoom” 的用法，下面的 “replace” 就是具体写法
    # $ renpy.music.play("bgm/bgm50.ogg", channel='music', loop=True, fadeout=1.0, synchro_start=False, fadein=1.0, if_changed=False)
    add "gui/cgmode/album.png"

    hbox:
        xalign 0.5
        yalign 0.5


        grid 5 4:
            spacing 60
			# add g.make_button 有两个入参，前面的是在初始化部分给定的名字，后面的是展示的缩略图（一张）
            add g.make_button("one", "gui/cgmode/cg/one/small/mcg01_1_1.png")

            add g.make_button("two", "gui/cgmode/cg/one/small/アイキャッチ心愛.png")

            add g.make_button("three", "gui/cgmode/cg/one/small/sdcg01a.png")

            add g.make_button("four", "gui/cgmode/cg/one/small/mcg_02_1.png")

            add g.make_button("five", "gui/cgmode/cg/one/small/sdcg04a.png")


            add g.make_button("six", "gui/cgmode/cg/one/small/ハワイa.png")

            add g.make_button("seven", "gui/cgmode/cg/one/small/ルート解禁.png")

            add g.make_button("eight", "gui/cgmode/cg/one/small/屋上_夕.png")

            add g.make_button("nine", "gui/cgmode/cg/one/small/ボウリング場.png")

            add g.make_button("ten", "gui/cgmode/cg/one/small/ccg01_1_1.png")

            add g.make_button("eleven", "gui/cgmode/cg/one/small/遊園地_商店街.png")

            add g.make_button("twelve", "gui/cgmode/cg/one/small/水着cgゲーム用.png")

			# 通过周目判断是否展示 CG，没推完二周目的话就展示空的按钮
            if persistent.two:
                add g.make_button("thirteen", "gui/cgmode/cg/two/small/空.png")

                add g.make_button("fourteen", "gui/cgmode/cg/two/small/天の川.png")

                add g.make_button("fifteen", "gui/cgmode/cg/two/small/繁華街_昼.png")

                add g.make_button("sixteen", "gui/cgmode/cg/two/small/歩道橋_昼.png")

                add g.make_button("seventeen", "gui/cgmode/cg/two/small/横浜_山下公園.png")

                add g.make_button("eighteen", "gui/cgmode/cg/two/small/rcg01_4_0.png")

                add g.make_button("nineteen", "gui/cgmode/cg/two/small/電柱.png")

                add g.make_button("twenty", "gui/cgmode/cg/two/small/自宅風呂場.png")

            else:
                imagebutton:
                    idle "gui/cgmode/btn_thumb.png"
                imagebutton:
                    idle "gui/cgmode/btn_thumb.png"
                imagebutton:
                    idle "gui/cgmode/btn_thumb.png"

                imagebutton:
                    idle "gui/cgmode/btn_thumb.png"
                imagebutton:
                    idle "gui/cgmode/btn_thumb.png"
                imagebutton:
                    idle "gui/cgmode/btn_thumb.png"
                imagebutton:
                    idle "gui/cgmode/btn_thumb.png"
                imagebutton:
                    idle "gui/cgmode/btn_thumb.png"

    imagebutton:
        xalign 0.99
        yalign 0.99
        idle "gui/saveload/btn_back_base.png"
        hover "gui/saveload/btn_back_onMouse.png"
        selected_hover "gui/saveload/btn_back_onClick.png"
        action ShowMenu("main_menu_2")

    # 页面下方的提示
    vbox:
        xalign 0
        yalign 1.0
        text "By Luckykeeper: Gallery 附带了一些彩蛋，包括一些原作没有使用但是也被打包进去的素材，\n                                    以及移植版没有使用的素材，还请注意。如需获取全部CG，可参照{a=https://love69-renpy-remaster-project.github.io/Doc/dev/%E8%A7%A3%E5%8C%85.html}项目组文档站{/a}指南解包"
    # 进入退出音乐效果
    on "replace" action Play("music", "bgm/bgm50.ogg")
    on "replaced" action Play("music", "bgm/bgm01.ogg")
```

### 初始化部分

初始化部分写 Gallery 需要展示的 CG 

代码如下：

```python
# 参考 Ver1.0 screens.rpy 2833-2989行，此处有所删改
init python: # 表示初始化阶段加载，必须加上

    # Gallery (ALBUM) 对象
    # Step1，创建Gallery对象
    g = Gallery()

    # Step2 创建要展示的实例
    # 一周目不考虑解锁问题，直接加上，因为之前 EXTRA 没有开放
    # 这里的 “one” 就是给定的名字，上面的 add g.make_button 用这个名字搜索
    g.button("one") # prpr真冬

    g.image("gui/cgmode/cg/one/mcg01_1_1.png")
    g.image("gui/cgmode/cg/one/mcg01_1_2.png")
    g.image("gui/cgmode/cg/one/mcg01_1_3.png")
    g.image("gui/cgmode/cg/one/mcg01_2_1.png")
    g.image("gui/cgmode/cg/one/mcg01_2_2.png")

    g.button("two") # 过场动画

    g.image("gui/cgmode/cg/one/アイキャッチ心愛＆真冬.png")
    g.image("gui/cgmode/cg/one/アイキャッチ心愛.png")
    g.image("gui/cgmode/cg/one/アイキャッチ真冬.png")
    g.image("gui/cgmode/cg/one/アイキャッチ心愛＆真冬水着.png")
    if persistent.two:
        g.image("images/bg/アイキャッチリオン.png") # 二周目之后展示的话可以这么写

    g.button("three") # 心爱&真冬 SDCG

    g.image("gui/cgmode/cg/one/sdcg01a.png")
    g.image("gui/cgmode/cg/one/sdcg01b.png")

    g.button("four") # 真冬教室

    g.image("gui/cgmode/cg/one/mcg_02_3.png")
    g.image("gui/cgmode/cg/one/mcg_02_2.png")
    g.image("gui/cgmode/cg/one/mcg_02_1.png")

    g.button("five") # 看戏四人组

    g.image("gui/cgmode/cg/one/sdcg04a.png")
    g.image("gui/cgmode/cg/one/sdcg04b.png")
    g.image("gui/cgmode/cg/one/体験版終了.png")

    g.button("six") # Hawaii!!!

    g.image("gui/cgmode/cg/one/ハワイa.png")
    g.image("gui/cgmode/cg/one/ハワイb.png")
    g.image("gui/cgmode/cg/one/ハワイc.png")
    g.image("gui/cgmode/cg/one/ハワイd.png")
    g.image("gui/cgmode/cg/one/ハワイe.png")
    g.image("gui/cgmode/cg/one/ハワイf.png")
    g.image("gui/cgmode/cg/one/ハワイg.png")
    g.image("gui/cgmode/cg/one/ハワイh.png")

    g.button("seven") # 里昂路线解禁

    g.image("gui/cgmode/cg/one/ルート解禁.png")

    g.button("eight") # 彩蛋素材：学校屋顶

    g.image("gui/cgmode/cg/one/屋上_昼.png")
    g.image("gui/cgmode/cg/one/屋上_夕.png")
    g.image("gui/cgmode/cg/one/屋上_夜.png")

    g.button("nine") # 和心爱酱的约会场所

    g.image("gui/cgmode/cg/one/ボウリング場.png")
    g.image("gui/cgmode/cg/one/チョコレートファクトリー.png")
    g.image("gui/cgmode/cg/one/コールドストーン.png")
    g.image("gui/cgmode/cg/one/寿司屋.png")
    g.image("gui/cgmode/cg/one/ゲームセンター.png")
    g.image("gui/cgmode/cg/one/ハンズ.png")

    g.button("ten") # 心爱酱的钢琴表演

    g.image("gui/cgmode/cg/one/ccg01_1_1.png")
    g.image("gui/cgmode/cg/one/ccg01_2_1.png")
    g.image("gui/cgmode/cg/one/ccg01_2_2.png")
    g.image("gui/cgmode/cg/one/ccg01_3_2.png")
    g.image("gui/cgmode/cg/one/ccg01_4_1.png")
    g.image("gui/cgmode/cg/one/ccg01_4_2.png")

    g.button("eleven") # 遊園地

    g.image("gui/cgmode/cg/one/遊園地_商店街.png")
    g.image("gui/cgmode/cg/one/遊園地_ポップコーン.png")

    g.button("twelve") # CG 1/2

    g.image("gui/cgmode/cg/one/main_menu_1.png")
    g.image("gui/cgmode/cg/one/水着cgゲーム用.png")

    g.button("thirteen") # 空

    g.image("gui/cgmode/cg/two/空.png")
    g.image("gui/cgmode/cg/two/空_夕b.png")
    g.image("gui/cgmode/cg/two/空_夕a.png")
    g.image("gui/cgmode/cg/two/空_雨.png")

    g.button("fourteen") # 天の川

    g.image("gui/cgmode/cg/two/天の川.png")
    g.image("gui/cgmode/cg/two/月.png")

    g.button("fifteen") # 繁華街_昼

    g.image("gui/cgmode/cg/two/繁華街_昼.png")
    g.image("gui/cgmode/cg/two/繁華街_夕.png")
    g.image("gui/cgmode/cg/two/繁華街_夜.png")
    g.image("gui/cgmode/cg/two/繁華街_雨.png")
    g.image("gui/cgmode/cg/two/ロータリー_昼.png")
    g.image("gui/cgmode/cg/two/ロータリー_夜.png")

    g.button("sixteen") # 歩道橋_昼

    g.image("gui/cgmode/cg/two/歩道橋_朝.png")
    g.image("gui/cgmode/cg/two/歩道橋_昼.png")
    g.image("gui/cgmode/cg/two/歩道橋_夕.png")
    g.image("gui/cgmode/cg/two/公園_夕.png")

    g.button("seventeen") # 横浜

    g.image("gui/cgmode/cg/two/横浜_山下公園.png")
    g.image("gui/cgmode/cg/two/横浜_港の見える丘公園.png")
    g.image("gui/cgmode/cg/two/横浜_中華街.png")
    g.image("gui/cgmode/cg/two/横浜_大桟橋.png")
    g.image("gui/cgmode/cg/two/横須賀.png")
    g.image("gui/cgmode/cg/two/横浜_赤煉瓦.png")
    g.image("gui/cgmode/cg/two/横浜_カップヌードルミュージアム.png")
    g.image("gui/cgmode/cg/two/横浜_クイーンズスクエア.png")
    g.image("gui/cgmode/cg/two/横浜_山下公園_夜.png")
    g.image("gui/cgmode/cg/two/横浜_観覧車.png")
    g.image("gui/cgmode/cg/two/横浜_観覧車2.png")

    g.button("eighteen") # rcg

    g.image("gui/cgmode/cg/two/rcg01_4_0.png")
    g.image("gui/cgmode/cg/two/rcg01_4_1.png")
    g.image("gui/cgmode/cg/two/rcg01t_4_1.png")
    g.image("gui/cgmode/cg/two/rcg01t_4_2.png")
    g.image("gui/cgmode/cg/two/rcg01t_1_1.png")
    g.image("gui/cgmode/cg/two/rcg01t_1_2.png")
    g.image("gui/cgmode/cg/two/rcg01t_2_1.png")
    g.image("gui/cgmode/cg/two/rcg01_4_2.png")
    g.image("gui/cgmode/cg/two/rcg01_5_2.png")

    g.button("nineteen") # 電柱

    g.image("gui/cgmode/cg/two/電柱.png")
    g.image("gui/cgmode/cg/two/鉄塔.png")

    g.button("twenty") # 自宅風呂場

    g.image("gui/cgmode/cg/two/自宅風呂場.png")
    g.image("gui/cgmode/cg/two/自宅洗面所_昼.png")
    g.image("gui/cgmode/cg/two/自宅洗面所_夕.png")
    g.image("gui/cgmode/cg/two/自宅洗面所_夜.png")

    # 用于图像切换使用的转场(transition)
    g.transition = dissolve
```

