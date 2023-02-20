import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit, OnDestroy{

  buscar: string = '';

  constructor(public movieService: MovieService, public route: ActivatedRoute){
    this.route.params.subscribe( parametros => {
      console.log(parametros);
      if (parametros['texto']) {
        this.buscar = parametros['texto'];
        this.buscarPelicula();
      }
    });
  }
  ngOnDestroy(): void {
    console.log('Se destruye');
    this.buscar = '';
  }

  ngOnInit(): void {
    console.log('Estoy dentro');
  }

  buscarPelicula() {
    if ( this.buscar.length === 0) {
      return;
    }
    this.movieService.buscarPelicula( this.buscar )
        .subscribe();
  }

}
