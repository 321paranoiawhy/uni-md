# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
# Make sure you have `shamefully-hoist=true` in `.npmrc` before running pnpm install
pnpm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

[清理文件](https://nuxt.com/docs/api/commands/cleanup):

```bash
npx nuxi clean|cleanup
```

可在 `nuxt.config.ts` 中配置端口:

```ts
export default defineNuxtConfig({
  // https://nuxt.com/docs/api/configuration/nuxt-config#devserver
  devServer: { host: "0.0.0.0", port: 3001 },
});
```

## Configuration

- [配置端口](https://nuxt.com/docs/api/configuration/nuxt-config#port)
- [配置 baseURL](https://nuxt.com/docs/api/configuration/nuxt-config#baseurl)

### 配置 element-plus

- [Element Plus module for Nuxt](https://nuxt.com/modules/element-plus)
- [element-plus-nuxt](https://github.com/element-plus/element-plus-nuxt)

```bash
pnpm install element-plus @element-plus/nuxt -D
```

### 配置 css 预处理器

[Preprocessors support](https://nuxt.com/docs/getting-started/styling#preprocessors-support)

```bash
pnpm install sass -D
```

### 配置 Nuxt Icon

- [Nuxt Icon](https://nuxt.com/modules/icon)
- [icones](https://icones.js.org/)

```bash
pnpm install nuxt-icon -D
```

### 配置 typescript

[typescript](https://nuxt.com/docs/api/configuration/nuxt-config#typescript)

使用 `pnpm` 安装 `devDependencies` 依赖:

```bash
pnpm install vue-tsc -D
pnpm install typescript -D
```

运行以下命令生成 `.nuxt/nuxt.d.ts` 和 `.nuxt/tsconfig.json`:

```bash
pnpm nuxi dev
```

> 如果未按上述命令执行, 则不会生成类型文件, IDE 会报类型错误。

[手动执行类型检查](https://nuxt.com/docs/api/commands/typecheck):

```bash
npx nuxi typecheck [--log-level] [rootDir]
```

### 配置环境变量

- [.env File](https://nuxt.com/docs/guide/directory-structure/env)

```bash
npx nuxi dev --dotenv .env.local
```

### 配置 supabase

```bash
pnpm install @nuxtjs/supabase @supabase/auth-ui-shared @nuxtbase/auth-ui-vue -D
```

[配置 GitHub](https://supabase.com/docs/guides/auth/social-login/auth-github)

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

`build` 成功后会在根目录下生成 `.output` 文件夹, 可使用以下命令本地查看:

```bash
node .output/server/index.mjs
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```
