import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-decoder-light',
  template: '',
  styleUrls: ['./decoder-light.component.css']
})
export class DecoderLightComponent {
  @Input()
  @HostBinding('style.background-color')
  color: string;
}
