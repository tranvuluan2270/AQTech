import { Component, OnInit } from '@angular/core';
import {ExamScheduleService} from '../../services/exam-schedule/exam-schedule.service';
@Component({
  selector: 'app-exam-schedule',
  templateUrl: './exam-schedule.component.html',
  styleUrls: ['../../app.component.css']
})
export class ExamScheduleComponent implements OnInit {
  
  data:any;
  getInputs(value:any)
  {
    let Mssv = value.mssv;
    let Nhhk = value.nhhk;

    this.ExamSchedule.getData(Mssv,Nhhk).subscribe(data=>{
    this.data=data;
    console.log(value)
    
    
    })
  }

  constructor(private ExamSchedule:ExamScheduleService){

  }

  ngOnInit(): void {

  }

}
