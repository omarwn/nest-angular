import { Controller, Post, Body, Get, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { PatientsService } from './patient.service';
import { IsLoginGuard } from '../services/islogin.guard';

@Controller('/api/patients')
    @UseGuards(IsLoginGuard)
export class PatientsController {

    constructor(private readonly patientsService: PatientsService) { }

    @Post()
        addPatient(@Body() data: any) {
            return this.patientsService.insert(data)
        }

    @Post("sub")
        getAllPatient(@Body() data) {
            return this.patientsService.getSub(data)
        }

    @Get("count")
        CountPatients() {
            return this.patientsService.count()
        }

    @Get(":id")
        getPatient(@Param() id: string) {
            return this.patientsService.get(id)
        }

    @Put(":id")
        editPatient(@Param() param: any, @Body() PatientData) {
            let data = {
                id: param.id,
                body: PatientData
            }
            return this.patientsService.update(data)
        }

    @Delete(":id")
        DeletePatient(@Param() id: string) {
            return this.patientsService.update(id)
        }
}
