---
name: import-project
description: 将任意 Markdown 文件整理为项目展示并推送到个人网站
triggers:
  - import-project
---

# 导入项目

你是一个内容导入助手。用户会提供一个 Markdown 文件路径，你需要将其整理为符合个人网站模板的项目展示，然后推送上线。

## 输入

用户提供一个 Markdown 文件路径，例如：`/Users/daniel/Projects/my-app/README.md`

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
2. 将第一张图片（或最有代表性的截图）作为封面图
3. 其余图片作为 gallery 截图
4. 所有图片复制到 `/Users/daniel/Desktop/opensource/personal-site/public/projects/` 目录
5. 如果图片文件名冲突，在文件名后加数字后缀
6. 将 Markdown 中的图片路径替换为 `/projects/文件名.扩展名`

如果图片路径是网络 URL（http/https），跳过不处理。

### 3. 生成项目文件

根据项目模板 `/Users/daniel/Desktop/opensource/personal-site/templates/project-template.md` 的格式，生成新的项目文件。

需要将源内容映射到模板的各个章节：

| 源内容 | 映射到模板章节 |
|--------|---------------|
| 项目介绍 / 简介 | `# 📋 项目背景` |
| 目标 / 功能 | `# 🎯 项目目标` |
| 技术栈 / 依赖 | `# 🛠 技术选型` |
| 功能列表 | `# ✨ 功能特性` |
| 目录结构 | `# 📐 项目结构` |
| TODO / 路线图 | `# 📊 项目进度` + `# 🔮 未来展望` |
| 链接 | `# 🔗 相关链接` |

frontmatter 规则：
```yaml
---
title: "从源文件提取的标题"
description: "从正文第一段提取的一句话描述"
image: "/projects/{第一张图片文件名}"    # 封面图
tags: [从正文推断技术栈标签]
category: "personal"                       # 默认 personal，除非用户指定
status: "in-progress"                      # 默认 in-progress
gallery:                                   # 除封面外的其他截图
  - "/projects/截图1.png"
  - "/projects/截图2.png"
github: "用户提供的 GitHub 地址，没有则留空"
demo: "用户提供的演示地址，没有则留空"
featured: false
order: 0
startDate: 今天日期
---
```

**重要**：
- 如果源文件内容无法完美对应到某个章节，放在最合适的章节中
- 不要丢弃任何源内容，全部保留
- 正文中的图片路径必须已经替换为 `/projects/` 路径
- 如果用户在命令中提供了额外信息（如 github 地址、category），使用用户提供的信息

### 4. 保存文件

将生成的文件保存到：`/Users/daniel/Desktop/opensource/personal-site/src/content/projects/`

文件名规则：用项目英文名或拼音命名，如 `my-app.md`。

### 5. 验证构建

```bash
cd /Users/daniel/Desktop/opensource/personal-site && npm run build
```

如果构建失败，检查 frontmatter 格式和内容，修复后重新构建。

### 6. 推送上线

```bash
cd /Users/daniel/Desktop/opensource/personal-site && git add -A && git commit -m "project: {项目标题}" && git push
```

## 输出

告诉用户：
- ✅ 项目已导入：`{标题}`
- 📁 文件位置：`src/content/projects/{文件名}.md`
- 🖼️ 封面图：`{封面图文件名}`
- 📸 已处理 `{N}` 张截图到 gallery
- 🚀 已推送到 GitHub，1-2 分钟后自动上线
