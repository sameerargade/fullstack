import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';


import { GroceryItemUpdateComponent } from './grocery-item-update.component';
import { GroceryItemUpdateRoutingModule } from './grocery-item-update-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [GroceryItemUpdateComponent],
  imports: [CommonModule,FormsModule , GroceryItemUpdateRoutingModule]
})
export class GroceryItemUpdateModule {
}
