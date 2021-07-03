import { Component, OnInit } from '@angular/core';
import {ExamScheduleService} from '../../services/exam-schedule/exam-schedule.service';
@Component({
  selector: 'app-exam-schedule',
  templateUrl: './exam-schedule.component.html',
  styleUrls: ['./exam-schedule.component.css']
})
export class ExamScheduleComponent implements OnInit {
  constructor(private ExamSchedule:ExamScheduleService){}
  ngOnInit(): void {}

  Data:any=[];
  listData:any=[];
  semesters:any=[
    {placeholder:'Học kỳ 1 - Năm học 2020-2021', value:'20201'},
    {placeholder:'Học kỳ 2 - Năm học 2020-2021', value:'20202'}
  ]

  getInputs(value:any)
  {
    let Mssv = value.mssv;
    let Nhhk = value.nhhk;

    this.ExamSchedule.getData(Mssv,Nhhk).subscribe(listData=>{
    this.Data=listData; 
    })
  }
}
