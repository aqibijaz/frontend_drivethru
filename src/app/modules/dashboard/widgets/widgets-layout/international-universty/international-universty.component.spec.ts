import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalUniverstyComponent } from './international-universty.component';

describe('InternationalUniverstyComponent', () => {
  let component: InternationalUniverstyComponent;
  let fixture: ComponentFixture<InternationalUniverstyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternationalUniverstyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalUniverstyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
