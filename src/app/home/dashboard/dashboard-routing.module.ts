import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardNewComponent } from './dashboard-new/dashboard-new.component';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'new', component:  DashboardNewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
