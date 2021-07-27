import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationFormComponent } from './informationform.component';

describe('InformationformComponent', () => {
  let component: InformationFormComponent;
  let fixture: ComponentFixture<InformationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
