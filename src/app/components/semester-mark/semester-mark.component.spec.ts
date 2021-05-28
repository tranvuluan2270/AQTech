import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemesterMarkComponent } from './semester-mark.component';

describe('SemesterMarkComponent', () => {
  let component: SemesterMarkComponent;
  let fixture: ComponentFixture<SemesterMarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemesterMarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SemesterMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
