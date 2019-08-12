import {NgModule} from '@angular/core';
import { DashboardComponent } from './dashboard-component';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule]
})
export  class DashboardModule {
}
