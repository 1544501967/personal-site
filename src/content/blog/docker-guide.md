---
title: "Docker 入门实践指南"
description: "从零开始学习 Docker，涵盖安装、镜像、容器、Dockerfile 等核心概念和实操。"
pubDate: 2026-06-09
tags: ["Docker", "DevOps", "教程"]
---

# Docker 入门实践指南

Docker 是现代开发中不可或缺的工具，本文将带你从零开始掌握它的核心用法。

## 为什么需要 Docker

你是否遇到过这些问题：

- "在我电脑上能跑啊？" — 环境不一致导致的问题
- 每次换电脑都要重新配置开发环境
- 部署流程复杂，容易出错

Docker 通过**容器化**技术解决了这些问题 — 把应用和它的运行环境打包在一起，保证在任何地方都能一致运行。

## 核心概念

| 概念 | 说明 |
|------|------|
| **镜像 (Image)** | 应用的只读模板，类似于安装包 |
| **容器 (Container)** | 镜像的运行实例，类似于正在运行的程序 |
| **Dockerfile** | 构建镜像的脚本文件 |
| **Docker Hub** | 镜像仓库，类似于 GitHub |

## 安装 Docker

```bash
# macOS（推荐使用 Docker Desktop）
brew install --cask docker

# 验证安装
docker --version
docker run hello-world
```

## 第一个 Dockerfile

以一个 Node.js 应用为例：

```dockerfile
# 基础镜像
FROM node:22-alpine

# 设置工作目录
WORKDIR /app

# 复制依赖文件
COPY package*.json ./
RUN npm install

# 复制源代码
COPY . .

# 暴露端口
EXPOSE 3000

# 启动命令
CMD ["npm", "start"]
```

## 常用命令速查

```bash
# 构建镜像
docker build -t my-app .

# 运行容器
docker run -p 3000:3000 my-app

# 查看运行中的容器
docker ps

# 停止容器
docker stop <container-id>

# 查看所有镜像
docker images
```

## Docker Compose

当项目需要多个服务（如 Web + 数据库）时，用 Docker Compose 编排：

```yaml
version: "3.8"
services:
  web:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - db
  db:
    image: postgres:16
    environment:
      POSTGRES_PASSWORD: secret
    volumes:
      - pgdata:/var/lib/postgresql/data

volumes:
  pgdata:
```

```bash
# 一键启动所有服务
docker compose up -d
```

## 小结

> Docker 的核心理念是 **Build once, Run anywhere**。

掌握 Docker 能让你在开发、测试、部署全流程中受益。建议从一个小项目开始实践，逐步熟悉日常操作。
