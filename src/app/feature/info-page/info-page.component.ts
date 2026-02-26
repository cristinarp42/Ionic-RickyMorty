import { Result } from './../../shared/models/personaje.model';
import { Component, OnInit } from '@angular/core';
import { IonContent, IonItem, IonLabel, IonList } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { RickMortyService } from '../../shared/services/rickymorty.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from "src/app/shared/components/avatar/avatar.component";


@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss'],
  imports: [IonLabel, IonItem, IonContent, HeaderComponent, CommonModule, AvatarComponent, IonList]
})
export class InfoPageComponent  implements OnInit {
  constructor(
    private rickMortyService: RickMortyService,
    //me coge el parámetro de la url
    private activeRouter: ActivatedRoute
  ) { }

  personaje!: Result;
  id: number = 0


  ngOnInit() {
  this.activeRouter.paramMap.subscribe(params => {
  this.id = Number(params.get('id'));
  this.cargarPersonajes();
});
}


   cargarPersonajes() {
      console.log(this.id)
      this.rickMortyService.getPerspnajesPorId(this.id).subscribe(response => {
        this.personaje= response.results;
        
        console.log(this.personaje)
      })
    }
}
