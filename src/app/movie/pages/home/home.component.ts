import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cartelera: any;
  populares: any;
  infantiles: any;

  constructor( public movieService: MovieService) {

    this.movieService.getCartelera()
        .subscribe( data => {
          this.cartelera = data;
        });

    this.movieService.getPopulares()
        .subscribe( data => {
          this.populares = data;
        });

   }

  ngOnInit(): void {
  }
}
