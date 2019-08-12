import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';


import { GroceryItemAddComponent } from './grocery-item-add.component';
import { GroceryItemAddRoutingModule } from './grocery-item-add-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [GroceryItemAddComponent],
  imports: [CommonModule,FormsModule , GroceryItemAddRoutingModule]
})
export class GroceryItemAddModule {
}
