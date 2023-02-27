import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphComponenetComponent } from './paragraph-componenet.component';

describe('ParagraphComponenetComponent', () => {
  let component: ParagraphComponenetComponent;
  let fixture: ComponentFixture<ParagraphComponenetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParagraphComponenetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParagraphComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
