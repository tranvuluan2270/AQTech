import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExamScheduleService {

  constructor(private http:HttpClient) { }

 getData()
 {
   let url = `/aq/lichthisv/{mssv:"BA20EX003",nhhk:"20201"}`;
   return this.http.get(url);
 }
}
