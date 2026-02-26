import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import type { Result } from '../models/personaje.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})

export class RickMortyService {

  private apiUrl = environment.apiURL

  constructor(private http: HttpClient) {}

  getPersonajes(): Observable<{ results: Result[] }> {
    return this.http.get<{ results: Result[] }>(this.apiUrl + "/character");
  }
  
  getPersonajesporCategoria(categoria: string): Observable<any> {
    return this.http.get<Result>(`${this.apiUrl}/character/?species=${categoria}`);
  }

  getPerspnajesPorId(id: number):  Observable<any> {
    return this.http.get<Result>(`${this.apiUrl}/character/${id}`);
  }


}