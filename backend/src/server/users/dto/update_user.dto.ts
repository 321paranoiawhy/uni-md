import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto {
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
}
