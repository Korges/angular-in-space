import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetDetectorRoutingModule } from './planet-detector-routing.module';
import { DetectorComponent } from './detector/detector.component';

@NgModule({
  imports: [
    CommonModule,
    PlanetDetectorRoutingModule
  ],
  declarations: [DetectorComponent]
})
export class PlanetDetectorModule { }
