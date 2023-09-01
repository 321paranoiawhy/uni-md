# Nest

## 创建 Resource

- [Generating a new resource](https://docs.nestjs.com/recipes/crud-generator#generating-a-new-resource)

```bash
nest g resource file server

# 不生成 test 文件
nest g resource file server --no-spec
```

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

## 路由鉴权

`auth.guard.ts`:

```ts
// auth.guard.ts

import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core/services';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { IS_PUBLIC_KEY } from './decorators/public_decorators';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      // 💡 See this condition
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    console.log(token);

    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET || 'jwt-secret',
      });
      // 💡 We're assigning the payload to the request object here
      // so that we can access it in our route handlers
      request['user'] = payload;
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
```

`controller` 局部注册:

```ts
// auth.controller.ts

@Controller('auth')
@UseGuards(AuthsGuard)
export class AuthController {}
```

单个接口注册:

```ts
@UseGuards(AuthGuard)
@Get('public')
privateAPI() {
  return {};
}
```

`main.ts` 全局注册:

```ts
// main.ts

// 全局路由守卫
app.useGlobalGuards(new AuthGuard(new JwtService(), new Reflector()));
```

如果全局注册了 `AuthGuard`, 但仍有部分接口无需鉴权(可直接对外暴露), 则可使用 `@Public()` 装饰器:

```ts
// auth/decorators/public_decorators.ts

// https://github.com/nestjs/nest/blob/master/sample/19-auth-jwt/src/auth/decorators/public.decorator.ts
import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
```

标记某个接口为 `@Public()`:

```ts

@Public()
@Get()
publicAPI() {
  return {};
}
```
