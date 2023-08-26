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
# Lint and autofix with eslint
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

### swagger (openapi)

`http:localhost:3002/swagger`

### Read More

- [auth](/backend/docs/auth.md)
- [cURL](/backend/docs/curl.md)
- [Nest](/backend/docs/nest.md)

## comression

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
