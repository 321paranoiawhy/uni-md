# Nest

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
