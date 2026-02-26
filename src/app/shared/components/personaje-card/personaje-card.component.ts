import { Component, OnInit, Input} from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';
import { RickMortyService } from '../../services/rickymorty.service';
import { Result } from '../../models/personaje.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personaje-card',
  templateUrl: './personaje-card.component.html',
  styleUrl: './personaje-card.component.css',
  standalone: true,
  imports: [ CommonModule, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle]
})


export class PersonajeCard implements OnInit{

  personajes: Result[] = []
  
  //está esperando el tipo de personaje desde el componente padre (los tabs)
  @Input() tipo?: string

  constructor(
    private rickMortyService: RickMortyService,
    //nuevo añadido por Josua: para la ruta a la pagina de info
    private route: Router
  ) {}

  ngOnInit() {
    this.cargarPersonajes();
  }


  navigateCharacter(id: number){
    this.route.navigate(['info-character/', id]
    )
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

