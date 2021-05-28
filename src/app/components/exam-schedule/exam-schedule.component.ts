import { Component, OnInit } from '@angular/core';
import {ExamScheduleService} from '../../services/exam-schedule/exam-schedule.service';
@Component({
  selector: 'app-exam-schedule',
  templateUrl: './exam-schedule.component.html',
  styleUrls: ['./exam-schedule.component.css']
})
export class ExamScheduleComponent implements OnInit {

  constructor(private ExamSchedule:ExamScheduleService){
    this.ExamSchedule.getData().subscribe(data=>{
      console.log(data);
    })
  }

  ngOnInit(): void {
  }

}
