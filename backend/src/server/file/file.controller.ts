import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileService } from './file.service';
import { CreateFileDTO } from './file.dto';
import { MarkdownFile } from './file.interface';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Public } from '../auth/decorators/public_decorators';
import { FileInterceptor } from '@nestjs/platform-express';
import { existsSync, mkdirSync, writeFile } from 'fs';

interface FileResponse<T = unknown> {
  code: number;
  data?: T;
  message: string;
}

// https://docs.nestjs.com/openapi/security#basic-authentication
@ApiBearerAuth()
@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  // http://localhost:3002/uni-md/file/123
  @Get('/:id')
  async findOne(
    @Param('_id') _id: string,
  ): Promise<FileResponse<MarkdownFile | null>> {
    // console.log('id: ', params.id);
    // return `file id ${params.id}`;
    const id = await this.fileService.findOne(_id);
    console.log(id, this.fileService);

    if (id != null) {
      return { code: 200, data: id, message: 'Success' };
    } else {
      return { code: 404, data: null, message: 'Not Found' };
    }

    // return {
    //   code: 200,
    //   data: await this.fileService.findOne(_id)),
    //   message: 'Success',
    // };
  }

  // http://localhost:3002/uni-md/file?id=123
  // @Get()
  // findAll(@Query() query: any) {
  //   // console.log(`query id: ${query.id}`);
  //   return `file query id: ${query.id}`;
  // }

  // POST /file
  @Post()
  async addOne(@Body() body: CreateFileDTO): Promise<FileResponse> {
    console.log(body);

    await this.fileService.addOne(body);
    return {
      code: 200,
      message: 'Success',
    };
  }

  @Public()
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file, file.size);

    const destinationFolder = 'public/upload/';

    // const filePath = `public/upload`;

    // writeFile('newfile.txt', 'Learn Node FS module', function (err) {
    //   if (err) throw err;
    //   console.log('File is created successfully.');
    // });

    if (!existsSync(destinationFolder)) {
      mkdirSync(destinationFolder, { recursive: true });
      console.log('create folder', destinationFolder);
    }

    writeFile(
      destinationFolder + `${file.originalname}-${new Date().getTime()}`,
      file.buffer,
      'utf-8',
      (error) => {
        console.log(error);
      },
    );
  }
}
