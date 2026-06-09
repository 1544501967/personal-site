# Daniel's Personal Site

基于 Astro + Tailwind CSS 的个人主页，参考 exa.ai 极简设计风格。

## 📝 如何记录新内容

### 随笔（博客文章）

**方法一：GitHub 网页操作（手机/任何电脑）**

1. 打开 [GitHub 仓库](https://github.com/1544501967/personal-site)
2. 进入 `src/content/blog/` 目录
3. 点击右上角 **Add file → Create new file**
4. 文件名填 `文章英文名.md`（如 `react-performance.md`）
5. 粘贴以下模板并填写内容：

```markdown
---
title: "你的文章标题"
description: "一句话描述"
pubDate: 2026-06-10
tags: ["标签1", "标签2"]
draft: false
---

# 文章标题

正文写在这里，支持完整 Markdown 语法...

## 代码块

​```typescript
const hello = "world";
​```

## 引用

> 这是一段引用
```

6. 点击 **Commit changes** → 等 1-2 分钟自动上线

**方法二：本地命令（更快）**

```bash
npm run new:post "文章标题"
# 自动生成模板文件，编辑后：
git add . && git commit -m "post: 文章标题" && git push
```

### 项目展示

**GitHub 网页操作：**

1. 进入 `src/content/projects/` 目录
2. 点击 **Add file → Create new file**
3. 文件名填 `项目英文名.md`
4. 粘贴模板：

```markdown
---
title: "项目名称"
description: "一句话描述项目"
image: "/projects/项目英文名.png"
tags: ["React", "TypeScript"]
github: "https://github.com/你的项目地址"
demo: "https://演示地址.com"
featured: true
order: 1
---

# 项目名称

项目详细介绍...

## 技术栈

- React
- TypeScript

## 功能特性

- 功能1
- 功能2
```

5. 如果有项目截图，在 `public/projects/` 下上传图片（文件名与上面 `image` 字段对应）
6. **Commit changes** → 自动部署

**本地命令：**

```bash
npm run new:project "项目名称"
# 编辑后：
git add . && git commit -m "project: 项目名称" && git push
```

### 常用操作速查

| 我想... | 操作 |
|---------|------|
| 发新文章 | `src/content/blog/` 下新建 `.md` |
| 发新项目 | `src/content/projects/` 下新建 `.md` |
| 暂时隐藏某篇文章 | 把 `draft: false` 改成 `draft: true` |
| 修改个人信息 | 编辑 `src/pages/about.astro` |
| 修改社交链接 | 编辑 `src/components/SocialLinks.astro` 的 URL |
| 修改头像/名字 | 编辑 `src/components/Header.astro` 和首页 |
| 改颜色主题 | 编辑 `src/styles/global.css` 中的 `@theme` |
| 上传项目图片 | 往 `public/projects/` 放图片 |

## 🚀 完整闭环

```
写内容 → git push（或 GitHub 网页 Commit）
       → Cloudflare Pages 自动构建
       → 全球 CDN 部署
       → 1-2 分钟后网站更新 ✅
```

**不需要后端、不需要数据库** —— 所有内容都是 Git 仓库里的 Markdown 文件。

## 本地开发

```bash
npm install
npm run dev          # 启动 → http://localhost:4321
npm run build        # 构建
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
