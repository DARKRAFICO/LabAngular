import { Component, OnInit } from '@angular/core';
import { DcursoService } from 'src/app/modules/course/services/dcurso.service';
import { ICursodes } from 'src/app/shared/interface/dcurso';


@Component({
  selector: 'app-cursodestacadocontainer',
  templateUrl: './cursodestacadocontainer.component.html',
  styleUrls: ['./cursodestacadocontainer.component.css']
})
export class CursodestacadocontainerComponent implements OnInit {

  varcursosdes: ICursodes[] = [];

  constructor(private scursosdes: DcursoService) { }

  ngOnInit(): void {
    this.getcursosdest();
  }

  getcursosdest(): void {
    this.scursosdes.getcursosdest()
    .subscribe((res: ICursodes[]) => {
      this.varcursosdes = res;
    } );
  }

}
