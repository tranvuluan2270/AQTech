import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TimetableService {
  constructor(private http:HttpClient) { }

  getData(mssv:string,tungay:string)
  {
    let url = `/aq/tkbtuansv/{mssv:"${mssv}",tu_ngay:"${tungay}"}`;
    return this.http.get(url);
  }
}
