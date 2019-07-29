import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Patient } from '../shared/models/patient.model';

@Injectable()
export class PatientService {

  private headersC = new HttpHeaders().set('Content-Type','application/json').set('charset', 'UTF-8')

  constructor(private http: HttpClient) { }

  getPatients(data : any): Observable<Patient[]> {
    return this.http.post<Patient[]>('/api/patients/sub',data,{headers : this.headersC});
  }

  countPatients(): Observable<number> {
    return this.http.get<number>('/api/patients/count');
  }

  addPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>('/api/patients', patient);
  }

  getPatient(patient: Patient): Observable<Patient> {
    return this.http.get<Patient>(`/api/patients/${patient._id}`);
  }

  editPatient(Patient: Patient): Observable<any> {
    return this.http.put(`/api/patients/${Patient._id}`, Patient, { responseType: 'text' });
  }

  deletePatient(Patient: Patient): Observable<any> {
    return this.http.delete(`/api/Patients/${Patient._id}`, { responseType: 'text' });
  }

}
