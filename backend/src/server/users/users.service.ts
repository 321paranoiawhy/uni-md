import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create_user.dto';
import { User } from './interfaces/user.interface';
import { USER_MODEL } from 'src/config/constants';
import { UpdateUserDto } from './dto/update_user.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_MODEL) private readonly userModel: Model<CreateUserDto>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<CreateUserDto> {
    // TODO 先检查数据库中是否存在用户
    const createdUser = this.userModel.create(createUserDto);
    return createdUser;
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find();
  }

  async findUserById(userId: string): Promise<User | null> {
    try {
      return this.userModel.findById(userId);
    } catch (error) {
      throw new HttpException('User does not exist', HttpStatus.BAD_REQUEST);
    }
  }

  async deleteUserById(_id: string): Promise<any> {
    return this.userModel.findByIdAndDelete(_id);
  }

  async updateUser(_id: string, data: UpdateUserDto): Promise<any> {
    console.log(_id, data);

    // TODO AES 加密 password
    if (data.password) {
      data.password = 'AES';
    }

    // 仅支持更新 username, email, phone 和 password
    const filteredData: UpdateUserDto = {};
    data.username && (filteredData.username = data.username);
    data.email && (filteredData.email = data.email);
    data.phone && (filteredData.phone = data.phone);
    data.password && (filteredData.password = data.password);
    console.log(filteredData);

    // 检查用户 id 是否存在, 不存在则报错, 存在则更新用户信息
    if (!(await this.userModel.find({ _id: { $exists: true } })).length) {
      throw new HttpException(
        `User (userId: ${_id}) does not exist`,
        HttpStatus.BAD_REQUEST,
      );
    } else {
      return this.userModel.findByIdAndUpdate(_id, data);
    }
  }

  /**
   * 用户注册时, 须检查用户是否已存在
   * @param data 用户登录信息
   * @returns
   */
  async checkUserExist(data: CreateUserDto): Promise<boolean> {
    let query;

    const { password } = data;

    // TODO AES 加密 password

    // 使用 username 和 password 登录
    if (data.username && password) {
      query = { where: { username: data.username, password: password } };
    }
    // 使用 email 和 password 登录
    else if (data.email && password) {
      query = { where: { username: data.email, password: password } };
    }
    // 使用 phone 和 password 登录
    else if (data.phone && password) {
      query = { where: { username: data.phone, password: password } };
    } else {
      // 必须输入用户名和密码/邮箱和密码/手机号和密码
      throw new HttpException(
        'Invalid username/email/phone and password',
        HttpStatus.BAD_REQUEST,
      );
    }

    const user = await this.userModel.findOne(query);

    return !!user;
  }
}
