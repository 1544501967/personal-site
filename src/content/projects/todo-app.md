---
title: "Todo 全栈应用"
description: "基于 React + Node.js + PostgreSQL 构建的全栈待办事项应用，支持用户认证和实时同步。"
image: "/projects/todo-app.svg"
tags: ["React", "Node.js", "PostgreSQL", "Docker"]
github: "https://github.com/1544501967/todo-app"
demo: "https://todo.example.com"
featured: true
order: 2
---

# Todo 全栈应用

![项目预览](/projects/todo-app.svg)

一个功能完整的全栈待办事项应用，采用前后端分离架构，支持用户注册登录、任务管理和数据持久化。

## ✨ 功能特性

- 🔐 用户注册 / 登录（JWT 认证）
- 📝 任务的增删改查
- 🏷️ 任务分类和标签
- 📅 截止日期提醒
- 📱 响应式设计，支持移动端
- 🐳 Docker 一键部署

## 🛠 技术栈

| 层级 | 技术 |
|------|------|
| 前端 | React 19 + TypeScript + Tailwind CSS |
| 后端 | Node.js + Express + Prisma ORM |
| 数据库 | PostgreSQL 16 |
| 部署 | Docker + Docker Compose |

## 🚀 快速开始

```bash
# 克隆项目
git clone https://github.com/1544501967/todo-app.git
cd todo-app

# 一键启动（包含前端 + 后端 + 数据库）
docker compose up -d

# 访问应用
# 前端：http://localhost:3000
# 后端 API：http://localhost:4000
```

## 📐 项目结构

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

## 🔗 相关链接

- 源码：[GitHub](https://github.com/1544501967/todo-app)
