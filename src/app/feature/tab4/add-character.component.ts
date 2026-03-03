import { Component, OnInit } from '@angular/core';
import { RickMortyService } from 'src/app/shared/services/rickymorty.service';
import { Router } from '@angular/router';
import { Gender, Result, Species, Status, Location } from 'src/app/shared/models/personaje.model';
import { 
  IonButton, IonContent, IonInput, IonLabel, IonCard, IonItem, IonCardContent, 
  IonSelect, IonSelectOption 
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
    private route: Router 
  ) { }

  ngOnInit() {

  }

  guardarPersonaje() {
    const personajes = this.rickMortyService.getPersonajes();
    // Asignar un ID único al nuevo personaje
    // Si no hay personajes, el ID será 1, de lo contrario, será el máximo ID actual + 1
    const ultimoID = personajes.length ? Math.max(...personajes.map(p => p.id)) : 0;
    this.nuevoPersonaje.id = ultimoID + 1;

    if(!this.nuevoPersonaje.image) {
      this.nuevoPersonaje.image = 'https://rickandmortyapi.com/api/character/avatar/19.jpeg';
    }

    personajes.push(this.nuevoPersonaje);
    this.rickMortyService.guardarPersonajes(personajes);

    this.route.navigate(['/tab1']);
  }

  cancelar() {
    this.route.navigate(['/tab1']);
  }

}
