import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';
import { HealthController } from './health.controller';
import { TerminusLogger } from './terminus-logger.service';

@Module({
  imports: [
    TerminusModule.forRoot({
      logger: TerminusLogger,
      // Error Log Style
      // json (default), pretty (optional)
      errorLogStyle: 'pretty',
    }),
    HttpModule,
  ],
  controllers: [HealthController],
})
export class HealthModule {}
