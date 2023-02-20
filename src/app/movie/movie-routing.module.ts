import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'home', component: HomeComponent},
      { path: 'buscar', component: BuscarComponent },
      { path: 'buscar/:texto', component: BuscarComponent },
      { path: 'pelicula/:id/:pag', component: PeliculaComponent },
      { path: 'pelicula/:id/:pag/:busqueda', component: PeliculaComponent },
      { path: '**', redirectTo: 'home' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieRoutingModule {}
