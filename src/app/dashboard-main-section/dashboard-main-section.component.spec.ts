import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMainSectionComponent } from './dashboard-main-section.component';

describe('DashboardMainSectionComponent', () => {
  let component: DashboardMainSectionComponent;
  let fixture: ComponentFixture<DashboardMainSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardMainSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardMainSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
