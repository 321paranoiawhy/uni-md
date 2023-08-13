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
