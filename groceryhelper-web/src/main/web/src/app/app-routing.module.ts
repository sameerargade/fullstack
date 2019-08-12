import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [ {
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full'
},
{
  path: 'dashboard',
  pathMatch: 'prefix',
  //loadChildren: './dashboard/dashboard.module'
  loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)

},
{
  path: 'grocery-item-list',
  pathMatch: 'prefix',
  //loadChildren: './grocery-item-list/grocery-item-list.module'
  loadChildren: () => import('./grocery-item-list/grocery-item-list.module').then(m => m.GroceryItemListModule)
},
{
  path: 'grocery-item-add',
  pathMatch: 'prefix',
  //loadChildren: './grocery-item-add-item/grocery-item-add.module'
  loadChildren: () => import('./grocery-item-add-item/grocery-item-add.module').then(m => m.GroceryItemAddModule)

}
,
{
  path: 'grocery-item-update/:id',
  pathMatch: 'prefix',
  //loadChildren: './grocery-item-add-item/grocery-item-add.module'
  loadChildren: () => import('./grocery-item-update-item/grocery-item-update.module').then(m => m.GroceryItemUpdateModule)

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  }
