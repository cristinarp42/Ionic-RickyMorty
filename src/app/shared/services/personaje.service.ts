import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Result } from '../models/personaje.model';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  private personajes: Result[] = [];

  // BehaviorSubject para emitir cambios
  private personajesSubject = new BehaviorSubject<Result[]>([]);
  personajes$ = this.personajesSubject.asObservable();

  constructor() { }

  // método para inicializar array
  setPersonajes(personajes: Result[]) {
    this.personajes = personajes;
    this.personajesSubject.next(this.personajes);
  }

  // método paraeliminar personaje
  eliminarPersonaje(id: number) {
    this.personajes = this.personajes.filter(p => p.id !== id);
    this.personajesSubject.next(this.personajes);
  }

  // método para actualizar personaje
  actualizarPersonaje(personajeEditado: Result) {
    const index = this.personajes.findIndex(p => p.id === personajeEditado.id);
    if (index !== -1) {
      this.personajes[index] = personajeEditado;
      this.personajesSubject.next(this.personajes);
    }
  }

  // obtener array actual
  getPersonajes() {
    return [...this.personajes]; // devolvemos copia
  }
}