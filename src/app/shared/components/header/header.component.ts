import { Component } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  imports: [IonHeader, IonTitle, IonToolbar],
})
export class HeaderComponent {}