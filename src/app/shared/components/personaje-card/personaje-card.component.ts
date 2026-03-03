import { Component, OnInit, Input} from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton } from '@ionic/angular/standalone';
import { RickMortyService } from '../../services/rickymorty.service';
import { Result } from '../../models/personaje.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonIcon } from '@ionic/angular/standalone';
import { createOutline, trashOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';


@Component({
  selector: 'app-personaje-card',
  templateUrl: './personaje-card.component.html',
  styleUrl: './personaje-card.component.css',
  standalone: true,
  imports: [ CommonModule, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton, IonIcon]
})


export class PersonajeCard implements OnInit{

  personajes: Result[] = []
  
  //está esperando el tipo de personaje desde el componente padre (los tabs)
  @Input() tipo?: string

  

  constructor(
    private rickMortyService: RickMortyService,
    //nuevo añadido por Josua: para la ruta a la pagina de info
    private route: Router
    
  
  ) {
    addIcons({ createOutline, trashOutline });
  }

    ngOnInit() {
    this.rickMortyService.cargarInicial();
    this.cargarPersonajes();
  }




  ionViewWillEnter() {
    this.cargarPersonajes();
    console.log('ionViewWillEnter: Personajes cargados:', this.personajes);
  }

  cargarPersonajes() {
    this.personajes = this.rickMortyService.getPersonajesporCategoria(this.tipo || '');
    console.log('Personajes cargados:', this.personajes);
  }


  navigateCharacter(id: number){
    this.route.navigate(['info-character/', id])

  }

  //traer el servidio de eliminar personaje
  eliminarPersonaje(id: number) {
    this.rickMortyService.eliminarPersonaje(id);
    // Actualizar la lista de personajes después de eliminar uno
    this.personajes = this.rickMortyService.getPersonajes();
  }

  editarPersonaje(id: number) {
    // Navegar a una ruta de edición pasando el ID del personaje
    this.route.navigate(['edit-character/', id]);
  }

}

