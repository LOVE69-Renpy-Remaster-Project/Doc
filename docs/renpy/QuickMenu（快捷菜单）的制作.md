---
title: QuickMenu（快捷菜单）的制作
date: 2022-05-08 18:12:00
updated: 2022-05-08 18:12:00
---

::: tip
本节文档介绍如何制作 QuickMenu ，通过本节文档，你应当能够掌握 `textbutton` 和 `imagebutton` 的用法
:::

**官方文档**

文本按钮：https://www.renpy.cn/doc/screens.html?highlight=textbutton#textbutton

图片按钮：https://www.renpy.cn/doc/screens.html?highlight=imagebutton#imagebutton

## 需求描述

Ren'Py 自带的 QuickMenu 的文本按钮很不好看，点击的反馈感不好，需要替换成图片按钮

所谓 `QuickMenu ` ，指的是这一部分（图片中青色框出部分）

![需求描述](/Doc/images/renpy/QuickMenu（快捷菜单）的制作/需求描述.png)

## 修改代码

### 默认实现

我们首先来看 Ren'Py 的默认实现

```python
# 参考 ver1.0 screen.rpy 345-354行
# 只截取 textbutton 部分
            # 旧 quick_menu 之 textbutton
            textbutton _("回退") action Rollback()
            textbutton _("历史") action ShowMenu('history')
            textbutton _("快进") action Skip() alternate Skip(fast=True, confirm=True)
            textbutton _("自动") action Preference("auto-forward", "toggle")
            textbutton _("保存") action ShowMenu("game_save")
            textbutton _("读取") action ShowMenu("game_load")
            textbutton _("快存") action QuickSave()
            textbutton _("快读") action QuickLoad()
            textbutton _("设置") action ShowMenu('preferences')
```

使用 textbutton 的好处是非常简单，不需要让美工做图标，不过缺点是不好看，所以商业化的 Galgame 基本上都没有用文本做按钮的

### textbutton 的使用方法

```python
# textbutton _("显示的名称") action 点击后要执行的操作
# _("")前面的“_”表示括号里面的东西可以被翻译，实际做的话不考虑国际化的话可以不加
textbutton _("设置") action ShowMenu('preferences')
# action 可以执行的操作很多，目前在这里我们只要对照中文和后面的英文大概了解即可
# 里面需要关注 ShowMenu('preferences') 这个 action
# ShowMenu('preferences') 中 '' 里面的要跳转的页面的名称，这里具体后面讲写页面的时候再讲
# 现在只需要知道 ShowMenu('preferences') 会跳转到下面的位置（ver1.0 screen.rpy 的1431行）即可
screen preferences(): # preferences 是这个 screen 的名字，上面 ShowMenu 里面填的就是这里的名字
```

### 修改成图片按钮

来看代码

```python
# 参考 ver1.0 screen.rpy 345-354行
# 只截取 imagebutton 部分
# 这里只截取存档和快进来说明，快进和自动是一类，其余是一类，内容相仿，为防止篇幅过长这里只放两个
            # 存档
            imagebutton: # 声明是一个图片做的按钮
            # 注意缩进（一个 Tab 或者四个空格）
                idle "gui/quick_menu/btn_save_base.png" # idle 鼠标不在按钮上的样式
                hover "gui/quick_menu/btn_save_onMouse.png" # hover 鼠标放在按钮上的样式
                selected_hover "gui/quick_menu/btn_save_onClick.png" # selected_hover 鼠标点击时的样式
                hover_sound "voice/effect/マウス乗せ音.ogg" # hover_sound 鼠标放在按钮上的音效
                activate_sound "voice/effect/メニュー決定音.ogg" # activate_sound 鼠标点击时的音效
                action ShowMenu("game_save") # 执行的 action

            # 快进
            ## 快进和自动属于要保存状态的按钮，多一个 selected_idle 特性
            imagebutton:
                idle "gui/quick_menu/btn_skip_base.png"
                hover "gui/quick_menu/btn_skip_onMouse.png"
                selected_hover "gui/quick_menu/btn_skip_onClick.png"
                selected_idle "gui/quick_menu/btn_skip_Clicked.png" # 快进是一个持续的状态（启用时一直高亮） selected_idle 表示点击后持续展示这个图标
                hover_sound "voice/effect/マウス乗せ音.ogg"
                activate_sound "voice/effect/メニュー決定音.ogg"
                action Skip() alternate Skip(fast=True, confirm=True) # 照抄前面 textbutton 的 action
```

这样，我们就完成了 QuickMenu 的改造