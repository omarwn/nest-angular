import { Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { EmployeeGateway } from './employee.gateway';
import { EmployeeService } from './employee.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BaseModule } from '../services/base.module';
import { employeeSchema } from './employee.models';

@Module({
  imports : [
    MongooseModule.forFeature([{name : "Employee" , schema : employeeSchema}]),
    BaseModule
  ],
  controllers: [EmployeeController],
  providers: [EmployeeGateway, EmployeeService],
  exports: [EmployeeModule]
})
export class EmployeeModule {}
