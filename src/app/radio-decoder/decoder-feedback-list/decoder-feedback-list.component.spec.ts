import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoderFeedbackListComponent } from './decoder-feedback-list.component';

describe('DecoderFeedbackListComponent', () => {
  let component: DecoderFeedbackListComponent;
  let fixture: ComponentFixture<DecoderFeedbackListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecoderFeedbackListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoderFeedbackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
