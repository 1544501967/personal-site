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

const filePath = join('src', 'content', 'projects', `${slug}.md`);

const content = `---
title: "${title}"
description: "项目简短描述"
image: "/projects/${slug}.png"
tags: []
github: ""
demo: ""
featured: false
order: 0
---

# ${title}

## 项目介绍

在这里描述你的项目...

## 技术栈

-

## 功能特性

-
`;

writeFileSync(filePath, content, 'utf-8');
console.log(`✅ 已创建: ${filePath}`);
console.log(`🖼️  记得在 public/projects/ 下放置项目图片: ${slug}.png`);
