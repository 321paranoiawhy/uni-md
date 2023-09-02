# 多环境管理

## NODE_ENV

`NODE_ENV` 可选值:

- `development`
- `production`

## 环境变量文件

- `env.example`: 环境变量配置示例
- `env.development`: 用于在开发环境中配置环境变量
- `env.production`: 用于在生产环境中配置环境变量
- `env.shared`: 各环境共用环境变量, 一经设定, 不建议轻易更改

## 配置 package.json

```json
// package.json

  "scripts": {
    "build": "nest build",
    "format": "prettier --write \"src/**/*.ts\" \"test/**/*.ts\"",
    "start": "nest start",
    "start:dev": "NODE_ENV=development nest start --watch",
    "start:debug": "nest start --debug --watch",
    "start:prod": "NODE_ENV=production node dist/main",
    "lint": "eslint \"{src,apps,libs,test}/**/*.ts\" --fix",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:cov": "jest --coverage",
    "test:debug": "node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand",
    "test:e2e": "jest --config ./test/jest-e2e.json"
  },
```

`Windows` 用户直接使用 `NODE_ENV=<ENV_VALUE>` 会报错:

  'NODE_ENV' 不是内部或外部命令，也不是可运行的程序或批处理文件。

须安装 `cross-env`:

```bash
# 全局安装, 如在服务器上可全局安装
pnpm install -g cross-env

# 作为开发依赖局部安装
pnpm install -d cross-env
```

`package.json` 增加 `cross-env` 前置命令:

```json
// package.json

  "scripts": {
    "build": "nest build",
    "format": "prettier --write \"src/**/*.ts\" \"test/**/*.ts\"",
    "start": "nest start",
    "start:dev": "cross-env NODE_ENV=development nest start --watch",
    "start:debug": "nest start --debug --watch",
    "start:prod": "cross-env NODE_ENV=production node dist/main",
    "lint": "eslint \"{src,apps,libs,test}/**/*.ts\" --fix",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:cov": "jest --coverage",
    "test:debug": "node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand",
    "test:e2e": "jest --config ./test/jest-e2e.json"
  },
```
