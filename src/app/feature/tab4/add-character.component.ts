import { Component, OnInit } from '@angular/core';
import { RickMortyService } from 'src/app/shared/services/rickymorty.service';
import { Router } from '@angular/router';
import { Gender, Result, Species, Status, Location } from 'src/app/shared/models/personaje.model';
import { 
  IonButton, IonContent, IonInput, IonLabel, IonCard, IonItem, IonCardContent, 
  IonSelect, IonSelectOption, AlertController
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  
import { HeaderComponent } from '../../shared/components/header/header.component';



@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.scss'],
  standalone: true,
  imports: [HeaderComponent,IonInput, IonButton, IonContent, IonLabel, IonCard, IonItem, IonCardContent, IonSelectOption, CommonModule, FormsModule, IonSelect]

})
export class AddCharacterComponent  implements OnInit {

  nuevoPersonaje: Result = {
    id: 0,
    name: '',
    status: 'Alive' as Status,
    species: 'Human' as Species,
    type: '',
    gender: 'Male' as  Gender,
    origin: { name: 'Unknown', url: '' } as Location,
    location: { name: 'Unknown', url: '' } as Location,
    image: '',
    episode: [],
    url: '',
    created: new Date()
  };

  constructor(
    private rickMortyService: RickMortyService,
    private route: Router,
    private AlertController: AlertController
  ) { }

  ngOnInit() {

  }

  guardarPersonaje() {
    const personajes = localStorage.getItem('personajes');
    const personajesArray: Result[] = personajes ? JSON.parse(personajes) : [];

    if(!this.nuevoPersonaje.image) {
      this.nuevoPersonaje.image = 'https://rickandmortyapi.com/api/character/avatar/19.jpeg';
    }

    personajesArray.push(this.nuevoPersonaje);
    localStorage.setItem('personajes', JSON.stringify(personajesArray));
    console.log('Personaje guardado:', this.nuevoPersonaje);
    this.AlertController.create({
      header: 'Personaje Guardado',
      message: 'El personaje ha sido guardado exitosamente.',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.route.navigate(['/tab1']);
          }
        }
      ]
    }).then(alert => {
      alert.present();
    });
  }

  cancelar() {
    this.route.navigate(['/tab1']);
  }

}
