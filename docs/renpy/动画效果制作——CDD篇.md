---
title: 动画效果制作——CDD篇
date: 2022-06-08 22:41:00
updated: 2022-06-08 22:41:00
---

::: tip
本节文档介绍如何制作动画效果，本节会使用比较高级的方法来做，适合动画中图片数量比较多的情况，性能比较好<br/>本篇由 [Luckykeeper](https://github.com/luckykeeper) 和 [WorldlineChanger](WorldlineChanger) 共同编写
:::

参考资料：https://zhuanlan.zhihu.com/p/362449324

官方文档：https://www.renpy.cn/doc/udd.html

::: tip
以下由 [Luckykeeper](https://github.com/luckykeeper) 编写
:::

## 前置知识

Python 知识是必备的，如果不熟悉 Python 的话，理解本部分将会**非常困难**

## 需求描述

如前篇基础篇所述，需要制作动画，但是偶尔会遇到超过100张图片做动画的情况，比如本篇的 STAFF 表，是由 1496 张图片构成的，像这种情况就不能使用基础篇讲到的方法了，而是要使用 Python 来定义，提升播放效率，这里的 CDD 叫做 **Creator-Defined Displayables** ，简称就是 CDD 啦

## 实现

---

::: tip
以下由 [WorldlineChanger](WorldlineChanger) 编写
:::

---

### 正式型 初号机-Initial

```python
# 代码参考 Ver1.0 Script.rpy 992-1056行
# ######################################################################################
# CDD Part By WorldlineChanger
# CDD-自定义可视化组件 定义 STAFF 动画
# 正式型 初号机-Initial

init python:

    class StaffAnimator(renpy.Displayable):

        # 文件扩展名由Ren'Py预处理,加油捏
        # 其他3项（前缀 prefix、分隔符 separator、序列帧 begin & end_index）为 StaffAnimator 的3种必备入参
        # 序列帧应是两个整型入参，或者一个二元元组，分别表示起始帧序列号和结束帧序列号(此处使用2个整型入参)
        # 用4个入参找到符合规范的一组图片
        def __init__(self, prefix, separator, begin_index, end_index, interval, loop=False, **kwargs):
            super(StaffAnimator, self).__init__(**kwargs)
            # 前缀
            self.prefix = prefix
            # 分隔符
            self.separator = separator
            # 起始帧序列号
            self.begin_index = begin_index
            # 结束帧序列号
            self.end_index = end_index
            # 序列帧长度
            self.length = end_index - begin_index + 1

            # 可视组件列表
            self.sequence = []
            for i in range(begin_index, end_index+1):
                # 将前缀、分隔符和序列号拼接，对应名称的可视组件顺序添加到列表中
                self.sequence.append(renpy.displayable(self.prefix + self.separator + str(i)))

            # 当前帧在可视组件列表中的索引
            self.current_index = 0
            # 关键帧时间轴
            self.show_timebase = 0
            # 播放间隔
            self.interval = interval
            # 循环播放
            self.loop = loop

        # 根据时间渲染对应的可视组件
        def render(self, width, height, st, at):
            if (st >= (self.show_timebase + self.interval)):
                self.show_timebase = st
                self.current_index += 1
                if self.current_index >= self.length:
                    # 若循环播放，将可视组件列表索引归零
                    if self.loop:
                        self.current_index = 0
                    else:
                        self.current_index = self.length - 1

            # 默认所有序列帧图片都具有相同尺寸
            render = renpy.render(self.sequence[self.current_index], width, height, st, at)
            renpy.redraw(self, 0)

            return render

# 创建实例并使用，序列帧命名规则：【staff_1.webp ~ staff_1457.webp】
image staff = StaffAnimator("staff", "_", 1, 1457, 0.0166666666666667)

# 播放
label start:
   show staff at truecenter
```

---

::: tip
以下由 [Luckykeeper](https://github.com/luckykeeper) 编写
:::

---

### 正式型 贰号机-"LuckyWL"

上面的代码存在一定问题：在播放 staff 表时读档回到选项前再次选择播放 staff 表，会导致 staff 表卡在某一帧不动（见[Issues #19](https://github.com/luckykeeper/LOVE69_renpy_remaster/issues/19#issuecomment-1120189240)）所以需要对上面的代码进行改造

改造思路：**在开始播放动画前，将当前播放图片计数手动置0**（第二次播放的时候肯定不是在第一张图片了），从头播放，这里把 `current_index` 注册为全局变量，方便调用

改造后代码如下：

```python
# 代码参考 GitHub dev-renpy7.4.6 分支 Script.rpy 1058-1124行
#######################################################################################
# CDD Part By WorldlineChanger and Modified By Luckykeeper
# CDD-自定义可视化组件 定义 STAFF 动画
# 正式型 贰号机-"LuckyWL"
# 尝试解决读档后 staff 表不能从头播放问题 By Luckykeeper
# https://github.com/luckykeeper/LOVE69_renpy_remaster/issues/19
# 解决方法：将 current_index 注册为全局变量，在播放前手动置 0 一次
init -1 python:
    current_index = 0 # 将 current_index 注册为全局变量，这个过程需要在 StaffAnimator 类之前加载完成
init python:

    class StaffAnimator(renpy.Displayable):

        # 文件扩展名由Ren'Py预处理,加油捏
        # 其他3项（前缀 prefix、分隔符 separator、序列帧 begin & end_index）为 StaffAnimator 的3种必备入参
        # 序列帧应是两个整型入参，或者一个二元元组，分别表示起始帧序列号和结束帧序列号(此处使用2个整型入参)
        # 用4个入参找到符合规范的一组图片
        def __init__(self, prefix, separator, begin_index, end_index, interval, loop=False, **kwargs):
            super(StaffAnimator, self).__init__(**kwargs)
            # 前缀
            self.prefix = prefix
            # 分隔符
            self.separator = separator
            # 起始帧序列号
            self.begin_index = begin_index
            # 结束帧序列号
            self.end_index = end_index
            # 序列帧长度
            self.length = end_index - begin_index + 1

            # 可视组件列表
            self.sequence = []
            for i in range(begin_index, end_index+1):
                # 将前缀、分隔符和序列号拼接，对应名称的可视组件顺序添加到列表中
                self.sequence.append(renpy.displayable(self.prefix + self.separator + str(i)))

            # 当前帧在可视组件列表中的索引
            global current_index
            current_index = 0
            # 关键帧时间轴
            self.show_timebase = 0
            # 播放间隔
            self.interval = interval
            # 循环播放
            self.loop = loop

        # 根据时间渲染对应的可视组件
        def render(self, width, height, st, at):
            global current_index
            if (st >= (self.show_timebase + self.interval)):
                self.show_timebase = st
                current_index += 1
                if current_index >= self.length:
                    # 若循环播放，将可视组件列表索引归零
                    if self.loop:
                        current_index = 0
                    else:
                        current_index = self.length - 1

            # 默认所有序列帧图片都具有相同尺寸
            render = renpy.render(self.sequence[current_index], width, height, st, at)
            renpy.redraw(self, 0)

            return render

# 创建实例并使用，序列帧命名规则：【staff_1.webp ~ staff_1457.webp】
image staff = StaffAnimator("staff", "_", 1, 1457, 0.0166666666666667)
```

在 Scene 中播放这样写

```python
# 代码参考 GitHub dev-renpy7.4.6 分支 scene09.rpy 2529-2545行
    if show_staff:
        # https://github.com/luckykeeper/LOVE69_renpy_remaster/issues/19
        $ current_index = 0
        # show screen staff
        show staff at truecenter
        # play sound bgmone
        # https://github.com/luckykeeper/LOVE69_renpy_remaster/issues/19
        # 参考：https://www.renpy.cn/doc/audio.html?highlight=music#renpy.music.play
        $ renpy.music.play("/bgm/bgm01.ogg", channel='music', loop=False, fadeout=None, synchro_start=False, fadein=0, tight=None, if_changed=False)
        $ persistent.playStaff =  True # variable value（注：这句实际在本作没有发挥实际作用可以忽略）
        $ check_playthrough()
        # 考虑到 STAFF 表的加载时间过长，这里选择再重复播放一次
        # queue sound bgmone
```

这里的 `$ current_index = 0` 就是把当前播放计数手动置0
