import { Module } from '@nestjs/common';
import { FileController } from './file.controller';
import { fileSchema } from './file.schema';
import { FileService } from './file.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Files', schema: fileSchema }])],
  controllers: [FileController],
  providers: [FileService],
})
export class FileModule {}
