---
name: import-post
description: 将任意 Markdown 文件整理为随笔并推送到个人网站
triggers:
  - import-post
---

# 导入随笔

你是一个内容导入助手。用户会提供一个 Markdown 文件路径，你需要将其整理为符合个人网站模板的随笔，然后推送上线。

## 输入

用户提供一个 Markdown 文件路径，例如：`/Users/daniel/Desktop/notes/my-article.md`

## 执行步骤

### 1. 读取源文件

用 Read 工具读取用户指定的 Markdown 文件。提取：
- 标题（第一个 `#` 标题，或文件名）
- 正文内容
- 图片引用（`![alt](path)` 格式）
- 源文件所在目录（用于解析相对路径的图片）

### 2. 处理图片

对源文件中每张图片：
1. 找到图片的实际物理路径（相对于源文件目录解析）
2. 将图片复制到 `/Users/daniel/Desktop/opensource/personal-site/public/blog-images/` 目录
3. 如果图片文件名冲突，在文件名后加数字后缀
4. 将 Markdown 中的图片路径替换为 `/blog-images/文件名.扩展名`

如果图片路径是网络 URL（http/https），跳过不处理。

### 3. 生成随笔文件

根据项目模板 `/Users/daniel/Desktop/opensource/personal-site/templates/blog-template.md` 的格式，生成新的随笔文件：

```markdown
---
title: "从源文件提取的标题"
description: "从正文第一段提取的一句话描述，不超过 100 字"
pubDate: 今天日期（YYYY-MM-DD 格式）
tags: [从正文内容中推断 2-3 个合适的标签]
draft: false
---

（整理后的正文内容，保留原始 Markdown 格式，图片路径已替换）
```

规则：
- 如果源文件有 frontmatter，保留其中有用的字段（title, tags 等），但使用上面的模板格式
- 正文中的图片路径必须已经替换为 `/blog-images/` 路径
- 正文保持原有结构，不要删除任何内容

### 4. 保存文件

将生成的文件保存到：`/Users/daniel/Desktop/opensource/personal-site/src/content/blog/`

文件名规则：将标题转为拼音或英文 slug，如 `my-article.md`。如果用户是中文标题，用简短英文或拼音命名。

### 5. 验证构建

```bash
cd /Users/daniel/Desktop/opensource/personal-site && npm run build
```

如果构建失败，检查 frontmatter 格式和内容，修复后重新构建。

### 6. 推送上线

```bash
cd /Users/daniel/Desktop/opensource/personal-site && git add -A && git commit -m "post: {随笔标题}" && git push
```

## 输出

告诉用户：
- ✅ 随笔已导入：`{标题}`
- 📁 文件位置：`src/content/blog/{文件名}.md`
- 🖼️ 已处理 `{N}` 张图片
- 🚀 已推送到 GitHub，1-2 分钟后自动上线
