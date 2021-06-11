import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ExamScheduleComponent } from './components/exam-schedule/exam-schedule.component';
import { TimetableComponent } from './components/timetable/timetable.component';
import { SemesterMarkComponent } from './components/semester-mark/semester-mark.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ExamScheduleComponent,
    TimetableComponent,
    SemesterMarkComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'exam-schedule', component:ExamScheduleComponent},
      {path: 'timetable', component: TimetableComponent},
      {path: 'semester-mark', component: SemesterMarkComponent},
    ]),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
