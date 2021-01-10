import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactuspageComponent } from './pages/contactuspage/contactuspage.component';

const routes: Routes = [  {
  path: '',
  component: ContactuspageComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactusRoutingModule { }
