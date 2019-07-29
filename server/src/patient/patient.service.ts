import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose"
import { BaseService } from '../services/base.service';
import { Model, Aggregate } from 'mongoose';

@Injectable()
export class PatientsService extends BaseService {
    constructor(@InjectModel("Patient") private Patients: Model<any>) {
        super(Patients)
    }

    PatientsFilters = () => {
        let aggre = new Aggregate()
        aggre.model(this.Patients)
        aggre.match({ "name": "RedPatient" })
        aggre.group({_id : "$_id" , data : {$first : "$name"}})
        return aggre
    }

}
