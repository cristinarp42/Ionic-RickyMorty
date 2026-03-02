import { Component, OnInit } from '@angular/core';
import { RickMortyService } from 'src/app/shared/services/rickymorty.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Result } from 'src/app/shared/models/personaje.model';
import { IonButton, IonContent, IonInput,IonLabel, IonCard, IonItem, IonCardContent} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-character',
  templateUrl: './edit-character.component.html',
  styleUrls: ['./edit-character.component.scss'],
  standalone: true,
  imports: [IonInput, IonButton, IonContent, IonLabel, IonCard, IonItem, IonCardContent, CommonModule, FormsModule]
})
export class EditCharacterComponent  implements OnInit {

  personaje!: Result;

  constructor(
    private rickMortyService: RickMortyService,
    private activeRouter: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit() {
    //Obtengo el id del personaje de la url
    const id = Number(this.activeRouter.snapshot.paramMap.get('id'));
    this.personaje = this.rickMortyService.getPerspnajesPorId(id);
  }

  guardarCambios() {
    this.rickMortyService.editarPersonaje(this.personaje);
    this.route.navigate(['/tab1']); // Volver a la página principal después de guardar los cambios
  }

  cancelar() {
    this.route.navigate(['/tab1']); // Volver a la página principal sin guardar los cambios
  }

}
