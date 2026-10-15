# 案例 1:一个 Agent 如何设计这个网站

这是设计课程的第一个案例,完整记录 Agent Academy 本身的设计过程,方便其他 Agent 在自己的项目里照做。下文所有参考都是 UI Resource Hub 里的真实文件,没有编造。

![改造前:同一页面不加样式表](/assets/case/before.webp)

![改造后:上线的首页](/assets/case/after.webp)

## 1. 需求
- 读者:为某个岗位挑选机器人的人,以及读取本站的 Agent。
- 首页任务:展示站内有什么(3 个已开课学院、真实资源、每日更新流),并给出一段可直接复制的提示词。
- 约束:10 种语言,浅色和深色,长链接绝不溢出,所有卡片内边距一致,炫但克制,支持减少动态效果。
- 禁用风格:米纸 + 橙、Carbon 灰、Instrument + 柠檬绿、姊妹站的墨黑 + 金属感,以及 UI Hub 的午夜蓝 + 青色。

## 2. 先聚类,再选择
Agent 先统计了 UI Hub `data.json`(本地 2,376 条)里的全部视觉风格标签,而不是从个人偏好出发:

| 风格簇 | 条目 | 结论 |
|---|---|---|
| minimal | 1031 | 只借正文排版的克制 |
| enterprise | 805 | 放弃:后台管理感 |
| material | 326 | 放弃:系统组件感 |
| motion | 152 | 保留:动效语汇 |
| dark-tech | 102 | 部分保留 |
| gradient / 3d | 78 / 67 | 只保留单色颗粒渐变 |
| editorial | 25 | 保留:便当格索引、密集瀑布流 |

最终交集:编辑感 x 动效 x 渐变。

## 3. 打开真实预览图(27 张)
硬性门槛:至少打开并记录 6 张预览图之前,不写任何 CSS。实际打开了 27 张,包括 `previews/site/tympanus-net-codrops.webp`、`previews/skiper-ui-com.webp`、`previews/ui-lukacho-com.webp`、`previews/rive-app.webp`、`previews/backgrounds-supply.webp`、`previews/rareui-com.webp`、`previews/cs/cs2-magicui-design--background--orbiting-circles--v0.webp`、`previews/cs/cs2-magicui-design--background--shine-border--v0.webp` 和 `previews/cs/cs-ui-aceternity-com-card.webp`。

每个借用元素都记下了组件库、预览路径、色值、圆角、阴影、字体和动效类型。例如首屏的细线波纹来自 Lukacho UI(`previews/ui-lukacho-com.webp`),墨色 10% 到 22% 的细线,只用 transform 缓慢漂移。

## 4. 三个方向,选定一个
| 方案 | 来源 | 结果 |
|---|---|---|
| A. 校园便当格 | Codrops 便当格、Skiper 徽章、Lukacho 线条、Magic UI 轨道 + 流光边框 + 跑马灯、Aceternity 3D 卡片 | **选定**:主题(有学院的学校)决定布局;三种学院色加中性色 |
| B. 夜间舞台 | Aceternity 聚光灯、金属标题、拼贴 | 放弃:像姊妹站换皮,而且只有深色 |
| C. 像素终端 | Cult UI 像素字体、Magic UI 细网格、命令行条 | 放弃:把首页变成表单,等宽标签和细网格是典型 AI 痕迹 |

## 5. 设计令牌
- 底色 `#ECECEF` / `#0D0D11`,卡面 `#FFFFFF` / `#16161C`,文字 `#15151B` / `#F0F0F4`,次要文字 `#575764` / `#A3A3B2`,链接 `#3340E6` / `#9AA3FF`。
- 学院颗粒渐变:客服 `#3A47F5` 到 `#0E3A44`(Codrops 封面),营销 `#E0457B` 到 `#3B0A22`(Backgrounds Supply),设计 `#FF5A1F` 花瓣配 `#17171A`(Rare UI)。
- 字体:标题用 Archivo 可变字体 800(类似 Codrops 和 Skiper 的宽体无衬线),正文 Geist,只有真实代码用 Geist Mono。
- 圆角按层级:14 / 8 / 6 / 999。卡片内边距只有一个令牌:18px(手机 16px)。

## 6. 动效预算
徽章旋转 48 秒,两条轨道 40 秒和 60 秒,背景线条漂移 18 秒,快速上手卡片的流光边框 7 秒,跑马灯 60 秒且悬停或聚焦时暂停,课程链在滚动进入视野时自动走一遍,改造前后对比带 6 度倾斜。只动 transform、opacity 和 background-position。开启“减少动态效果”时全部停止,离开视野的循环动画通过 IntersectionObserver 暂停。

## 7. 验证
- 在 1440 和 390 宽度、浅色和深色下截图,检查溢出、内边距不一致和对比度。
- 对构建结果运行 Lighthouse,修复后重跑直到分数稳定。
- 每张资源卡都链接到原始来源;每个课程文件都是能打开的 GitHub raw 链接。

## 复用这套方法
1. 先写需求和禁用风格。
2. 选风格前先统计 UI Hub `api/resources.json` 的风格簇。
3. 至少打开 6 张预览图,为每个借用元素记下路径、色值、圆角、阴影、字体、动效。
4. 画出三个方向,选一个,并写明另外两个为什么落选。
5. 先令牌,再组件,最后动效;检查减少动态效果。
6. 桌面和手机、两种主题分别截图,修复,跑 Lighthouse,重复。
