import { Component, OnInit, Input } from '@angular/core';
import { IonAvatar, IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
   imports: [IonAvatar, IonItem, IonLabel],
})
export class AvatarComponent  implements OnInit {

  @Input() foto: string = '';
  @Input() nombre: string = '';
  @Input() especie: string = '';
  @Input() genero: string = '';


  constructor() { }

  ngOnInit() {}

}
