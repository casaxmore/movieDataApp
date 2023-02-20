import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MovieRoutingModule } from './movie-routing.module';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { MoviePipe } from './pipes/movie.pipe';


@NgModule({
  declarations: [
    BuscarComponent,
    HomeComponent,
    PeliculaComponent,
    GaleriaComponent,
    MoviePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    MovieRoutingModule,
  ]
})
export class MovieModule { }
