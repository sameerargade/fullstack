import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { GroceryItemUpdateComponent } from './grocery-item-update.component';


export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: GroceryItemUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class GroceryItemUpdateRoutingModule {
}
