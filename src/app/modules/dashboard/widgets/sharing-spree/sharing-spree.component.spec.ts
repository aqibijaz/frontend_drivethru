import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharingSpreeComponent } from './sharing-spree.component';

describe('SharingSpreeComponent', () => {
  let component: SharingSpreeComponent;
  let fixture: ComponentFixture<SharingSpreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharingSpreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharingSpreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
