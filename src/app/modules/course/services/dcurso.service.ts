import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICurso } from '../interface/icursos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DcursoService {
  urlc = 'http://examen-nh.jcramireztello.com/api/v1/course/?featured=true';
  constructor(private http: HttpClient) { }

  getcursosdest(): Observable<ICurso[]>{
    return this.http.get<ICurso[]>(`${this.urlc}`);
  }
}
