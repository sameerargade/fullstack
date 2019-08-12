import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroceryItemListRoutingModule } from './grocery-item-list-routing.module';
import { GroceryItemListComponent } from './grocery-item-list.component';


import {FormsModule,ReactiveFormsModule} from '@angular/forms'  
 

@NgModule({
  declarations: [GroceryItemListComponent],
  imports: [
    CommonModule,
    GroceryItemListRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GroceryItemListModule { }
