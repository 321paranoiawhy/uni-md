import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';
import {
  AuthData,
  GitHubUser,
  GithubConfig,
  GithubPayload,
} from './auth.interface';
import { JwtService } from '@nestjs/jwt';

import { OAuth2Client } from 'google-auth-library';
import { Login } from 'types';

@Injectable()
export class AuthService {
  githubConfig: GithubConfig | undefined;
  constructor(
    private configService: ConfigService,
    private jwtService: JwtService,
    private googleAuthClient: OAuth2Client = new OAuth2Client(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
    ),
  ) {
    this.githubConfig = this.configService.get<GithubConfig>('GitHub');
  }

  /**
   * 由 code 获取 access_token
   *
   * https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps#2-users-are-redirected-back-to-your-site-by-github
   * @param code 前端授权 GitHub 登录后返回的 code, eg: `https://321paranoiawhy.github.io/uni-md/?code=<CODE>`
   * @returns GithubAuthResponse
   *
   */
  authWithGitHub(code: string) {
    console.log(this.githubConfig, code);

    // 以查询参数形式传参
    return axios.post('https://github.com/login/oauth/access_token', null, {
      params: {
        client_id: this.githubConfig?.CLIENT_ID,
        client_secret: this.githubConfig?.CLIENT_SECRET,
        redirect_uri: this.githubConfig?.REDIRECT_URI,
        code: code,
      } as GithubPayload,
      headers: { Accept: 'application/json' },
    });
  }

  /**
   * 由 access_token 获取 GitHub 用户信息
   *
   * @param access_token
   * @returns
   */
  async obtainUserInformation(access_token: string) {
    console.log('access_token: ', access_token);

    const response = await axios.get('https://api.github.com/user', {
      headers: {
        Accept: 'application/json',
        // Authorization: `Bearer ${access_token}`,
        // ⚠ 这里前缀是 [token ], 而非 [Bearer ]
        Authorization: `token ${access_token}`,
      },
    });
    if (response.status == 200) {
      const { login, avatar_url, email } = response.data as GitHubUser;
      const payload = { username: login, avatar_url: avatar_url, email: email };

      const jwt = await this.jwtService.signAsync(payload);
      console.log(`generate jwt  for user: ${response.data.login}`, jwt);
      return jwt;
    }
  }

  login(data: Login) {
    // const user = await this.usersService.findOne(username);
    // if (user?.password !== password) {
    //   throw new UnauthorizedException();
    // }
    const payload: any = { sub: 'TODO sub' };
    payload.password = data.password;

    if (data.type === 'username') {
      payload.username = data.username;
    } else if (data.type === 'email') {
      payload.email = data.email;
    } else if (data.type === 'phone') {
      payload.phone = data.phone;
    }
    // const payload = {
    //   sub: 'Todo: user id',
    //   username: username,
    //   password: password,
    // };
    const access_token = this.jwtService.sign(payload);
    console.log('access_token', access_token);
    return access_token;
  }

  /**
   * 解析 Google 登录返回的 credential (JWT)
   *
   * @param credential
   *
   * https://developers.google.com/identity/gsi/web/reference/js-reference#credential
   */
  async authWithGoogle(credential: string): Promise<AuthData> {
    const ticket = await this.googleAuthClient.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    console.log('google credential payload 解析结果:', ticket.getPayload());

    const userData = {
      name: ticket.getPayload()?.name,
      email: ticket.getPayload()?.email,
      image: ticket.getPayload()?.picture,
    };
    const token = await this.jwtService.signAsync(userData);

    console.log('token', token);

    return {
      username: ticket.getPayload()?.name,
      userId: ticket.getPayload()?.sub,
      email: ticket.getPayload()?.email,
      token: token,
    };
  }
}
