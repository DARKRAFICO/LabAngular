import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HomeheaderComponent } from './components/homeheader/homeheader.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { InstructorcontainerComponent } from './components/instructorcontainer/instructorcontainer.component';
import { CursodestacadocontainerComponent } from './components/cursodestacadocontainer/cursodestacadocontainer.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InstructorService } from './services/instructor.service';
import { DcursoService } from '../course/services/dcurso.service';


@NgModule({
  declarations: [HomepageComponent, HomeheaderComponent, InstructorComponent,
     InstructorcontainerComponent, CursodestacadocontainerComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  providers: [InstructorService, DcursoService]
})
export class HomeModule { }
