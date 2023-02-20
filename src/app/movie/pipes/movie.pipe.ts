import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieImagen'
})
export class MoviePipe implements PipeTransform {

  transform( peliculas: any, poster: boolean = false ): any {

    let url = 'http://image.tmdb.org/t/p/w500';

    if (poster) {
      return url + peliculas.poster_path;
    }

    if (peliculas.backdrop_path) {
      return url + peliculas.backdrop_path;
    } else {
      if (peliculas.poster_path) {
        return url + peliculas.poster_path;
      } else {
        return 'assets/img/noimage.jpg';
      }
    }
  }

}
