import {
  Injectable,
  // HttpException,
  HttpStatus,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpResponse implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        return {
          code: HttpStatus.OK,
          message: 'Success',
          data,
          url: context.switchToHttp().getRequest().url,
        };
      }),
    );
  }
}
