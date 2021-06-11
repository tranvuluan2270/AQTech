import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TimetableService {

  constructor(private http:HttpClient) { }

  getData(mssv:string,date:string)
  {
    let url = `/aq/tkbtuansv/{mssv:"${mssv}",tu_ngay:"${date}"}`;
    return this.http.get(url);
  }
}
