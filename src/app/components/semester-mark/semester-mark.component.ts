import { Component, OnInit } from '@angular/core';
import { SemesterMarkService } from 'src/app/services/semester-mark/semester-mark.service';


@Component({
  selector: 'app-semester-mark',
  templateUrl: './semester-mark.component.html',
  styleUrls: ['./semester-mark.component.css']
})
export class SemesterMarkComponent implements OnInit {
  
  data:any=[];

  constructor(private SemesterMark:SemesterMarkService){
    this.SemesterMark.getData().subscribe(data=>{
      this.data=data;
    })
  }

  ngOnInit(): void {
  }

}
