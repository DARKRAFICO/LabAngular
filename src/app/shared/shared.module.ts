import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FcourseComponent } from './components/fcourse/fcourse.component';


@NgModule({
  declarations: [FcourseComponent],
  imports: [
    CommonModule
  ],
  exports: [FcourseComponent]
})
export class SharedModule { }
