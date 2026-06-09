---
title: "个人主页"
description: "基于 Astro + Tailwind CSS 搭建的个人主页网站，支持博客、项目展示和内容管理。"
image: "/projects/personal-site.svg"
tags: ["Astro", "Tailwind CSS", "TypeScript"]
category: "personal"
status: "in-progress"
gallery:
  - "/projects/personal-site.svg"
github: "https://github.com/1544501967/personal-site"
featured: true
order: 1
startDate: 2026-06-10
---

# 📋 项目背景

作为一名开发者，拥有一个属于自己的个人主页是展示技能、记录成长的重要方式。市面上的博客平台各有局限，不如自己搭建一个完全可控的个人空间。

参考了 exa.ai 的极简设计风格，打造一个既专业又有个人特色的网站。

> **一句话总结**：打造一个极简、专业的个人主页，展示项目作品和技术思考。

# 🎯 项目目标

- 个人简历展示，方便求职和自我介绍
- 技术随笔发布，记录学习过程和经验分享
- 项目作品集，直观展示开发成果
- 完全通过 Git 管理内容，无需后端和数据库

# 🛠 技术选型

| 技术 | 用途 | 选择理由 |
|------|------|----------|
| Astro | 静态网站生成 | 零 JS 默认，极致性能 |
| Tailwind CSS | 样式系统 | 原子化 CSS，快速开发 |
| MDX | 内容增强 | Markdown + 组件 |
| Cloudflare Pages | 部署平台 | 免费，全球 CDN |

# ✨ 功能特性

- **首页** — Hero 展示 + 最新随笔 + 精选项目
- **随笔系统** — Markdown 写作，标签分类，代码高亮
- **项目展示** — 详情页 + 截图画廊 + 进度跟踪
- **关于页面** — 技能、工作经历、教育背景
- **响应式设计** — 完美适配手机、平板、桌面
- **Git 工作流** — 内容即代码，push 即发布

# 📐 设计规范

```
主色调: #1E40ED (Exa 蓝)
背景色: #FFFFFF / #FAF9F8
字体:   Inter + JetBrains Mono
风格:   极简 / 专业 / 技术感
```

# 📊 项目进度

| 模块 | 状态 | 说明 |
|------|------|------|
| 首页 | ✅ 已完成 | Hero + 随笔 + 项目 |
| 随笔系统 | ✅ 已完成 | 列表 + 详情 + 标签筛选 |
| 项目展示 | ✅ 已完成 | 详情页 + 截图画廊 |
| 关于页面 | ✅ 已完成 | 技能 + 经历 + 教育 |
| 深色模式 | 📋 规划中 | 跟随系统偏好 |
| 全文搜索 | 📋 规划中 | Pagefind 集成 |
| RSS 订阅 | 📋 规划中 | Astro 内置支持 |

# 🔮 未来展望

- **深色模式**：跟随系统偏好自动切换
- **全文搜索**：集成 Pagefind 实现站内搜索
- **RSS 订阅**：支持 RSS 阅读器订阅
- **评论系统**：集成 Giscus 基于 GitHub Discussions
- **访问统计**：接入轻量级分析工具

# 🔗 相关链接

- 源码：[GitHub](https://github.com/1544501967/personal-site)
