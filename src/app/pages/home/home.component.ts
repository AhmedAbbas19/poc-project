import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  square = {
    title: 'Drag Me!🙄',
    x: 30,
    y: 0,
    startX: 0,
    startY: 0,
    rotateX: 0,
  }
  
  circle = {
    title: 'DoubleTap me!🙄',
    x: -30,
    y: 0,
    startX: 0,
    startY: 0,
    scale: 1
  }
  constructor() { }

  onPanStart(event: any, target: string): void {
    this[target].startX = this[target].x;
    this[target].startY = this[target].y;
  }
  onPan(event: any, target: string): void {
    event.preventDefault();
    this[target].title = "Please, let me go!😭"
    this[target].x = this[target].startX + event.deltaX;
    this[target].y = this[target].startY + event.deltaY;
  }
  onPanEnd(target: string){
    this[target].title = "Thanks!😒"
  }

  onTap(target: string){
    this[target].rotateX = this[target].rotateX ? 0 : 360
  }

  onDoubletap(target: string){
    this[target].scale = this[target].scale === 1 ? 1.5 : 1
    this[target].title = this[target].scale === 1 ? 'DoubleTap me!🙄' : 'DoubleTap me!😒'

  }
}
