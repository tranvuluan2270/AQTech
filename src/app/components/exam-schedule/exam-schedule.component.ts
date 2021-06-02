import { Component, OnInit } from '@angular/core';
import {ExamScheduleService} from '../../services/exam-schedule/exam-schedule.service';
@Component({
  selector: 'app-exam-schedule',
  templateUrl: './exam-schedule.component.html',
  styleUrls: ['./exam-schedule.component.css']
})
export class ExamScheduleComponent implements OnInit {
  
  data:any=[]

  constructor(private ExamSchedule:ExamScheduleService){
    this.ExamSchedule.getData().subscribe(data=>{
      
      this.data=data;
    })
  }

  ngOnInit(): void {
  }

}
