import { Component, OnInit } from '@angular/core';
import { SemesterMarkService } from 'src/app/services/semester-mark/semester-mark.service';


@Component({
  selector: 'app-semester-mark',
  templateUrl: './semester-mark.component.html',
  styleUrls: ['./semester-mark.component.css']
})
export class SemesterMarkComponent implements OnInit {
  constructor(private SemesterMark:SemesterMarkService){}
  ngOnInit(): void {}

  Data:any=[];
  listData:any=[];

  getInputs(value:any)
  {
    let Mssv = value.mssv;
    let Nhhk = value.nhhk;

    this.SemesterMark.getData(Mssv,Nhhk).subscribe(listData=>{
      this.Data=listData;
    })
  }
}
