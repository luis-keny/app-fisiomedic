import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Persona, PersonaHc } from './../../index.model.api';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private url: string = environment.apiUrl + '/api/v1/persona';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.url);
  }

  getOneWithDiagnosticoActive(id: number): Observable<PersonaHc[]> {
    return this.http.get<PersonaHc[]>(this.url + '/perso/' + id);
  }

  getOneById(id: number): Observable<PersonaHc> {
    return this.http.get<PersonaHc>(this.url + '/' + id);
  }

  save(persona: Persona): Observable<PersonaHc> {
    return this.http.post<PersonaHc>(this.url, persona);
  }

  edit(persona: PersonaHc): Observable<PersonaHc> {
    return this.http.put<PersonaHc>(this.url + '/' + persona.idpersona, persona);
  }

  delete(id: number) {
    return this.http.delete<boolean>(this.url + '/' + id);
  }
}
