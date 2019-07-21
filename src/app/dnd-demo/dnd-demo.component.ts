import {
  Component,
  OnInit,
  AfterViewInit
} from '@angular/core';
import { CdkDragDrop, copyArrayItem } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-dnd-demo',
  templateUrl: './dnd-demo.component.html',
  styleUrls: ['./dnd-demo.component.scss']
})
export class DndDemoComponent implements OnInit, AfterViewInit {
  cards = [
    {
      name: 'ginsan',
      color: 'primary',
      _x: Math.floor(Math.random() * 100),
      _y: Math.floor(Math.random() * 100),
      x: 0,
      y: 0
    }
  ];
  constructor() { }

  ngOnInit() { }

  ngAfterViewInit(): void {
    console.log('after view  init');
  }

  moved(moved: any) {
    const name = moved.source.element.nativeElement.title;
    console.log('move:' + name);
    const transform = moved.source.element.nativeElement.style.transform;
    const matchIter = transform.matchAll(
      /translate3d\((-?\d+)px,\s(-?\d+)px,\s-?\d+px\)/g
    );
    let regRsult = matchIter.next();
    let xTemp = 0;
    let yTemp = 0;
    while (!regRsult.done) {
      const value = regRsult.value;
      xTemp += value.hasOwnProperty(1) ? Number.parseInt(value[1], 0) : 0;

      yTemp += value.hasOwnProperty(2) ? Number.parseInt(value[2], 0) : 0;
      regRsult = matchIter.next();
    }
    const card = this.cards.find(it => it.name === name);
    card.x = xTemp;
    card.y = yTemp;
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log('drop');
    if (event.previousContainer !== event.container) {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  onClear() {
    this.cards = [];
  }
}
