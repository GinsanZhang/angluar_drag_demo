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
    const values = transform.match(
      /translate3d\((-?\d+)px,\s(-?\d+)px,\s-?\d+px\)/
    );
    let xTemp = 0;
    let yTemp = 0;
    xTemp = values.hasOwnProperty(1) ? Number.parseInt(values[1], 0) : 0;
    yTemp = values.hasOwnProperty(2) ? Number.parseInt(values[2], 0) : 0;
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
