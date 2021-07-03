import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExamScheduleService {
  constructor(private http:HttpClient) {}

  getData(mssv:string,nhhk:string)
  {
    let url = `/aq/lichthisv/{mssv:"${mssv}",nhhk:"${nhhk}"}`;
    return this.http.get(url);
  }

}
