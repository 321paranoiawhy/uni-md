# Healthcheck (服务健康检查)

## 下载依赖

```bash
pnpm i --save @nestjs/terminus

pnpm i --save @nestjs/axios axios
```

## 创建 healthcheck 模块

```bash
nest g module health

# 在 server 目录下创建 healthcheck 模块
nest g module health server
```

## 源码

- [health.module.ts](../src/server/health/health.module.ts)
- [health.controller.ts](../src/server/health/health.controller.ts)
- [terminus-logger.service](../src/server/health/terminus-logger.service.ts)


## cURL

```bash
# 实际使用时须替换为真实地址
curl http://localhost:3002/uni-md/api/health
```
