import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseInProgressComponent } from './course-in-progress.component';

describe('CourseInProgressComponent', () => {
  let component: CourseInProgressComponent;
  let fixture: ComponentFixture<CourseInProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseInProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseInProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
