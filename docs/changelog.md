# 更新日志

1.10.0

- 支持了 Dex 类检测（过滤了一些无意义的类）并加入了大量的 Dex 类标记库
- 详情页点击应用图标可以进一步操作
- 支持了 x86、x86_64 的架构检测
- 快照 - 仪表盘 增加了 追踪 功能，可以在每次开启快照时强制对比变更
- 优化和消灭臭虫

1.9.0

- 现在快照页面顶端的仪表盘可以交互了，点击时间戳可以切换，点击仪表盘可以进入“相簿”进行更多的操作
- 支持保存多个快照
- 支持对比任意两张快照
- 支持备份和恢复快照
- 现在详情页会展示各个组件的数量
- 现在快照页面会展示各个组件的变更数量
- 一些优化

1.8.0

愉快的周末

- 现在快照可以记录权限的变化了
- 增加了 重载应用列表 设置项
- 由于自动刷新列表机制常常不好好工作，我们开发了极为先进的 手动刷新 功能

1.7.6

- 使用 Kotlin 1.4 编译
- 重写了获取应用列表的逻辑，现在更加的稳定了
- 优化了一些布局(横屏瀑布流、滑动隐藏底栏等)

1.7.5

- 优化了每一处列表的布局渲染性能
- 修正了原生库架构的名称，现在使用标准名称
- 增加了一些标记库

1.7.4

- 修复 应用列表查询不到冻结应用的问题
- 修复 快照详情页闪退问题
- 优化 内存泄漏问题

1.7.3

- 现在快照详情页可以显示知名标记库
- 修复 库引用统计有时为空的问题

1.7.2

- 优化了一些体验

1.7.1

- 暂时删除加载进度条来修复闪退问题

1.7.0
** 如果闪退请先尝试清除数据 **

- 增加了 Shortcuts
- 详情页长按包名可快速复制
- 现在详情页可以响应 android.intent.action.SHOW_APP_DETAIL
- 增加了读取进度条
- 优化了一些实现

1.6.1

- 修复 Android L 上的严重闪退问题

1.6.0

- 优化了快照详情页的显示效果，现在可以分类折叠，亦增加了标识来区分变更
- 快照增加了 “移动” 变更类型

1.5.7

- 修复了 Android 10 上频发的闪退问题
- 优化了一些交互
- 增加了几个标记库