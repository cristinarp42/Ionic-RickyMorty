import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonajeService } from '../../shared/services/personaje.service';
import { Result } from '../../shared/models/personaje.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonInput, IonButton, IonContent, IonItem, IonLabel, IonHeader, IonToolbar, IonTitle} from '@ionic/angular/standalone';


@Component({
  selector: 'app-edit-character',
  templateUrl: './edit-character.page.html',
  styleUrls: ['./edit-character.page.scss'],
  imports: [FormsModule, CommonModule, IonInput, IonButton, IonContent, IonItem, IonLabel, IonHeader, IonToolbar, IonTitle]
})
export class EditCharacterPage implements OnInit {

  personaje!: Result;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personajeService: PersonajeService
  ) {}

  ngOnInit() {
    // Capturar el ID desde la URL
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // Obtener el personaje desde el servicio compartido
    const personajeArray = this.personajeService.getPersonajes();
    const encontrado = personajeArray.find(p => p.id === id);

    if (encontrado) {
      // Clonamos para no mutar directamente antes de guardar
      this.personaje = { ...encontrado };
    } else {
      // Manejar caso si no se encuentra el personaje
      console.error('Personaje no encontrado');
    }
  }

  guardarCambios() {
    if (!this.personaje) return;

    //Actualizamos el personaje en el servicio compartido
    this.personajeService.actualizarPersonaje(this.personaje);

    //Navegamos de vuelta a la lista de personajes
    this.router.navigate(['/tabs/personajes']); // reemplaza con la ruta real
  }
}