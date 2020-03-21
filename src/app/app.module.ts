import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Módulos */
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Componentes */
import { AppComponent } from './app.component';
import { HomeComponent } from './components/views/home/home.component';
import { PeliculaComponent } from './components/views/pelicula/pelicula.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { PeliculaResultComponent } from './components/shared/pelicula-result/pelicula-result.component';
import { LimitToPipe } from './pipes/limit-to.pipe';
import { VotePipe } from './pipes/vote.pipe';
import { PopularComponent } from './components/views/popular/popular.component';
import { KidsComponent } from './components/views/kids/kids.component';
import { NowPlayingComponent } from './components/views/now-playing/now-playing.component';
import { YearComponent } from './components/views/year/year.component';
import { BestOfComponent } from './components/views/best-of/best-of.component';
import { SearchComponent } from './components/views/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PeliculaComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    PeliculaResultComponent,
    LimitToPipe,
    VotePipe,
    PopularComponent,
    KidsComponent,
    NowPlayingComponent,
    YearComponent,
    BestOfComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
