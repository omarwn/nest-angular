import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { Patient } from '../shared/models/patient.model';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  patients : Patient[] = []

  constructor(private pS : PatientService) { }

  ngOnInit() {
    this.getPatients(1)
  }

  getPatients(page:number){
    this.pS.getPatients({
      page : page , 
      data: {rm : 0 , 'area.0' : 'ga' } , 
      filter : 'name doctor paid area',
      populate : {path : 'doctor' , select : 'name'}
    }).subscribe(e=>{
      this.patients = e
    },err => console.error(err))
  }

}
