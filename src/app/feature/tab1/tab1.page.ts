import { IonContent } from '@ionic/angular/standalone';
import { Component, ViewChild } from '@angular/core';
import { PersonajeCard } from "src/app/shared/components/personaje-card/personaje-card.component";
import { HeaderComponent } from "src/app/shared/components/header/header.component";





@Component({
  standalone: true,
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrl: './tab1.page.scss',
  imports: [PersonajeCard, HeaderComponent, IonContent],
})
export class Tab1Page {
  @ViewChild(PersonajeCard) personajeCard!: PersonajeCard;
  constructor(
   
  ) {}
   ionViewWillEnter() {
    console.log('ionViewWillEnter: tutu');
    this.personajeCard.cargarPersonajes()
  }
}
