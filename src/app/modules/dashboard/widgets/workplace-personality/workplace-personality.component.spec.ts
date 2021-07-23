import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkplacePersonalityComponent } from './workplace-personality.component';

describe('WorkplacePersonalityComponent', () => {
  let component: WorkplacePersonalityComponent;
  let fixture: ComponentFixture<WorkplacePersonalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkplacePersonalityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkplacePersonalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
