---
title: ATL动画和转场
date: 2022-06-11 20:44:00
updated: 2022-06-11 20:44:00
---

::: tip
本节文档介绍ATL动画和转场的制作，
:::

官方文档1：https://www.renpy.cn/doc/atl.html#atl-syntax-and-semantics

官方文档2：https://www.renpy.cn/doc/atl.html#atl-syntax-and-semantics

## 前置知识

无

## 需求描述

1. galgame 中，人物往往会有一些活动（比如小跳一下、位置移动等）-->ATL 动画
2. scene 和 scene 间的过场动画 --> 转场

## 实现

### ATL 动画

这里我们用 Scene02 心爱在保龄球场的动画举例，如果是上面说的小跳一下也是类似的，只不过移动最终要返回原处而已

这里的例子是心爱酱连续多次移动

```python
# 参考 ver1.0 scene02.rpy 1188-1208行
	# 心爱搬保龄球小动画
    show 心愛_制服_基本_不機嫌:
        zoom 1.5 # 缩放：放大 1.5 倍
        xalign 1.9 # 相对坐标表示法：x 轴（起始位置在画面外）
        yalign -0.31 # 相对坐标表示法：y 轴
        linear 2.0 xalign 1.339 # linear 移动时间（秒） 最终位置 （ x 轴 1.339 ；y 轴没有位移可以不写）
    pause 2.5 # 暂停 2.5 秒
    show 心愛_制服_基本_不機嫌: # 同表情不需要 hide
        zoom 1.5
        xalign 1.339
        yalign -0.31
        linear 1.0 xalign 1.1895
    pause 1.5
    show 心愛_制服_基本_不機嫌:
        zoom 1.5
        xalign 1.1895
        yalign -0.31
        linear 1.3 xalign 1.04
    # pause 1.8 去掉最后的 pause 1.8 让心爱停止之前开始说话，和原版相比更加不突兀
    voice "voice/心愛/cca_a1_0200.ogg"
    ai 心愛_制服_基本_不機嫌 "咕呜... 咕奴奴奴奴!"
```

上面是心爱搬保龄球小动画的例子，因为在整个游戏中，心爱只这样移动了一次，如果需要移动多次，每次都这么写显然很麻烦，我们可以用 transform 把一种 ATL 模式固定下来

比如本次移植中，人物和背景图片的位置就是这么固定的，下面这个语句确定了心爱酱的位置

```python
    transform love69_right:
        zoom 1.5
        xalign 0.5
        yalign -0.09
        linear 0.0 xalign 0.8918
```

这样定义之后，心爱在右就可以用这样的 at 语句表示出来

```python
show 心愛_制服_おやつ_にっこり at love69_right
```

这样的定义对图片也是有效的，如下

```python
# 定义
	# waifu2x 非标准大小（不是1920*1080的而是1920*1440分辨率的使用以下参数）
    transform love69_bg1440:
        yalign 0.5

# 使用
    scene 玄関_昼 at love69_bg1440 with ImageDissolve("images/tr/trans01.png", 1.5, ramplen=8, reverse=True, alpha=True, time_warp=None)

```

### 转场

官方的文档写的很清楚，不过有一种非常常见的方法很容易被忽视，所以这里开了一小节来写

这个方法叫做 **ImageDissolve** ，可以按照自己定义的图片来进行过场的渲染，这个图片非常特殊，我放两张，来一起康康

![百叶窗](/Doc/images/renpy/ATL动画和转场/trans01.png)

![转圈](/Doc/images/renpy/ATL动画和转场/ysr006.png)

看着上面的图片，能不能想像出来效果是什么样的呢？

上面的那张是百叶窗特效，下面的是转圈，有没有感觉和 PowerPoint 或者 Adobe Premiere 里面的动画特别像呢？

这种图片的特殊之处在于纯白到纯黑之间是一个色阶一个色阶依次变化过来的，在制作 Galgame 的过程中，制作人可以让引擎按照色阶的顺序用新的图片渲染在旧的图片之上，这是一种非常常见也非常巧妙的制作方法，没有见过的话可能看到在于的图片有点懵圈，我第一次看到也是这样的，实际动手实现了之后也不由得感叹这样设计真的是非常巧妙！建议你也动手试试！
