import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';


declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  key: string;
}

export const ROUTES: RouteInfo[] = [
  {path: '/scpi', title: 'Liste des SCPI ', key: 'SIDEBAR.SCPI', icon: 'nc-icon nc-ruler-pencil', class: ''},
  {path: '/invest', title: 'Mes investissements',key : 'SIDEBAR.INVEST', icon: 'nc-icon nc-layers-3', class: ''},
  {path: '/invest', title: 'Mes simulations',key : 'SIDEBAR.SIMULATION', icon: 'nc-icon nc-layers-3', class: ''},
];

@Component({
  selector: 'app-sidebar',
  imports: [
    NgForOf,
    TranslateModule,
    RouterLink
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {

  menuItems: RouteInfo[] = [];
  version = "1.0.0";

  constructor() {
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }


}
