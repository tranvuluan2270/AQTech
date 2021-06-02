import { Component, OnInit } from '@angular/core';
import {TimetableService} from '../../services/timetable/timetable.service';
@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {
  
  data:any=[];

  constructor(private Timetable:TimetableService){
    this.Timetable.getData().subscribe(data=>{
      console.log(data);
      
      this.data=data;
    })
  }

  ngOnInit(): void {
  }

}
