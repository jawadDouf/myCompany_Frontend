import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItsFreeComponent } from './its-free.component';

describe('ItsFreeComponent', () => {
  let component: ItsFreeComponent;
  let fixture: ComponentFixture<ItsFreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItsFreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItsFreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
