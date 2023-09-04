# uni-md

Universal markdown rendered in web, support all markdown formats, such as [CommonMark](https://commonmark.org/), [GFM](https://github.github.com/gfm/), [GLFM](https://docs.gitlab.com/ee/user/markdown.html) and so on...

[uni-md 地址, just have fun](https://321paranoiawhy.github.io/uni-md/)

原则:

- 单一职责: 仅一个页面, 仅展示单一的 `markdown` 文件, 仅支持纯文本和网络媒体资源(如网络图片、音频、视频等), 不支持本地图片、本地音频、本地视频等。

待支持的不同`markdown` 格式的笔记软件:

- [Obsidian](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax)
- [Typora](https://support.typora.io/Markdown-Reference/)
- [语雀](https://www.yuque.com/yuque/gpvawt/lnobo9)
- [Logseq](https://docs.logseq.com/#/page/markdown)
- [Notion](https://www.markdownguide.org/tools/notion/)
- [Google markdown  style guide](https://github.com/google/styleguide/blob/gh-pages/docguide/style.md)

## frontend

```bash
pnpm install
pnpm run dev

# 或者
npx nuxi dev --dotenv .env.local
npx nuxi dev --dotenv .env.production
```

客户端链接: `http://localhost:3001/uni-md/`

### frontend 技术栈

- Nuxt.js
- Element-Plus
- Pinia
- Nuxt-Icon
- SASS (SCSS)
- TypeScript (TS)
- [i18n](https://nuxt.com/modules/i18n)
- [更多](/frontend/README.md)

### frontend 环境变量配置

环境变量配置:

- 本地开发 [frontend/.env.local](./frontend/.env.local/)
- 生产环境 [frontend/.env.production](./frontend/.env.production/)

## backend

```bash
pnpm install

# 无热更新
pnpm run start
# 热更新
pnpm run start:dev 
```

### backend 技术栈

- Nest.js
- Mongodb
- 文件 Gzip 压缩
- Swagger 文档
- Healthcheck
- [更多](/backend/README.md)

服务端链接: `http://localhost:3002/uni-md/api`

### backend 环境变量配置

环境变量配置位于 [backend/env](./backend/env/), 分三个文件:

- `.env.shared`, 开发环境和线上环境共用环境变量
- `.env.development`, 开发环境专属环境变量
- `.env.production`, 生产环境专属环境变量

### 配置 Mongodb
