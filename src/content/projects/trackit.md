---
title: "TrackIt - 设备资产管家"
description: "个人设备资产管理 App，追踪购买成本、日均花费、保修状态、市场估值与维护记录，含到期 / 维护提醒。Android 原生 + Flutter 混合架构。"
tags: ["Android", "Kotlin", "Flutter", "Room", "MVVM"]
category: "personal"
status: "in-progress"
featured: false
order: 5
startDate: 2026-05-01
github: "https://github.com/1544501967/TrackIt"
image: /projects/trackit-devices.png
gallery:
  - /projects/trackit-valuation.png
  - /projects/trackit-maintenance.png
---

# 📋 项目背景

数码设备越买越多——手机、电脑、平板、手表……每台的购买价、保修期、维护记录、当前估值散落在各处，很难算清「这台设备我总共花了多少钱、现在还值多少、什么时候该保养 / 过保」。

TrackIt 是一款个人设备资产管理 App，把这些信息集中管理：记录每一台设备，追踪购买成本、持有成本、日均花费、保修状态和市场估值，让资产状况一目了然。

> **一句话总结**：给个人数码设备建一本「资产账」，成本、估值、保修、维护、提醒一站式管理。

# 🎯 项目目标

- 设备全生命周期管理：购入、分类、保修、维护、估值
- 自动计算持有成本与日均花费
- 保修到期 / 定期维护 / 闲置 / 估值更新提醒
- 估值历史趋势可视化（增值 / 贬值）
- 纯本地存储，无需账号、无需联网

# 🛠 技术选型

采用 **Flutter UI + Android 原生** 混合架构：

| 层级 | 技术 | 职责 |
|------|------|------|
| UI 渲染 | Flutter 3.x + Dart（Riverpod） | 页面、交互、图表 |
| 业务逻辑 | Android 原生（Kotlin） | domain 用例 / 数据管理 |
| 数据存储 | Room（SQLite） | 类型安全、离线可用 |
| 图表 | fl_chart | 估值趋势折线 |
| 本地通知 | NotificationCompat + AlarmManager | 到期 / 维护提醒 |
| 通信桥 | MethodChannel / EventChannel | Flutter ↔ 原生双向通信 |

> 为什么混合？Flutter 负责流畅 UI 与图表，Android 原生负责数据、通知、权限等系统级能力，Room 保证离线可用、无后端依赖。

# ✨ 功能特性

- 🏠 **首页总览**：总资产金额、日均持有成本、即将到期设备、最近添加入口
- 📱 **设备管理**：增删改查、分类（手机 / 电脑 / 平板 / 穿戴）、购买价 / 日期 / 保修
- 🔧 **维护记录**：维护历史时间线、成本统计、定期维护提醒
- 📈 **估值追踪**：手动记录估值、历史趋势折线、增值 / 贬值可视化
- 🔔 **提醒中心**：保修到期 / 维护 / 闲置 / 估值更新提醒

# 📐 架构分层（Android 原生端）

```
android/app/src/main/java/com/trackit/
├── data/       TrackItDatabase · DAO(Device/Maintenance/Valuation)
│               · Entity · DeviceRepositoryImpl
├── domain/     Device 模型 · DeviceRepository · GetDevicesUseCase
├── service/    NotificationHelper · AlarmScheduler · ReminderReceiver
└── channel/    ChannelHandler（MethodChannel 通信）
```

数据层（Room）+ 业务层（domain 用例）+ 服务层（通知调度）分层清晰，遵循单一职责。

# 📊 项目进度

> 项目开发中：**Android 原生端（数据 / 业务 / 通知 / UI）已跑通可运行**，原计划迁移到 Flutter UI 的重构层尚在进行（当前为占位）。

| 模块 | 状态 | 说明 |
|------|------|------|
| 数据层（Room + DAO + Entity） | ✅ 已完成 | 设备 / 维护 / 估值三张表 |
| 业务层（domain 用例） | ✅ 已完成 | Repository + UseCase |
| 通知与提醒服务 | ✅ 已完成 | Alarm + Notification 四类提醒 |
| MethodChannel 通信层 | ✅ 已完成 | Flutter ↔ 原生桥接 |
| Android 原生 UI | ✅ 已完成 | 设备 / 估值 / 维护界面可运行 |
| Flutter UI 重构 | 🔄 进行中 | 页面占位，Riverpod provider 待接入 |

# 🔮 后续规划

- 本地数据备份与恢复（JSON / CSV 导出）
- 多主题 / 暗黑模式
- 设备图片管理
- 资产报表（月度 / 年度）
- 多语言支持

# 🔗 相关链接

- 源码：[GitHub](https://github.com/1544501967/TrackIt)
