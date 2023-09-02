# PM2

- [PM2](https://pm2.keymetrics.io/)
- [PM2 -npm](https://www.npmjs.com/package/pm2)

`PM2` 优势:

- 后台运行, 关闭窗口后仍可继续运行

## 下载

```bash
pnpm install -g pm2
```

## 查看帮助

```bash
pm2 --help
```

## 查看版本

```bash
pm2 --version
pm2 -v
pm2 -V
```

## 启动

先打包:

```bash
pnpm run build

# pnpm run start:build
```

将生成的 `dist` 文件夹上传至服务器后, 使用 `PM2` 运行:

```bash
# 切至 dist 目录后运行
cd dist/src
pm2 start ./main.js


# 指定正确的 main.js 目录并运行
pm2 start ./dist/src/main.js

# 指定应用程序名称 <app-name>
pm2 start ./dist/src/main.js --name="uni-md"
```

注意这里打包后的入口文件路径为 `dist/src/main.js`。

### 使用 json 配置文件启动

```bash
# 假定当前目录下存在 pm2.json
pm2 start pm2.json
```

`pm2.json` 示例:

```json

```

## 查看日志

```bash
# 查看所有应用程序日志
pm2 logs

# 查看指定应用程序日志
# 可指定 app-name 或 id
pm2 logs <app-name>/<id>
```

## 查看所有运行中的应用程序

```bash
pm2 list
```

## 停止运行

```bash
# 停止所有应用程序
pm2 stop all

# 停止指定 id 的应用程序
# 如: pm2 stop 0
pm2 stop <id>
```

## 监控

```bash
# monitor
pm2 monit
```

## 重载和重启

```bash
# 重载所有应用程序
pm2 reload all
# 重载指定 id
pm2 reload 0
# 重载指定名称的应用程序
pm2 reload uni-md

# 重启
pm2 restart all
pm2 restart 0
pm2 reload uni-md
```

## 删除

```bash
pm2 delete all
pm2 delete 0
pm2 delete uni-md
```

## 设置开机自启

```bash
pm2 startup

# 保存所有应用程序
pm2 save
```

## 开启多线程

```bash
```

## PM2 可视化工具


### pm2-web 监控

下载 `pm2-web`:

```bash
pnpm install -g pm2-web
```

注意:[pm2-web Deprecation warning](https://github.com/achingbrain/pm2-web/tree/master)

### Guv'nor

- [Guv'nor - GitHub](https://github.com/tableflip/guvnor)
- [Guv'nor - npm](https://www.npmjs.com/package/guvnor)
