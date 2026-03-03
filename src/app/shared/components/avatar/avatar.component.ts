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

  ngOnInit() {
  console.log('AvatarComponent - foto:', this.foto);
  console.log('AvatarComponent - nombre:', this.nombre);
  console.log('AvatarComponent - especie:', this.especie);
  console.log('AvatarComponent - genero:', this.genero);
  }

}
