import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementLandingPageComponent } from './management-landing-page.component';

describe('ManagementLandingPageComponent', () => {
  let component: ManagementLandingPageComponent;
  let fixture: ComponentFixture<ManagementLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementLandingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
