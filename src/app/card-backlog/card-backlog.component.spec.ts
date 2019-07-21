/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  MatChipList,
  MatChip,
  CdkDragDrop,
  CdkDropList
} from '@angular/material';

import { CardBacklogComponent } from './card-backlog.component';

describe('Card_backlogComponent', () => {
  let component: CardBacklogComponent;
  let fixture: ComponentFixture<CardBacklogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CardBacklogComponent,
        MatChipList,
        CdkDragDrop,
        CdkDropList,
        MatChip
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBacklogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
