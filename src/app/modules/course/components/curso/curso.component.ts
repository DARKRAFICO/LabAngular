import { Component, OnInit, Input } from '@angular/core';
import { ICurso } from '../../interface/icursos';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  @Input() vcursos: ICurso;

  constructor() { }

  ngOnInit(): void {
  }

}
