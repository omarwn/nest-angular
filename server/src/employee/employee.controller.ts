import { Controller, UseGuards } from '@nestjs/common';
import { IsLoginGuard } from '../services/islogin.guard';
import { EmployeeService } from './employee.service';

@Controller('employee')
    @UseGuards(IsLoginGuard)
export class EmployeeController {

    constructor(private readonly empService : EmployeeService){}


}
