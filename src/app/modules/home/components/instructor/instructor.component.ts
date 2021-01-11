import { Component, OnInit, Input } from '@angular/core';
import { IInstructor } from '../../interface/iinstructor';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.css']
})
export class InstructorComponent implements OnInit {

  @Input() vinstructor: IInstructor;

  constructor() { }

  ngOnInit(): void {
  }

}
