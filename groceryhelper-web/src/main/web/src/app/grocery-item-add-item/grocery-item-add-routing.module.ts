import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { GroceryItemAddComponent } from './grocery-item-add.component';


export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: GroceryItemAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class GroceryItemAddRoutingModule {
}
