import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const title = process.argv[2];

if (!title) {
  console.log('用法: npm run new:post "文章标题"');
  console.log('示例: npm run new:post "React 性能优化实践"');
  process.exit(1);
}

const slug = title
  .toLowerCase()
  .replace(/[^一-龥a-z0-9\s-]/g, '')
  .replace(/\s+/g, '-')
  .replace(/-+/g, '-')
  .trim();

const today = new Date().toISOString().split('T')[0];
const filePath = join('src', 'content', 'blog', `${slug}.md`);

const content = `---
title: "${title}"
description: ""
pubDate: ${today}
tags: []
draft: true
---

# ${title}

在这里开始写你的内容...
`;

writeFileSync(filePath, content, 'utf-8');
console.log(`✅ 已创建: ${filePath}`);
console.log(`📝 编辑文件后，将 draft: true 改为 draft: false 即可发布`);
