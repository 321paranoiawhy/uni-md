# uni-md backend

## Installation

```bash
# install
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Lint and format

```bash
# Lint and auto fix with eslint
pnpm run lint

# Format with prettier
pnpm run format
```

## 使用 `Docker`

```bash
cd backend

# 打包镜像
docker build -t uni-md .

# 运行到容器
docker run -p 3002:3002 uni-md
```

## docs

### swagger (OpenAPI)

- `Swagger` 文档地址: `http:localhost:3002/swagger`
- `JSON` ([OpenAPI](https://www.openapis.org/) 格式) 文件地址: `http:localhost:3002/swagger-json`

上述地址可根据实际情况酌情修改:

- `http` 可替换为 `https`
- `localhost` 可替换为实际的 `IP` 地址
- `3002` 可替换为实际的**端口**
- `swagger` 为 [main.ts](./src/main.ts) 中的配置

  ```ts
  SwaggerModule.setup('swagger', app, document);
  ```

### Read More

- [auth](/backend/docs/auth.md)
- [cURL](/backend/docs/curl.md)
- [Nest](/backend/docs/nest.md)
- [PM2](/backend/docs/pm2.md)
- [healthcheck](/backend/docs/healthcheck.md)
- [MongoDB](/backend/docs/MongoDB.md)

## compression

下载依赖:

```bash
pnpm i --save compression
pnpm i --save-dev @types/compression
```

`main.ts`:

```ts
import * as compression from 'compression';

app.use(compression({ encodings: ['gzip', 'deflate'] }));
```

## License

uni-md is [MIT licensed](../LICENSE).
