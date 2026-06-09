import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const title = process.argv[2];

if (!title) {
  console.log('用法: npm run new:project "项目名称"');
  console.log('示例: npm run new:project "我的开源项目"');
  process.exit(1);
}

const slug = title
  .toLowerCase()
  .replace(/[^一-龥a-z0-9\s-]/g, '')
  .replace(/\s+/g, '-')
  .replace(/-+/g, '-')
  .trim();

const today = new Date().toISOString().split('T')[0];
const filePath = join('src', 'content', 'projects', `${slug}.md`);

const content = `---
title: "${title}"
description: "一句话描述项目"
image: "/projects/${slug}.png"
tags: []
category: "personal"          # personal | work | opensource
status: "in-progress"         # planning | in-progress | completed | archived
gallery:                      # 项目截图，放在 public/projects/ 下
  # - "/projects/${slug}-1.png"
  # - "/projects/${slug}-2.png"
github: ""                    # GitHub 仓库地址
demo: ""                      # 在线演示地址
featured: false               # 是否在首页展示
order: 0                      # 排序权重，越小越靠前
startDate: ${today}           # 开始日期
# endDate: 2026-06-10        # 结束日期（进行中可留空）
---

# 📋 项目背景

为什么做这个项目？它解决了什么问题？

> **一句话总结**：用一句话概括这个项目的核心价值。

# 🎯 项目目标

- 目标一
- 目标二
- 目标三

# 🛠 技术选型

| 技术 | 用途 | 选择理由 |
|------|------|----------|
| | | |

# ✨ 功能特性

- 功能一
- 功能二
- 功能三

# 📊 项目进度

| 模块 | 状态 | 说明 |
|------|------|------|
| | 🔄 进行中 | |

# 🔮 未来展望

- 规划一
- 规划二

# 🔗 相关链接

- 源码：[GitHub](https://github.com/xxx)
- 演示：[在线预览](https://xxx.com)
`;

writeFileSync(filePath, content, 'utf-8');
console.log(`✅ 已创建: ${filePath}`);
console.log(`🖼️  记得在 public/projects/ 下放置项目图片: ${slug}.png`);
console.log(`📝 图片也可以放到 gallery 数组中展示多张截图`);
