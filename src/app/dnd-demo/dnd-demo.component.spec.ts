import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {
  CdkDragDrop,
  CdkDropList
} from '@angular/material';
import { DndDemoComponent } from './dnd-demo.component';

describe('DndDemoComponent', () => {
  let component: DndDemoComponent;
  let fixture: ComponentFixture<DndDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DndDemoComponent,CdkDropList],
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
