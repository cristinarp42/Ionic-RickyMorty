import { Result } from './../models/personaje.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})

export class RickMortyService {

  private apiUrl = environment.apiURL

  constructor(private http: HttpClient) {}

  //Carga inicial de los personajes
  getPersonajes(type?: string, id?: number) {
    console.log('Obteniendo personajes desde la API con tipo:', type, 'y id:', id);
    // Si no hay personajes en localStorage, los cargamos desde la API y los guardamos en localStorage
        return this.http.get<any>(this.apiUrl + "/character" + (type ? `?species=${type}` : '') + (id ? `/${id}` : ''));
      
  }
  //Guardar array actualizado
  guardarPersonajes(personajes: Result[]) {
    localStorage.setItem('personajes', JSON.stringify(personajes));
  }
  


  //Eliminar personaje por id
   eliminarPersonaje(id: number) {
    let personajes = JSON.parse(localStorage.getItem('personajes') || '[]') as Result[];
    personajes = personajes.filter(p => p.id !== id);
    this.guardarPersonajes(personajes);
  }

  //Editar personaje
    editarPersonaje(personajeEditado: Result) {
    const actuales = JSON.parse(localStorage.getItem('personajes') || '[]') as Result[];
    const actualizados = actuales.map(p =>
      p.id === personajeEditado.id ? personajeEditado : p
    );
    this.guardarPersonajes(actualizados);
  }



}