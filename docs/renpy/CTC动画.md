---
title: CTC动画
date: 2022-05-07 11:52:00
updated: 2022-05-07 11:52:00
---

::: tip
本节文档介绍如何制作 CTC（Click To  Continue / 点击继续）动画
:::

官方文档：https://www.renpy.cn/doc/screen_special.html?highlight=ctc#ctc

## 需求描述

一般的 Galgame 都有这个东西，看图中青色方框圈出的地方，当角色对话显示完成后，用闪动的箭头（或者其它图标）提示玩家点击继续

> ![需求描述](/Doc/images/renpy/CTC动画/需求描述.png)

## 修改代码

Ren'Py 提供的特殊界面 `ctc()` 可以制作 CTC 动画

定义以下 screen 和 image 即可

```python
# 参考 ver1.0 screen.rpy 183-209行
# 定义 ctc ，就是一般 gal 里面提示“单击继续”的那个小箭头/符号

screen ctc():
    add "texticon" align (0.99,0.91) # 这块填的 "texticon" 和下面 image 后的名称一致。align() 里面用相对位置表示法表示 ctc 动画的位置

image texticon: #（定义ctc动画）
    "gui/texticon/icon_01.png" # ctc 动画通常是由多个 png 图片组成的
    pause 0.1 # 图片之间的展示间隔，单位：秒
    "gui/texticon/icon_02.png"
    pause 0.1
    "gui/texticon/icon_03.png"
    pause 0.1
    "gui/texticon/icon_04.png"
    pause 0.1
    "gui/texticon/icon_05.png"
    pause 0.1
    "gui/texticon/icon_06.png"
    pause 0.1
    "gui/texticon/icon_07.png"
    pause 0.1
    "gui/texticon/icon_08.png"
    pause 0.1
    "gui/texticon/icon_09.png"
    pause 0.1
    "gui/texticon/icon_10.png"
    pause 0.1
    repeat # repeat ，循环重复播放该动画
```

