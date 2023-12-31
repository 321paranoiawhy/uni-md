import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Query,
  Redirect,
  // UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
// import { AuthGuard } from './auth.guard';
import { Public } from './decorators/public_decorators';
import { Login, UnifiedResponse } from 'types';
import { AuthData } from './auth.interface';

@ApiBearerAuth()
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() body: Login): UnifiedResponse<string> {
    // return this.authService.login(body);
    return {
      code: 200,
      message: 'Success',
      data: this.authService.login(body),
    };
  }

  // @UseGuards(AuthGuard)
  // 此为对外可用的公开接口
  // @Public()
  @Get('profile')
  getProfile(@Request() req: any) {
    return true;
    return req;
  }

  // /auth/github?code=<CODE>
  @Public()
  @Get('github')
  @Redirect('http://localhost:3001/uni-md/login', 301)
  // @Redirect()
  @ApiOperation({ summary: 'GitHub Oauth' })
  @ApiResponse({ status: 301, description: '重定向至前端首页' })
  async signInWithGitHub(@Query('code') code: any): Promise<any> {
    console.log(`github auth code: ${code}`);

    if (!code) {
      return {
        code: 401,
        message: 'Code could not be found.',
        data: {},
      };
    }

    try {
      const res = await this.authService.authWithGitHub(code);

      if (res.data.error_description) {
        return { code: 401, message: res.data.error_description, data: {} };
      } else if (res.data.access_token) {
        console.log('access_token: ', res.data);
        const jwt = await this.authService.obtainUserInformation(
          res.data.access_token,
        );
        console.log(jwt);
        // TODO 重定向至前端, 返回 JWT
        return {
          url: 'http://localhost:3001/uni-md/?cookie=' + jwt,
          code: 301,
        };
      } else {
        return {
          code: 401,
          data: res.data,
          message: 'access_token could not be found.',
        };
      }
    } catch (error) {
      console.log('error', error);
      return {
        code: 401,
        message: 'Unknown error.',
        data: {},
      };
    }
  }

  /**
   *
   * @param credential
   */
  @Public()
  @Post('/google')
  async signInWithGoogle(
    @Body() body: any,
  ): Promise<UnifiedResponse<AuthData>> {
    console.log('credential', body.credential);
    const data: AuthData = await this.authService.authWithGoogle(
      body.credential,
    );

    return { code: 200, data: data, message: 'success' };
  }
}
