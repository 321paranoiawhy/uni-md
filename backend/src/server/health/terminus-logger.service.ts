import { Injectable, Scope, ConsoleLogger } from '@nestjs/common';

// https://docs.nestjs.com/recipes/terminus#logging
@Injectable({ scope: Scope.TRANSIENT })
export class TerminusLogger extends ConsoleLogger {
  error(message: any, stack?: string, context?: string): void;
  error(message: any, ...optionalParams: any[]): void;
  error(
    message: unknown,
    // stack?: unknown,
    // context?: unknown,
    // ...rest: unknown[]
  ): void {
    // Overwrite here how error messages should be logged
    console.log(message);
  }
}
