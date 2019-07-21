import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DndDemoComponent } from './dnd-demo.component';
import { CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';

describe('DndDemoComponent', () => {
  let component: DndDemoComponent;
  let fixture: ComponentFixture<DndDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DndDemoComponent, CdkDropList, CdkDrag],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DndDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
