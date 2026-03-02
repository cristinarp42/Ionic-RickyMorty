import { Result } from './../../shared/models/personaje.model';
import { Component, OnInit } from '@angular/core';
import { IonContent, IonItem, IonLabel, IonList, IonCard, IonCardContent } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { RickMortyService } from '../../shared/services/rickymorty.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from "src/app/shared/components/avatar/avatar.component";


@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss'],
  imports: [IonCard, IonCardContent, IonLabel, IonItem, IonContent, HeaderComponent, CommonModule, AvatarComponent, IonList]
})
export class InfoPageComponent  implements OnInit {
  constructor(
    private rickMortyService: RickMortyService,
    //me coge el parámetro de la url
    private activeRouter: ActivatedRoute
  ) { }

  personaje!: Result; //solo un personaje, no un array
  id: number = 0


  ngOnInit() {
     //Obtengo el id del personaje de la url
    this.activeRouter.paramMap.subscribe(params => {
    this.id = Number(params.get('id'));

    //Carga inicial de los personajes
    this.rickMortyService.cargarInicial();

    //Traer los datos para este compoennte
    this.personaje = this.rickMortyService.getPerspnajesPorId(this.id);
});
}


 
}
