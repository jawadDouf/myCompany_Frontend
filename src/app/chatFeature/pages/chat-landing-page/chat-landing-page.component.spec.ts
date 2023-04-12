import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatLandingPageComponent } from './chat-landing-page.component';

describe('ChatLandingPageComponent', () => {
  let component: ChatLandingPageComponent;
  let fixture: ComponentFixture<ChatLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatLandingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
