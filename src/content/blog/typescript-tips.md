---
title: "TypeScript 实用技巧"
description: "分享一些在日常开发中常用的 TypeScript 技巧和最佳实践。"
pubDate: 2026-06-08
tags: ["TypeScript", "前端", "教程"]
---

# TypeScript 实用技巧

在日常开发中，掌握一些 TypeScript 技巧可以大幅提升开发效率和代码质量。

## 1. 使用 satisfies 操作符

`satisfies` 允许你验证类型而不改变推断出的类型：

```typescript
const config = {
  port: 3000,
  host: 'localhost',
} satisfies Record<string, string | number>;
```

## 2. 模板字面量类型

利用模板字面量创建精确的字符串类型：

```typescript
type EventName = `on${Capitalize<string>}`;
// "onClick" | "onHover" | ...
```

## 3. 使用 const 断言

```typescript
const ROUTES = {
  home: '/',
  about: '/about',
  blog: '/blog',
} as const;
```

这些技巧可以帮助你写出更安全、更优雅的代码。
