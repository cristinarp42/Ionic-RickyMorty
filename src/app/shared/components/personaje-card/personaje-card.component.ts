import { Component, OnInit, Input} from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton } from '@ionic/angular/standalone';
import { Result } from '../../models/personaje.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PersonajeService } from '../../services/personaje.service';
import { RickMortyService } from '../../services/rickymorty.service';

@Component({
  selector: 'app-personaje-card',
  templateUrl: './personaje-card.component.html',
  styleUrl: './personaje-card.component.css',
  standalone: true,
  imports: [ CommonModule, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton]
})


export class PersonajeCard implements OnInit{

  personajes: Result[] = []
  
  //está esperando el tipo de personaje desde el componente padre (los tabs)
  @Input() tipo?: string

  constructor(
    private rickMortyService: RickMortyService,
    private route: Router,
    private personajeService: PersonajeService
  ) {}

  ngOnInit() {
    //llamamos al servicio para obtener los personajes y los asignamos a la variable local
    this.personajeService.personajes$.subscribe(personajes => {
    this.personajes = personajes;

  //si el array está vacío, cargar desde API
  if (this.personajeService.getPersonajes().length === 0) {
    this.cargarPersonajes();
  }
 
  });
  }


  navigateCharacter(id: number){
    this.route.navigate(['info-character/', id]
    )
  }

//método para cargar personajes según el tipo recibido por el input
  cargarPersonajes() {
    if (this.tipo) {
      this.rickMortyService.getPersonajesporCategoria(this.tipo).subscribe(response => {
        this.personajes = response.results;
        this.personajeService.setPersonajes(this.personajes);
      });
    } else {
      this.rickMortyService.getPersonajes().subscribe(response => {
        this.personajes = response.results;
        this.personajeService.setPersonajes(this.personajes);
      });
    }
  }

  //método para eliminar personaje
  eliminarPersonaje(id: number) {
  this.personajeService.eliminarPersonaje(id);
}

//método para editar personaje
editarPersonaje(personajeEditado: Result) {
  this.personajeService.actualizarPersonaje(personajeEditado);
}

  }

