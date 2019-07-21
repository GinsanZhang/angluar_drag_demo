import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ElementRef
} from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-card-backlog',
  templateUrl: './card-backlog.component.html',
  styleUrls: ['./card-backlog.component.scss']
})
export class CardBacklogComponent {
  @Input() connectTo: ElementRef;
  availableColors = [
    { name: 'none', color: undefined, _x: 12, _y: 11 },
    { name: 'Primary', color: 'primary', _x: 22, _y: 11 },
    { name: 'Accent', color: 'accent' , _x: 13, _y: 60},
    { name: 'Warn', color: 'warn', _x: 44, _y: 56 },
    { name: 'Warn0', color: 'warn', _x: 0, _y: 0 },
  ];
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
