import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Position } from '../position';

const SightDistance = 100;
const DetectDistance = 15;

@Component({
  selector: 'app-detector',
  templateUrl: './detector.component.html',
  styleUrls: ['./detector.component.css']
})
export class DetectorComponent implements OnInit {

  @ViewChild('gameElement', {static: true}) gameElement: ElementRef<HTMLDivElement>;
  currentPosition: Position = {x: 0, y: 0};
  targetPosition: Position;
  noiseOpacity = 1;
  isDetected = false;
  private distance = SightDistance;

  ngOnInit() {
    this.setup();
  }

  update(position: Position) {
    this.currentPosition = position;
    this.distance = this.getDistance();
    this.noiseOpacity = this.getNoiseOpacity();
  }

  detect() {
    if (this.distance < DetectDistance) { this.isDetected = true; }
  }

  private getNoiseOpacity(): number {
    if (this.isDetected) { return 0; }
    return Math.min(1, this.distance / SightDistance);
  }

  private getDistance(): number {
    const dx   = this.currentPosition.x - this.targetPosition.x;
    const dy   = this.currentPosition.y - this.targetPosition.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  private setup() {
    const dimensions = this.gameElement.nativeElement.getBoundingClientRect();
    this.targetPosition = {
      x: Math.floor(Math.random() * dimensions.width),
      y: Math.floor(Math.random() * dimensions.height)
    };
  }
}
