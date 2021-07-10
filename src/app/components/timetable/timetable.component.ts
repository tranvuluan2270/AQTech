import { Component, OnInit } from '@angular/core';
import {TimetableService} from '../../services/timetable/timetable.service';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {
  constructor(private Timetable:TimetableService){}
  ngOnInit(): void {}
  data:any=[];
  listData:any=[];
  listDates : String[] = ["THỨ HAI", "THỨ BA", "THỨ TƯ", "THỨ NĂM", "THỨ SÁU", "THỨ BẢY", "CHỦ NHẬT"];
  listPeriods : String[] = ["Tiết 1", "Tiết 2", "Tiết 3", "Tiết 4", "Tiết 5","Tiết 6", "Tiết 7", "Tiết 8", "Tiết 9"];
  listContents: String[]= ["","","","","","",""];
  
  semesters:any=[
    {placeholder:'Học kỳ 1 - Năm học 2020-2021', value:'20201'},
    {placeholder:'Học kỳ 2 - Năm học 2020-2021', value:'20202'},
  ];
  weeks:any=[];
  weeksOfSemeter1:any=[
    {placeholder: 'Tuần 1 [Từ 05/10/2020 - Đến 12/10/2020]', value:'2020-10-05'},
    {placeholder: 'Tuần 2 [Từ 13/10/2020 - Đến 20/10/2020]', value:'2020-10-13'},
    {placeholder: 'Tuần 3 [Từ 21/10/2020 - Đến 28/10/2020]', value:'2020-10-21'},
  ];
  weeksOfSemeter2:any=[
    {placeholder: 'Tuần 4 [Từ 29/10/2020 - Đến 04/11/2020]', value:'2020-10-29'},
    {placeholder: 'Tuần 5 [Từ 5/11/2020 - Đến 11/11/2020]', value:'2020-11-5'},
    {placeholder: 'Tuần 6 [Từ 12/11/2020 - Đến 18/11/2020]', value:'2020-11-12'},
  ];

  getInputs(value:any)
  {
    let Mssv = value.mssv;
    let TuNgay = value.tungay;

    this.Timetable.getData(Mssv,TuNgay).subscribe(data=>{
      this.listData = data;
    })
  }

  updateWeeks(chosenSemester:string){
    switch (chosenSemester){
      case '20201':
        this.weeks = this.weeksOfSemeter1;
        break;
      case '20202':
        this.weeks = this.weeksOfSemeter2;
        break;
      default:
        this.weeks=[];
        break;
    }
  }

}
