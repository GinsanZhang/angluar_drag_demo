import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatSidenavModule, MatChipsModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { DndDemoComponent } from './dnd-demo/dnd-demo.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      DndDemoComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatToolbarModule,
      MatSidenavModule,
      MatChipsModule,
      DragDropModule,
      MatIconModule,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
