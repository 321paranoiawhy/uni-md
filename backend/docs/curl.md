# curl

`curl` 是一款用于功能强大的命令行工具, 主要用于向 `Web` 服务器发起 `HTTP` 请求。

- [curl](https://curl.se/)
- [cURL - wikipedia](https://en.wikipedia.org/wiki/CURL)
- [curl 的用法指南 - 阮一峰](https://www.ruanyifeng.com/blog/2019/09/curl-reference.html)

## GET

不带任何参数即发送 `Get` 请求:

```bash
curl https://www.example.com
```

### -A

`-A` 参数表示用户代理标头(`User-Agent`)。

设置为 `Chrome` 浏览器:

```bash
curl -A 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36' https://www.example.com
```

不设置 `User-Agent`:

```bash
curl -A '' https://www.example.com
```

也可在 `-H` 参数中设置:

```bash
curl -H 'User-Agent: php/1.0' https://www.example.com
```

### -b

`-b` 参数用于发送 `cookie`。

```bash
# f发送单个 cookie
curl -b 'foo=bar' https://www.example.com

# 发送多个 cookie
curl -b 'foo1=bar1;foo2=bar2' https://www.example.com

# 指定 cookie 文件: cookies.txt
curl -b cookies.txt https://www.example.com
```

### -c

`-c` 参数用于写入 `cookie`。

```bash
# 将服务器返回的 cookie 写入 cookies.txt
curl -c cookies.txt https://www.example.com
```

### -d

`-d` 参数用于发送 `POST` 请求的 `body` 体, d等同于 `--data-urlencode`:

```bash
curl -d 'login=emma＆password=123' -X POST https://google.com/login

# 使用 `data.txt` 作为 `body` 体
curl -d '@data.txt' https://google.com/login
```

使用 `-d` 参数时默认请求方法为 `POST`, 因此 `-X POST` 也可省略。同时, `HTTP` 请求也会自动加上标头: `Content-Type : application/x-www-form-urlencoded`。

### -e

`-e` 参数用于设置 `HTTP` 请求的标头 `Referer`, 表示请求的来源:

```bash
# Referer 标头设置为 https://google.com?q=example
curl -e 'https://google.com?q=example' https://www.example.com
```

### -F

`-F` 参数用于向服务器发送(上传)二进制文件。

```bash
curl -F 'file=@photo.png' https://google.com/profile


# 同时指定文件 MIME 类型
curl -F 'file=@photo.png;type=image/png' https://google.com/profile

# 指定文件(别)名, 本地是 `photo.png`, 服务器接收的是 `me.png`
curl -F 'file=@photo.png;filename=me.png' https://google.com/profile
```
