import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCoverComponent } from './page-cover.component';

describe('PageCoverComponent', () => {
  let component: PageCoverComponent;
  let fixture: ComponentFixture<PageCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
