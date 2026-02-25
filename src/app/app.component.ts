import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { TabsPage } from './tabs/tabs.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [TabsPage, IonApp, IonRouterOutlet],
  standalone: true
})
export class AppComponent {
  constructor() {}
}
