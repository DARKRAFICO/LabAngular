import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursocontainer',
  templateUrl: './cursocontainer.component.html',
  styleUrls: ['./cursocontainer.component.css']
})
export class CursocontainerComponent implements OnInit {

  listcurso: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
