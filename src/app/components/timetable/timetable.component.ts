import { Component, OnInit } from '@angular/core';
import {TimetableService} from '../../services/timetable/timetable.service';
@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['../../app.component.css']
})
export class TimetableComponent implements OnInit {
  
  data:any=[];
  getInputs(value:any)
  {
    let Mssv = value.mssv;
    let Ngay = value.date;

    this.Timetable.getData(Mssv,Ngay).subscribe(data=>{
    this.data=data;
    })
  }

  constructor(private Timetable:TimetableService){
   
  }

  ngOnInit(): void {
  }

}
