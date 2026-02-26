import { Component, OnInit, Input} from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';
import { RickMortyService } from '../../services/rickymorty.service';
import { Personaje } from '../../models/personaje.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personaje-card',
  templateUrl: './personaje-card.component.html',
  styleUrl: './personaje-card.component.css',
  standalone: true,
  imports: [ CommonModule, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle]
})


export class PersonajeCard implements OnInit{

  personajes: Personaje[] = []
  
  //está esperando el tipo de personaje desde el componente padre (los tabs)
  @Input() tipo?: string

  constructor(private rickMortyService: RickMortyService) {}

  ngOnInit() {
    this.cargarPersonajes();
  }

  cargarPersonajes() {

    if (this.tipo){
      this.rickMortyService.getPersonajesporCategoria(this.tipo).subscribe(response => {
        this.personajes= response.results;
      })

    } else {
      this.rickMortyService.getPersonajes().subscribe(response => {
        this.personajes = response.results; 
    });
    }
  
  }


  }

