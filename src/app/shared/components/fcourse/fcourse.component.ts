import { Component, OnInit, Input } from '@angular/core';
import { ICursodes } from '../../interface/dcurso';

@Component({
  selector: 'app-fcourse',
  templateUrl: './fcourse.component.html',
  styleUrls: ['./fcourse.component.css']
})
export class FcourseComponent implements OnInit {

@Input() vcursodes: ICursodes;
@Input() coverWitdh: number;

  constructor() { }

  ngOnInit(): void {
  }

}
