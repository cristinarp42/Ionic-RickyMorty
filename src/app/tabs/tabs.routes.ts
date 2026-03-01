import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [

  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadComponent: () => import('../feature/tab1/tab1.page').then((m) => m.Tab1Page)
      },
      {
        path: 'tab2',
        loadComponent:() => import('../feature/tab2/tab2.page').then((m) => m.Tab2Page)
      },
      {
         path: 'tab3',
         loadComponent:() => import('../feature/tab3/tab3.page').then((m) => m.Tab3Page)
      },
      {
        path:'info-character/:id',
        loadComponent:() => import('../feature/info-page/info-page.component').then((m) => m.InfoPageComponent)
      },
      {
        path: 'edit-character/:id',
        loadComponent: () => import('../feature/edit-character/edit-character.page').then( m => m.EditCharacterPage)
      },
      {
        path: '',
        redirectTo: 'tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];