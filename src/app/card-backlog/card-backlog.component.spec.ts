import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  MatChipList,
  MatChip
} from '@angular/material';

import { CardBacklogComponent } from './card-backlog.component';
import { CdkDropList } from '@angular/cdk/drag-drop';

describe('Card_backlogComponent', () => {
  let component: CardBacklogComponent;
  let fixture: ComponentFixture<CardBacklogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CardBacklogComponent,
        MatChipList,
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
