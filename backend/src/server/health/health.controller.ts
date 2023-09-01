import { Controller, Get } from '@nestjs/common';
import {
  HealthCheckService,
  HttpHealthIndicator,
  MongooseHealthIndicator,
  HealthCheck,
  DiskHealthIndicator,
  MemoryHealthIndicator,
} from '@nestjs/terminus';
import { Public } from '../auth/decorators/public_decorators';
import { ApiTags } from '@nestjs/swagger';

@Controller('health')
export class HealthController {
  constructor(
    private readonly health: HealthCheckService,
    private readonly http: HttpHealthIndicator,
    private readonly mongooseHealthIndicator: MongooseHealthIndicator,
    private readonly diskHealthIndicator: DiskHealthIndicator,
    private readonly memoryHealthIndicator: MemoryHealthIndicator,
  ) {}

  @ApiTags('health check')
  @Public()
  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      // TODO 替换为实际的 entry URL
      () => this.http.pingCheck('entry', 'http://localhost:3002/uni-md/api/'),

      // 检查 mongodb 数据库连接
      // https://nestjs.github.io/terminus/injectables/MongooseHealthIndicator.html
      () =>
        this.mongooseHealthIndicator.pingCheck('mongodb', {
          timeout: 1500,
        }),

      // 磁盘健康检查
      // https://docs.nestjs.com/recipes/terminus#disk-health-indicator
      // () =>
      //   this.diskHealthIndicator.checkStorage('disk', {
      //     path: '/',
      //     thresholdPercent: 0.5,
      //   }),

      // 内存健康检查
      // https://docs.nestjs.com/recipes/terminus#memory-health-indicator
      () =>
        this.memoryHealthIndicator.checkHeap('memory_heap', 150 * 1024 * 1024),
    ]);
  }
}
