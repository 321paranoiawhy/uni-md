import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpException,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create_user.dto';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';
import { Public } from '../auth/decorators/public_decorators';
import { UpdateUserDto } from './dto/update_user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Public()
  @HttpCode(201)
  @Post()
  async create(@Body() createCatDto: CreateUserDto) {
    if (await this.usersService.checkUserExist(createCatDto)) {
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    } else {
      return this.usersService.create(createCatDto);
    }
  }

  /**
   * 获取所有用户
   * @returns
   */
  @Public()
  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  /**
   * 通过用户 id 查找
   * @returns
   */
  @Public()
  @Get(':_id')
  async findUserById(@Param('_id') _id: string): Promise<User | null> {
    return this.usersService.findUserById(_id);
  }

  /**
   * 更新用户信息
   * @returns
   */
  @Public()
  @Put(':_id')
  async updateUser(
    @Param('_id') _id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User | null> {
    return await this.usersService.updateUser(_id, updateUserDto);
  }

  /**
   * 删除指定 id 的用户
   * @returns
   */
  @Public()
  @HttpCode(200)
  @Delete(':_id')
  async deleteUserById(@Param('_id') _id: string): Promise<string> {
    try {
      const res = await this.usersService.deleteUserById(_id);
      console.log(res);
      // return response.status(200).send('Hello World!');
      return `User (id: ${_id}) has been deleted`;
    } catch (error) {
      console.log(error);
      return `User  (id: ${_id}) deleted failed, maybe the user does not exist`;
    }
    // return this.usersService.deleteUserById(_id);
  }
}
