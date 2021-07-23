import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyRemindersComponent } from './study-reminders.component';

describe('StudyRemindersComponent', () => {
  let component: StudyRemindersComponent;
  let fixture: ComponentFixture<StudyRemindersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyRemindersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyRemindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
