import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const code = res.statusCode; // 响应状态码
    next();
    // 组装日志信息
    const logResult = ` >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        Time: ${new Date()}
        Request original url: ${req.originalUrl}
        Method: ${req.method}
        IP: ${req.ip}
        Status code: ${code}
        Parameters: ${JSON.stringify(req.params)}
        Query: ${JSON.stringify(req.query)}
        Body: ${JSON.stringify(
          req.body,
        )} \n  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      `;

    // 根据状态码，进行日志类型区分
    if (code >= 500) {
      console.error(logResult);
    } else if (code >= 400) {
      console.warn(logResult);
    } else {
      console.log(logResult);
    }
  }
}
