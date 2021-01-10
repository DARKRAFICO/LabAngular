import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CoursepageComponent } from './pages/coursepage/coursepage.component';
import { CatcursocontainerComponent } from './components/catcursocontainer/catcursocontainer.component';
import { CursocontainerComponent } from './components/cursocontainer/cursocontainer.component';
import { DetcoursepageComponent } from './pages/detcoursepage/detcoursepage.component';


@NgModule({
  declarations: [CoursepageComponent, CatcursocontainerComponent, CursocontainerComponent, DetcoursepageComponent],
  imports: [
    CommonModule,
    CourseRoutingModule
  ]
})
export class CourseModule { }
