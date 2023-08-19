# Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

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

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
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

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## 创建 Module

[起步](https://juejin.cn/post/6885751452015263758)

在 `src/server` 目录下生成 一个 `file` 模块:

```bash
nest g module file server
```

输出:

> CREATE src/server/file/file.module.ts (81 bytes)
> UPDATE src/app.module.ts (458 bytes)

## 创建 Controller

```bash
nest g controller file server
```

输出:

> CREATE src/server/file/file.controller.ts (97 bytes)
> CREATE src/server/file/file.controller.spec.ts (478 bytes)
> UPDATE src/server/file/file.module.ts (166 bytes)

## 创建 Provider

```bash
nest g service file server
```

输出:

> CREATE src/server/file/file.service.ts (88 bytes)
> CREATE src/server/file/file.service.spec.ts (446 bytes)
> UPDATE src/server/file/file.module.ts (241 bytes)

## 配置 JWT

- [@nestjs/jwt](https://github.com/nestjs/jwt)
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)

```bash
pnpm install --save @nestjs/jwt
```

使用 `curl` 发起请求:

```bash
curl -X POST http://localhost:3002/uni-md/api/auth/login -d '{"username": "john", "password": "changeme"}' -H "Content-Type: application/json"
```

使用 `Invoke-WebRequest` 在 `Powershell` 中发起登录请求:

```powershell
Invoke-WebRequest `
    -Uri "http://localhost:3002/uni-md/api/auth/login" `
    -Headers @{"Content-Type" = "application/json"} `
    -Body '{"username": "john", "password": "changeme"}' `
    -Method Post
```

解析 `JWT`:

```powershell
# 注意替换为实际的 JWT
Invoke-WebRequest `
    -Uri "http://localhost:3002/uni-md/api/auth/profile" `
    -Headers @{"Authorization" = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJUb2RvOiB1c2VyIGlkIiwidXNlcm5hbWUiOiJqb2huIiwicGFzc3dvcmQiOiJjaGFuZ2VtZSIsImlhdCI6MTY5MjQ0NDQ1MSwiZXhwIjoxNjkzMDQ5MjUxfQ.M60AVeiELrGMuR0VTabORs0u5LW14jHDKaY7r2meU20"} `
    -Method Get
```
