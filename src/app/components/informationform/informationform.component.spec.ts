import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationformComponent } from './informationform.component';

describe('InformationformComponent', () => {
  let component: InformationformComponent;
  let fixture: ComponentFixture<InformationformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
