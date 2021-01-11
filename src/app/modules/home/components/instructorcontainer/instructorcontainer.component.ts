import { Component, OnInit } from '@angular/core';
import { IInstructor } from '../../interface/iinstructor';
import { InstructorService } from '../../services/instructor.service';

@Component({
  selector: 'app-instructorcontainer',
  templateUrl: './instructorcontainer.component.html',
  styleUrls: ['./instructorcontainer.component.css']
})
export class InstructorcontainerComponent implements OnInit {

  varinstructor: IInstructor[] = [];

  constructor(private sinstructor: InstructorService) { }

  ngOnInit(): void {
    this.getinstructor();
  }

  getinstructor(): void {
    this.sinstructor.getinstructor()
      .subscribe((res: IInstructor[]) =>  {
        this.varinstructor = res;
      });
  }

}
