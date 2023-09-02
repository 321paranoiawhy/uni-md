import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Request, Response } from 'express';
import { MongooseError } from 'mongoose';

@Catch(MongooseError)
export class MongooseExceptionFilter implements ExceptionFilter {
  catch(exception: MongooseError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    // TODO 定制状态码
    const error = {
      code: 400,
      message: exception.message,
      data:
        // 仅开发环境返回错误堆栈
        process.env.NODE_ENV == 'development'
          ? { error: exception.name, stack: exception.stack }
          : { error: exception.name },
      path: request.url,
    };

    response.status(error.code).json(error);
  }
}
