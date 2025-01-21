import { Component, OnInit } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: false,
})
export class InicioPage implements OnInit {

  componentes: Componente[]=[
   {
    icon: 'american-football-outline',
    name: 'actionsheet',
    redirectTo: '/actionsheet'
   },
   {
    icon: 'alert-circle-outline',
    name: 'alert',
    redirectTo: '/alert'
   },
   {
    icon: 'beaker-outline',
    name: 'Avatar',
    redirectTo: '/avatar'
   },
   {
    icon: 'radio-button-off-outline',
    name: 'Botones',
    redirectTo: '/botones'
   },
   {
    icon: 'card-outline',
    name: 'Cards',
    redirectTo: '/card'
   },
   {
    icon: 'card-outline',
    name: 'Check',
    redirectTo: '/check'
   } 
  ];

  constructor() { }

  ngOnInit() {
  }

}
