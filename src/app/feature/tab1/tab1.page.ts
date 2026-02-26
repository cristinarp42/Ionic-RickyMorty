import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { PersonajeCard } from "src/app/shared/components/personaje-card/personaje-card.component";
import { HeaderComponent } from "src/app/shared/components/header/header.component";


@Component({
  standalone: true,
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrl: './tab1.page.scss',
  imports: [PersonajeCard, IonContent, HeaderComponent],
})
export class Tab1Page {
  constructor() {}
}
