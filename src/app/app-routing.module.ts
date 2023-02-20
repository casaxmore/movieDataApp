import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieModule } from './movie/movie.module';

const routes: Routes = [
  {
    path: 'movie',
    loadChildren: () => import('./movie/movie.module').then(m => MovieModule)
  },
  {
    path: '**',
    redirectTo: 'movie'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
