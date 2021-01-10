import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CursodestacadocontComponent } from './components/cursodestacadocont/cursodestacadocont.component';
import { HomeheaderComponent } from './components/homeheader/homeheader.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { InstructorcontainerComponent } from './components/instructorcontainer/instructorcontainer.component';
import { CursodestacadocontainerComponent } from './components/cursodestacadocontainer/cursodestacadocontainer.component';


@NgModule({
  declarations: [HomepageComponent, CursodestacadocontComponent, HomeheaderComponent, InstructorComponent, InstructorcontainerComponent, CursodestacadocontainerComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
