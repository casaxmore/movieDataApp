import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent {

  pelicula: any;
  regresarA: string = '';
  busqueda: string = '';

  constructor(public movieService: MovieService,
              public route: ActivatedRoute) {

    this.route.params.subscribe( parametros => {
    console.log(parametros);
    this.regresarA = parametros['pag'];

    if (parametros['busqueda']) {
      this.busqueda = parametros['busqueda'];
    }

    this.movieService.getPelicula( parametros['id'] )
        .subscribe( peli => {
          this.pelicula = peli;
          console.log(this.pelicula);
        });
    });
  }

}
