# auth

## Google

下载 [google-auth-library](https://github.com/googleapis/google-auth-library-nodejs):

```bash
pnpm install google-auth-library
```

```ts
// src/auth/auth.service.ts

  async authWithGoogle(credential: string): Promise<string> {
    const ticket = await this.googleAuthClient.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    console.log(`google credential payload 解析结果: ${ticket.getPayload()}`);

    const userData = {
      name: ticket.getPayload()?.name,
      email: ticket.getPayload()?.email,
      image: ticket.getPayload()?.picture,
    };
    const jwt = await this.jwtService.signAsync(userData);

    return jwt;
  }

```

## GitHub
