import { Component, OnInit } from '@angular/core';
import { RickMortyService } from 'src/app/shared/services/rickymorty.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Result } from 'src/app/shared/models/personaje.model';
import { IonButton, IonContent, IonInput,IonLabel, IonCard, IonItem, IonCardContent, IonIcon} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent} from '../../shared/components/header/header.component';
import { addIcons } from 'ionicons';


@Component({
  selector: 'app-edit-character',
  templateUrl: './edit-character.component.html',
  styleUrls: ['./edit-character.component.scss'],
  standalone: true,
  imports: [IonInput, IonButton, IonContent, IonLabel, IonCard, IonItem, IonCardContent, CommonModule, FormsModule, HeaderComponent, ReactiveFormsModule]
})
export class EditCharacterComponent  implements OnInit {
  personaje!: Result;

  constructor(
    private rickMortyService: RickMortyService,
    private activeRouter: ActivatedRoute,
    private route: Router
  ) {
    addIcons({
      pencil: 'pencil',
      close: 'close'
    });
  }

  ngOnInit() {
    const id = Number(this.activeRouter.snapshot.paramMap.get('id'));
    const personajes = JSON.parse(localStorage.getItem('personajes') || '[]') as Result[];
    this.personaje = personajes.find(p => p.id === id) as Result;
  }


  guardarCambios() {
    this.rickMortyService.editarPersonaje(this.personaje);
    this.route.navigate(['/tab1']); 
  }

 cancelar() {
   this.route.navigate(['/tab1']);
   }

}
