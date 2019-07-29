
import { Module } from '@nestjs/common';
import { ConfigService } from './configur.service';
import * as path from "path"
import { EventsGateway } from './ws.gateway';

@Module({
  providers: [EventsGateway,
    {
      provide: ConfigService,
      useValue: new ConfigService(path.join(process.cwd()) + "/.env"),
    },
  ],
  exports: [ConfigService],
})
export class ConfigModule {}