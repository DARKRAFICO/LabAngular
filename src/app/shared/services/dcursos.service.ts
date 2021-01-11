import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICursodes } from '../interface/dcurso';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DcursosService {
  urld = 'http://examen-nh.jcramireztello.com/api/v1/course/?featured=true';
  constructor(private http: HttpClient) { }

  getdcursosdes(): Observable<ICursodes[]>{
    return this.http.get<ICursodes[]>(`${this.urld}`);
  }
}
