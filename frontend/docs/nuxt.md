# Nuxt

## 区分客户端和服务端

```ts
// 是否为服务端
console.log(process.server);

// 是否为客户端
// onMounted 仅在客户端运行
// 客户端才有 window, localStorage 等 API
console.log(process.client);
```

[ClientOnly](https://nuxt.com/docs/api/components/client-only)
