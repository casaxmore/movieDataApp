import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MovieService implements OnInit{
  private apikey: string = '4fbe70c04510d216938eb5ad7b5888c8';
  private urlMoviedb: string = 'https://api.themoviedb.org/3';

  /* Para almacenar las películas de la busqueda y así verlas después de volver de una ficha de película */
  peliculas: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }

  getCartelera() {
    let desde = new Date();
    let hasta = new Date();
    hasta.setDate(hasta.getDate() + 7);

    let desdeStr = desde.toISOString().substring(0, 10);
    let hastaStr = hasta.toISOString().substring(0, 10);

    // tslint:disable-next-line: max-line-length
    let url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apikey}&language=es`;

    return this.http.get(url).pipe(map((res: any) => res.results));
  }

  getPopulares() {
    // tslint:disable-next-line: max-line-length
    let url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es`;

    return this.http.get(url).pipe(map((res: any) => res.results));
  }

  buscarPelicula(texto: string) {

      let url = `${this.urlMoviedb}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apikey}&language=es`;

      // Almacenar en el servicio

      return this.http.get(url).pipe(
        map((res: any) => {
          this.peliculas = res.results;
          console.log(this.peliculas);
          return res.results;
        })
      );

  }

  getPelicula(id: string) {
    // tslint:disable-next-line: max-line-length
    let url = `${this.urlMoviedb}/movie/${id}?&api_key=${this.apikey}&language=es`;

    return this.http.get(url).pipe(map((res: any) => res));
  }
}
