// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class FileService {}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFileDTO, EditFileDTO } from './file.dto';
import { MarkdownFile } from './file.interface';

@Injectable()
export class FileService {
  constructor(
    @InjectModel('Files') private readonly FileModel: Model<MarkdownFile>,
  ) {}

  // 查找所有用户
  async findAll(): Promise<MarkdownFile[]> {
    const users = await this.FileModel.find();
    return users;
  }

  // 根据 _id 查找 OSS URL
  async findOne(_id: string): Promise<MarkdownFile | null> {
    return await this.FileModel.findById(_id);
  }

  // 添加单个用户
  async addOne(body: CreateFileDTO): Promise<void> {
    await this.FileModel.create(body);
  }

  // 编辑单个用户
  async editOne(_id: string, body: EditFileDTO): Promise<void> {
    await this.FileModel.findByIdAndUpdate(_id, body);
  }

  // 删除单个用户
  async deleteOne(_id: string): Promise<void> {
    await this.FileModel.findByIdAndDelete(_id);
  }
}
