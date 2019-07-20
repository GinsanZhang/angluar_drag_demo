import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
@Component({
  selector: 'app-dnd-demo',
  templateUrl: './dnd-demo.component.html',
  styleUrls: ['./dnd-demo.component.scss']
})
export class DndDemoComponent implements OnInit, AfterViewInit {

  @ViewChild('card', { static: false }) card: ElementRef;
  x = Math.floor(Math.random() * 100);
  y = Math.floor(Math.random() * 100);
  constructor() { }
  ngOnInit() {
  }
  ngAfterViewInit(): void {
    const cardDom = this.card.nativeElement;
    cardDom.style.transform = `translate3d(${this.x}px, ${this.y}px, 0px)`;
  }
  moved(moved: any) {
    console.log('drag ended');
    const transform = this.card.nativeElement.style.transform;
    const matchIter = transform.matchAll(/translate3d\((-?\d+)px,\s(-?\d+)px,\s-?\d+px\)/g);
    let regRsult = matchIter.next();
    let xTemp = 0;
    let yTemp = 0;
    while (!regRsult.done) {
      const value = regRsult.value;
      xTemp += value.hasOwnProperty(1) ? Number.parseInt(value[1], 0) : 0;

      yTemp += value.hasOwnProperty(2) ? Number.parseInt(value[2], 0) : 0;
      regRsult = matchIter.next();
    }
    this.x = xTemp;
    this.y = yTemp;
  }
}
