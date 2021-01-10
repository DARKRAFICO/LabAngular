import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { PagesComponent } from './pages/pages.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthpageComponent } from './pages/authpage/authpage.component';


@NgModule({
  declarations: [PagesComponent, LoginPageComponent, AuthpageComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
