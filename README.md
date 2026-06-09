# Daniel's Personal Site

基于 Astro + Tailwind CSS 的个人主页，参考 exa.ai 极简设计风格。

---

## 📝 如何记录新内容

所有内容都用 **Markdown** 编写，保存在 Git 仓库中。有两种方式：

---

### 一、发布随笔（博客文章）

#### 方式 A：GitHub 网页操作（无需电脑）

1. 打开 [GitHub 仓库](https://github.com/1544501967/personal-site)
2. 进入 `src/content/blog/` 目录
3. 点击右上角 **Add file → Create new file**
4. 文件名填英文名，如 `react-performance.md`
5. 粘贴以下模板，填写你的内容：

```markdown
---
title: "你的文章标题"
description: "一句话描述文章内容"
pubDate: 2026-06-10
tags: ["标签1", "标签2"]
draft: false
---

# 文章标题

正文写在这里，支持完整 Markdown 语法。

## 代码块

​```typescript
const hello = "world";
​```

## 插入图片

![图片描述](/blog-images/你的图片.png)

## 引用

> 这是一段引用

## 列表

- 要点一
- 要点二
- 要点三
```

6. 点击 **Commit changes** → 1-2 分钟自动上线

#### 方式 B：本地命令行

```bash
# 1. 创建文章（自动生成模板）
npm run new:post "文章标题"

# 2. 编辑生成的文件
# 文件位置：src/content/blog/文章标题.md

# 3. 推送上线
git add . && git commit -m "post: 文章标题" && git push
```

#### 随笔 frontmatter 字段说明

| 字段 | 必填 | 说明 |
|------|------|------|
| `title` | ✅ | 文章标题 |
| `description` | ✅ | 一句话描述，显示在列表页 |
| `pubDate` | ✅ | 发布日期，如 `2026-06-10` |
| `tags` | ✅ | 标签数组，如 `["TypeScript", "教程"]` |
| `draft` | ❌ | `true` = 隐藏不发布，默认 `false` |
| `updatedDate` | ❌ | 更新日期，如 `2026-06-15` |

#### 在随笔中插入图片

1. 将图片上传到 `public/blog-images/` 目录（GitHub 网页上传即可）
2. 在 Markdown 中引用：

```markdown
![图片描述](/blog-images/my-image.png)
```

---

### 二、发布项目

#### 方式 A：GitHub 网页操作

1. 进入 `src/content/projects/` 目录
2. 点击 **Add file → Create new file**
3. 文件名填英文名，如 `my-app.md`
4. 粘贴以下模板：

```markdown
---
title: "项目名称"
description: "一句话描述项目"
image: "/projects/my-app.png"
tags: ["React", "TypeScript"]
github: "https://github.com/你的用户名/项目名"
demo: "https://你的演示地址.com"
featured: true
order: 1
---

# 项目名称

![项目预览图](/projects/my-app.png)

## 项目介绍

在这里描述你的项目是做什么的、解决了什么问题...

## 技术栈

| 技术 | 用途 |
|------|------|
| React | 前端框架 |
| TypeScript | 类型安全 |
| Node.js | 后端服务 |

## 功能特性

- ✨ 功能一：简述
- 🚀 功能二：简述
- 📦 功能三：简述

## 相关链接

- 源码：[GitHub](https://github.com/xxx)
- 演示：[在线预览](https://xxx.com)
```

5. **上传项目截图**：进入 `public/projects/` 目录，上传图片（文件名与 `image` 字段对应）
6. 点击 **Commit changes** → 自动部署

#### 方式 B：本地命令行

```bash
# 1. 创建项目（自动生成模板）
npm run new:project "项目名称"

# 2. 把项目截图放到 public/projects/ 目录

# 3. 编辑生成的文件，填写内容和图片路径

# 4. 推送上线
git add . && git commit -m "project: 项目名称" && git push
```

#### 项目 frontmatter 字段说明

| 字段 | 必填 | 说明 |
|------|------|------|
| `title` | ✅ | 项目名称 |
| `description` | ✅ | 一句话描述 |
| `tags` | ✅ | 技术栈标签，如 `["React", "Go"]` |
| `image` | ❌ | 项目截图路径，如 `/projects/my-app.png` |
| `github` | ❌ | GitHub 仓库链接 |
| `demo` | ❌ | 在线演示链接 |
| `featured` | ❌ | `true` = 首页精选展示，默认 `false` |
| `order` | ❌ | 排序权重，数字越小越靠前 |

---

### 三、日常操作速查

| 我想... | 怎么做 |
|---------|--------|
| 发新随笔 | 在 `src/content/blog/` 下新建 `.md` 文件 |
| 发新项目 | 在 `src/content/projects/` 下新建 `.md` + `public/projects/` 放截图 |
| 暂时隐藏文章 | 把 `draft: false` 改成 `draft: true` |
| 重新发布文章 | 把 `draft: true` 改回 `draft: false` |
| 修改个人信息 | 编辑 `src/pages/about.astro` |
| 修改社交链接 | 编辑 `src/components/SocialLinks.astro` 中的 URL |
| 修改头像/名字 | 编辑 `src/components/Header.astro` 和首页 |
| 改颜色主题 | 编辑 `src/styles/global.css` 中的 `@theme` |
| 上传随笔图片 | 放到 `public/blog-images/`，用 `![](/blog-images/xxx.png)` 引用 |
| 上传项目图片 | 放到 `public/projects/`，frontmatter 中 `image` 指向对应路径 |

---

## 🚀 完整闭环

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│   ① 想发新内容                                            │
│      ↓                                                   │
│   ② GitHub 网页编辑 或 本地 npm run new:post/project     │
│      ↓                                                   │
│   ③ git push（GitHub 网页操作会自动 commit）              │
│      ↓                                                   │
│   ④ Cloudflare Pages 自动检测变更                        │
│      ↓                                                   │
│   ⑤ 自动执行 npm run build                               │
│      ↓                                                   │
│   ⑥ 部署到全球 CDN，1-2 分钟后生效 ✅                     │
│                                                          │
│   不需要后端！不需要数据库！Markdown 就是内容！            │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

## 本地开发

```bash
npm install
npm run dev          # 启动开发服务器 → http://localhost:4321
npm run build        # 构建生产版本
npm run preview      # 预览构建结果
```

## 部署信息

- **平台**: Cloudflare Pages
- **构建命令**: `npm run build`
- **输出目录**: `dist`
- **Node 版本**: 22
- **仓库**: https://github.com/1544501967/personal-site

## 技术栈

- [Astro](https://astro.build/) - 静态网站生成器
- [Tailwind CSS](https://tailwindcss.com/) - 原子化 CSS
- [MDX](https://mdxjs.com/) - Markdown 增强
