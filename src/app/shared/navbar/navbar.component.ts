import { Component } from '@angular/core';

interface MenuItem {
  ruta: string;
  texto: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor() { }

  ngOnInit(): void {
  }

  menu: MenuItem[] = [
    {ruta: '/movie/home', texto: 'Home'},
    {ruta: '/movie/buscar', texto: 'Buscar'},
  ];


}
