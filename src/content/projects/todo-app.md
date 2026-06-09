---
title: "Todo 全栈应用"
description: "基于 React + Node.js + PostgreSQL 构建的全栈待办事项应用，支持用户认证和实时同步。"
image: "/projects/todo-app.svg"
tags: ["React", "Node.js", "PostgreSQL", "Docker"]
category: "personal"
status: "completed"
gallery:
  - "/projects/todo-app.svg"
github: "https://github.com/1544501967/todo-app"
demo: "https://todo.example.com"
featured: true
order: 2
startDate: 2026-03-01
endDate: 2026-05-15
---

# 📋 项目背景

日常开发中经常需要管理各种任务，市面上的 Todo 应用要么功能过于复杂，要么无法满足个性化的需求。于是决定从零搭建一个全栈待办事项应用，既能解决自己的实际需求，又能作为全栈开发的练手项目。

> **一句话总结**：为了更好地管理日常任务，同时实践全栈开发技能。

# 🎯 项目目标

- 构建一个功能完整、体验流畅的待办事项应用
- 前后端分离架构，实践 RESTful API 设计
- 支持用户认证，数据安全持久化
- Docker 容器化，一键部署

# 🛠 技术选型

| 层级 | 技术 | 选择理由 |
|------|------|----------|
| 前端 | React 19 + TypeScript | 类型安全，组件化开发 |
| 样式 | Tailwind CSS | 快速构建，一致性设计 |
| 后端 | Node.js + Express | 轻量高效，生态丰富 |
| 数据库 | PostgreSQL | 可靠的关系型数据库 |
| ORM | Prisma | 类型安全的数据库操作 |
| 部署 | Docker Compose | 一键启动全部服务 |

# ✨ 功能特性

- 🔐 用户注册 / 登录（JWT 认证）
- 📝 任务的增删改查
- 🏷️ 任务分类和标签
- 📅 截止日期和提醒
- 📱 响应式设计，适配移动端
- 🐳 Docker 一键部署

# 📐 项目结构

```
todo-app/
├── client/           # React 前端
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── pages/
│   └── package.json
├── server/           # Node.js 后端
│   ├── src/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── prisma/
│   └── package.json
├── docker-compose.yml
└── README.md
```

# 📊 项目进度

| 模块 | 状态 | 说明 |
|------|------|------|
| 用户认证 | ✅ 已完成 | JWT + 刷新令牌 |
| 任务管理 | ✅ 已完成 | CRUD + 分类标签 |
| 截止日期 | ✅ 已完成 | 邮件提醒 |
| 移动端适配 | ✅ 已完成 | 响应式布局 |
| 数据导出 | 🔄 进行中 | CSV / JSON 导出 |
| 协作功能 | 📋 规划中 | 团队共享任务 |

# 🔮 未来展望

- **数据可视化**：添加任务完成情况的图表统计
- **协作功能**：支持团队共享任务列表
- **PWA 支持**：离线使用 + 推送通知
- **移动端 App**：React Native 开发原生应用

# 🔗 相关链接

- 源码：[GitHub](https://github.com/1544501967/todo-app)
- 演示：[在线预览](https://todo.example.com)
