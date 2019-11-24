import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoderFeedbackItemComponent } from './decoder-feedback-item.component';

describe('DecoderFeedbackItemComponent', () => {
  let component: DecoderFeedbackItemComponent;
  let fixture: ComponentFixture<DecoderFeedbackItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecoderFeedbackItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoderFeedbackItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
