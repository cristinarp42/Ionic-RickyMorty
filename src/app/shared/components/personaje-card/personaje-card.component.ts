import { Component, OnInit, Input} from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton, AlertController } from '@ionic/angular/standalone';
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
  @Input() tipo?: string

  constructor(
    private rickMortyService: RickMortyService,
    private route: Router,
    private AlertController: AlertController
    
  
  ) {
    addIcons({ createOutline, trashOutline });
    console.log('PersonajeCard creado con tipo:', this.tipo);
  }

  ngOnInit() {
    if(localStorage.getItem('personajes') && !this.tipo) {
      this.personajes = JSON.parse(localStorage.getItem('personajes')!);
    } else {
      this.cargarPersonajes();
    }
  }


  cargarPersonajes() {
     this.rickMortyService.getPersonajes(this.tipo).subscribe((m: { results: Result[]; }) => {
      console.log('Personajes cargados desde la API:', m);
      this.personajes = m.results;
      localStorage.setItem('personajes', JSON.stringify(this.personajes));
    });
  }


  navigateCharacter(id: number){
    this.route.navigate(['info-character/', id])

  }

 
  eliminarPersonaje(id: number) {
   console.log('Eliminando personaje con id:', id);
   this.AlertController.create({
    header: 'Confirmar eliminación',
    message: '¿Estás seguro de que quieres eliminar este personaje?',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel'
      },
      {
        text: 'Eliminar',
        handler: () => {
    this.rickMortyService.eliminarPersonaje(id);
    // Actualizar la lista de personajes después de eliminar
    this.cargarPersonajes();
        }
      }
    ]
  }).then(alert => {
    alert.present();
  });
}

  editarPersonaje(id: number) {
    this.route.navigate(['edit-character/', id]);
  }

}

