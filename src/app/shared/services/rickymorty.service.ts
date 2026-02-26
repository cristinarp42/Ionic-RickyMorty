import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import type { Personaje } from '../models/personaje.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})

export class RickMortyService {

  private apiUrl = environment.apiURL

  constructor(private http: HttpClient) {}

  getPersonajes(): Observable<{ results: Personaje[] }> {
    return this.http.get<{ results: Personaje[] }>(this.apiUrl + "/character");
  }
  

  getPersonajesporCategoria(categoria: string): Observable<any> {
    return this.http.get<Personaje>(`${this.apiUrl}/character/?species=${categoria}`);
  }
}