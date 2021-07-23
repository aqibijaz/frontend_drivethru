import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsAchievementsComponent } from './goals-achievements.component';

describe('GoalsAchievementsComponent', () => {
  let component: GoalsAchievementsComponent;
  let fixture: ComponentFixture<GoalsAchievementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalsAchievementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsAchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
