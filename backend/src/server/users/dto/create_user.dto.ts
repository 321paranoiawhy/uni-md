import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { TNormalLogin, TSocialLogin } from 'types';

export class CreateUserDto {
  // uuid 覆盖 mongodb _id
  // _id: string;
  @ApiPropertyOptional()
  username?: string;
  @ApiPropertyOptional()
  email?: string;
  @ApiPropertyOptional()
  phone?: string;
  @ApiPropertyOptional()
  // 使用 AES 加密存储
  password?: string;
  @ApiProperty()
  // 用户唯一标识
  userId: string;
  @ApiProperty()
  // 用户登录类型
  userType: TNormalLogin & TSocialLogin;
}
