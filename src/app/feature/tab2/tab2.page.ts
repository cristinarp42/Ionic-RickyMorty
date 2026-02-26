import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { PersonajeCard } from 'src/app/shared/components/personaje-card/personaje-card.component';
import { HeaderComponent } from "src/app/shared/components/header/header.component";


@Component({
  standalone: true,
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrl: './tab2.page.scss',
  imports: [PersonajeCard, HeaderComponent, IonContent]
})
export class Tab2Page {

  constructor() {}

}
