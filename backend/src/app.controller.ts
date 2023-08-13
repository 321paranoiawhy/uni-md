import { Controller } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // localhost:3001
  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  // [route params]
  // umi-md/1
  // http://localhost:3002/uni-md/123
  // @Get('/:id')

  // findOne(@Param() params: any): string {
  //   console.log('id: ', params.id);
  //   return `route params ${params.id}`;
  // }

  // [query]
  // umi-md?id=1
  // http://localhost:3002/uni-md?id=1

  // @Get()
  // // @Header('Access-Control-Allow-Origin', '*')
  // findAll(@Query() query: any) {
  //   console.log(`query id: ${query.id}`);
  //   return `query id: ${query.id}`;
  // }
}
