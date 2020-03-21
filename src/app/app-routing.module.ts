import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { PeliculaComponent } from './components/views/pelicula/pelicula.component';
import { PopularComponent } from './components/views/popular/popular.component';
import { KidsComponent } from './components/views/kids/kids.component';
import { NowPlayingComponent } from './components/views/now-playing/now-playing.component';
import { YearComponent } from './components/views/year/year.component';
import { BestOfComponent } from './components/views/best-of/best-of.component';
import { SearchComponent } from './components/views/search/search.component';


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
  { path: 'movie/:id', component: PeliculaComponent },
  { path: 'year/:id', component: YearComponent },
  { path: 'bestof', component: BestOfComponent },
  { path: 'search/:query', component: SearchComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
