# uni-md

Universal markdown rendered in web, support all markdown formats, such ad GFM, GLFM and so on...

原则:

- 单一职责: 仅一个页面, 仅展示单一的 `markdown` 文件, 仅支持纯文本和网络媒体资源(如网络图片、音频、视频等), 不支持本地图片、本地音频、本地视频等。

## frontend

### frontend 技术栈

- Nuxt.js
- Element-Plus
- Iconify
- SCSS

```bash
pnpm install
pnpn run dev
```

客户端链接: `http://localhost:3001/`

## backend

### backend 技术栈

- Nest.js
- Mongodb

服务端链接: `http://localhost:3002/`

### 环境变量配置

环境变量配置位于 [backend/env](./backend/env/)

### 配置 Mongodb
