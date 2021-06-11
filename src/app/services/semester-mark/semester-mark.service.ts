import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SemesterMarkService {

  constructor(private http:HttpClient) { }

  getData(mssv:string,nhhk:string)
  {
    let url = `/aq/diemhksv/{mssv:"${mssv}",nhhk:"${nhhk}"}`;
    return this.http.get(url);
  }
}
