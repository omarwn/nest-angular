import { Module, NestModule, MiddlewareConsumer} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ConfigModule } from './config/configur.module';
import { LoggerMiddleware } from './logger.middleware';
import { PatientsModule } from './patient/patient.module';
import { EmployeeModule } from './employee/employee.module';


@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async () => ({
        uri: "mongodb://localhost:27017/newpatient",
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
      }),
    }
    ),
    UserModule,
    ConfigModule,
    PatientsModule,
    EmployeeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('')
  }
}
