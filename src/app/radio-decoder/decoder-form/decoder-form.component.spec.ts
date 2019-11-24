import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoderFormComponent } from './decoder-form.component';

describe('DecoderFormComponent', () => {
  let component: DecoderFormComponent;
  let fixture: ComponentFixture<DecoderFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecoderFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
