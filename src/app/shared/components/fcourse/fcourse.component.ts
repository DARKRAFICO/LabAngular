import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fcourse',
  templateUrl: './fcourse.component.html',
  styleUrls: ['./fcourse.component.css']
})
export class FcourseComponent implements OnInit {

@Input() curso: any[];
@Input() coverWitdh: number;

  constructor() { }

  ngOnInit(): void {
  }

}
