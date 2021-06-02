import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SemesterMarkService {

  constructor(private http:HttpClient) { }

 getData()
 {
   let url = `/aq/diemhksv/{mssv:"BA20EX003",nhhk:"20191"}`;
   return this.http.get(url);
 }
}
