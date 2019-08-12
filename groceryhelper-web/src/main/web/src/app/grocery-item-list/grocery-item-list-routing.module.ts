import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroceryItemListComponent } from './grocery-item-list.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: GroceryItemListComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class GroceryItemListRoutingModule { }
