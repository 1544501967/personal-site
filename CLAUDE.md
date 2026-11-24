# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev              # 开发服务器 http://localhost:4321
npm run build            # 生产构建到 dist/
npm run preview          # 预览构建结果
npm run new:post "标题"   # 新建随笔（默认 draft: true）
npm run new:project "名称" # 新建项目页
```

Node >= 22.12.0（`package.json` 的 `engines` 与 Cloudflare Pages 部署均为 Node 22）。

`new:post` / `new:project` 直接在脚本里内联模板，**不读取** `templates/` 下的文件；`templates/blog-template.md`、`templates/project-template.md` 只供手动创建或 `.omc/skills/import-*.md` 导入流程参考。

## Architecture

**Astro 6 静态站**，Tailwind CSS v4 + MDX。内容全部是 Markdown 文件 —— 没有数据库、没有 CMS、没有服务端运行时。

### Content Flow

```
src/content/{blog,projects}/*.md
  → src/content.config.ts（glob loader + Zod 校验）
  → 页面中的 getCollection() / getStaticPaths()
  → dist/ 中的静态 HTML
```

往 `src/content/blog/` 或 `src/content/projects/` 放一个 `.md` 文件就会自动生成路由。frontmatter 不合法会直接导致构建失败（Zod schema 强制校验）。

### Key Files

| 文件 | 作用 |
|------|------|
| `src/content.config.ts` | Blog / Projects 两个 collection 的 schema。**新增 frontmatter 字段时必须同步修改这里。** |
| `src/layouts/BaseLayout.astro` | HTML 外壳（head、字体、密码门、阅读进度条、滚动淡入脚本、Header、Footer）。所有页面都继承它。 |
| `src/styles/global.css` | Tailwind v4 `@theme` 设计 token（颜色、字体）+ 组件类（`.card`、`.btn-primary`、`.btn-secondary`、`.tag`、`.prose-custom`、`.reveal`）。 |
| `src/components/Header.astro` | 顶部导航：首页 / 关于 / 项目 / 随笔。 |
| `src/components/Footer.astro` | 页脚品牌与版权信息。 |
| `src/pages/blog/[slug].astro` | 随笔详情，用 `<Content />` 在 `.prose-custom` 内渲染 Markdown。 |
| `src/pages/projects/[slug].astro` | 项目详情：封面图、图库、状态徽章（`statusMap`）、分类（`categoryMap`）、渲染 Markdown。 |

### Content Collections

**Blog**（`src/content/blog/`）：`title`、`description`、`pubDate`、`updatedDate?`、`tags[]`、`draft`。
`draft: true` 的文章默认不会发布，写完改成 `false`。

**Projects**（`src/content/projects/`）：`title`、`description`、`image?`、`tags[]`、`category?`（`personal` | `work` | `opensource`，默认 `personal`）、`status?`（`planning` | `in-progress` | `completed` | `archived`，默认 `in-progress`）、`gallery[]`、`github?`、`demo?`、`featured`、`order`、`startDate?`、`endDate?`。

### 站点全局能力（BaseLayout 内联脚本，不走组件）

- **密码门**（`#site-gate`）：全站入口密码锁，密码以明文写在 `BaseLayout.astro` 的内联脚本里，用 `sessionStorage.site-unlocked` 记住会话内解锁状态。它只是前端遮挡，**不是真正的访问控制**，别往里放敏感内容。
- **阅读进度条**（`#scroll-progress`）：顶部随滚动变化的进度条，主色 `#1E40ED`。
- **滚动淡入**：任何带 `.reveal` 类的元素进入视口时加 `.visible`，由 BaseLayout 里统一的 IntersectionObserver 处理，各页面只需给元素加 `class="reveal"`。

⚠️ 密码门和进度条使用内联 `<style is:global>`，颜色是**硬编码**的，不跟 `@theme` token 走；改主色时需要手动同步这两处。

### Design System

- 主色：`#1E40ED`（品牌蓝），由 `--color-primary` 定义，浅/深变体：`--color-primary-light`、`--color-primary-dark`。
- 中性色：`--color-bg`、`--color-bg-alt`、`--color-text`、`--color-text-muted`、`--color-border`。
- 字体：Inter（正文）+ JetBrains Mono（代码）。
- 风格：极简、干净、大量留白。
- 品牌名：**Alzcoms**（页脚、首页大标题、密码门标题）。

### Static Assets

- 随笔图片：`public/blog-images/` → `![](/blog-images/xxx.png)`
- 项目图片：`public/projects/` → frontmatter 里写 `/projects/xxx.png`
- `public/memories/` 是历史遗留资源，目前没有任何页面引用它。

## Conventions

- **颜色一律用 token**：组件和页面里用 `text-primary`、`border-border`、`bg-bg-alt` 这类 Tailwind token 类，不要在 `.astro` 文件里硬编码十六进制色（唯一例外是 BaseLayout 中的密码门/进度条内联样式）。
- **新增 frontmatter 字段**：先改 `src/content.config.ts`，再改使用该字段的页面，最后才写内容文件。
- **新增页面**：必须通过 `BaseLayout` 渲染，否则会丢失密码门、进度条和淡入效果。
- **状态 / 分类的中文文案**：改在 `src/pages/projects/[slug].astro` 的 `statusMap` / `categoryMap` 里。
- **不提交生成物**：`dist/`、`.astro/` 已在 `.gitignore` 中；`.omc/` 的状态文件也应保持忽略。

## Deployment

推送 GitHub `main` 分支后 Cloudflare Pages 自动部署。构建命令 `npm run build`，输出目录 `dist/`，Node 22。

## Language

- 站点所有面向用户的文案用中文（zh-CN）；`<html lang="zh-CN">`。
- 代码标识符（变量、函数、文件名、slug）用英文。
- 代码注释优先中文。
