import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TimetableService {

  constructor(private http:HttpClient) { }

  getData()
  {
    let url = `/aq/tkbtuansv/{mssv:"BA20EX003",tu_ngay:"2020-10-05"}`;
    return this.http.get(url);
  }
}
