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
  cargarInicial() {
    // Si no hay personajes en localStorage, los cargamos desde la API y los guardamos en localStorage
    if (!localStorage.getItem('personajes')) {
        this.http.get<any>(this.apiUrl + "/character").subscribe(data => {
          const resultados: Result[] = data.results //extraemos solo el result del objeto que nos devuelve la api (tenia input y results)
          localStorage.setItem('personajes', JSON.stringify(resultados));
        });
      }
  }

//getPersonajes siempre devuelve un array
  getPersonajes(): Result[] {
    const personajes = localStorage.getItem('personajes');
    if (!personajes) return [];
    const parsed = JSON.parse(personajes);
    return Array.isArray(parsed) ? parsed : parsed.results || [];
  }

  //Guardar array actualizado
  guardarPersonajes(personajes: Result[]) {
    // "stringify" convierte el array de objetos a un string para guardarlo en localStorage
    localStorage.setItem('personajes', JSON.stringify(personajes));
  }
  
  getPersonajesporCategoria(categoria: string): Result[] {
    const personajes = this.getPersonajes();
     return categoria ? personajes.filter(p => p.species === categoria) : personajes;
  }

  getPerspnajesPorId(id: number):  Result {
    const personajes = this.getPersonajes();
    return personajes.find(p => p.id === id) as Result;
  }

  //Eliminar personaje por id
  eliminarPersonaje(id: number) {
    let personajes = this.getPersonajes();
    personajes = personajes.filter(p => p.id !== id);
    this.guardarPersonajes(personajes);
  }

  //Editar personaje
    editarPersonaje(personajeEditado: Result) {
    const actuales = this.getPersonajes();
    const actualizados = actuales.map(p =>
      // Si el id del personaje actual es igual al id del personaje editado, lo reemplazamos, si no, lo dejamos igual
      p.id === personajeEditado.id ? personajeEditado : p
    );
    this.guardarPersonajes(actualizados);
  }



}