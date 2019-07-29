import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { PatientsController } from './patient.controller';
import { PatientsService } from './patient.service';
import { PatientSchema } from './patient.models';
import { BaseModule } from '../services/base.module';
import { PatientGateway } from './patient.gateway';

@Module({
    imports: [
        MongooseModule.forFeature([{name : "Patient" , schema : PatientSchema}]),
        BaseModule
    ],
    controllers: [PatientsController],
    providers: [PatientsService, PatientGateway],
    exports: [PatientsModule]
})
export class PatientsModule { }
