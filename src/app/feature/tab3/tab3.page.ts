import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from "src/app/shared/components/header/header.component";
import { PersonajeCard } from "src/app/shared/components/personaje-card/personaje-card.component";


@Component({
  standalone: true,
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrl: './tab3.page.scss',
  imports: [IonContent, HeaderComponent, PersonajeCard],
})
export class Tab3Page {
  constructor() {}
}
