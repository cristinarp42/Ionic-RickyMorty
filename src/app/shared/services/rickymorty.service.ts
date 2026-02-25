import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import type { Personaje } from '../models/personaje.model';

@Injectable({
  providedIn: 'root'
})

export class RickMortyService {

  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  //observable -> indica que devuelve una promesa. 
  getPersonajes(): Observable<{ results: Personaje[] }> {
    return this.http.get<{ results: Personaje[] }>(this.apiUrl);
  }
  

  getPersonajesporCategoria(categoria: string): Observable<any> {
    return this.http.get<Personaje>(`${this.apiUrl}/?species=${categoria}`);
  }
}