import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { PeliculaComponent } from './components/views/pelicula/pelicula.component';
import { PopularComponent } from './components/views/popular/popular.component';
import { KidsComponent } from './components/views/kids/kids.component';
import { NowPlayingComponent } from './components/views/now-playing/now-playing.component';
import { YearComponent } from './components/views/year/year.component';
import { BestOfComponent } from './components/views/best-of/best-of.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'popular', component: PopularComponent },
      { path: 'kids', component: KidsComponent },
      { path: 'nowplaying', component: NowPlayingComponent }
    ]
  },
  { path: 'movie', component: PeliculaComponent },
  { path: 'year/:id', component: YearComponent },
  { path: 'bestof', component: BestOfComponent },
  { path: 'home', redirectTo: '/home/popular', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
