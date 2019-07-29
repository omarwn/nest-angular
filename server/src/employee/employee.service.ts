import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from '../services/base.service';

@Injectable()
export class EmployeeService extends BaseService {
    constructor(@InjectModel("Employee") private Employees: Model<any>){
        super(Employees)
    }
}
