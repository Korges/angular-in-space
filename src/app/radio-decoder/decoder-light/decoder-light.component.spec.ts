import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoderLightComponent } from './decoder-light.component';

describe('DecoderLightComponent', () => {
  let component: DecoderLightComponent;
  let fixture: ComponentFixture<DecoderLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecoderLightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoderLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
