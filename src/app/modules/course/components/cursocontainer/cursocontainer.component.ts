import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cursocontainer',
  templateUrl: './cursocontainer.component.html',
  styleUrls: ['./cursocontainer.component.css']
})
export class CursocontainerComponent implements OnInit {

  listcourse: any[] = [];


  constructor() { }

  ngOnInit(): void {

  }

}



