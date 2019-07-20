import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DndDemoComponent } from './dnd-demo/dnd-demo.component';


const routes: Routes = [
   { path: '', component: DndDemoComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
