---
title: 周目BGM切换
date: 2022-05-17 11:52:00
updated: 2022-05-17 11:52:00
---

::: tip
本节文档介绍如何制作多周目BGM切换功能
:::

参考资料：https://lemmasoft.renai.us/forums/viewtopic.php?t=51629

官方文档：https://www.renpy.cn/doc/label.html?highlight=before_main_menu

## 前置知识

持久化变量，见“设置和持久化变量”一节

## 需求描述

很多 Galgame 多周目的 BGM 通常和首次打开不同，我们使用 Ren'Py 来实现这个功能

## 修改代码

很不幸的是，Ren'Py 对这里的功能仅仅用了一句话带过，并没有说具体应该怎么办，我当时看了文档完全是懵圈的，试着用 if 在 `option.rpy` 中进行判断或者在 `init python` 初始化阶段进行判断，但是并不好弄，后来在外网 Google 的时候在 lemmasoft 论坛上面看到了这个方法

### 修改

使用一个特殊的 label `before_main_menu` ，搭配持久化变量就可以解决这个问题

```python
# 参考 ver1.0 screen.rpy 2482-2490行
# 可变 BGM
## https://lemmasoft.renai.us/forums/viewtopic.php?t=51629
## https://www.renpy.cn/doc/label.html?highlight=before_main_menu
label before_main_menu:
    if persistent.one:
        $ renpy.music.play("bgm/bgm01.ogg", channel='music', loop=True)
    else:
        $ renpy.music.play("bgm/bgm08.ogg", channel='music', loop=True)
    return
```

