import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactusRoutingModule } from './contactus-routing.module';
import { ContactuspageComponent } from './pages/contactuspage/contactuspage.component';


@NgModule({
  declarations: [ContactuspageComponent],
  imports: [
    CommonModule,
    ContactusRoutingModule
  ]
})
export class ContactusModule { }
