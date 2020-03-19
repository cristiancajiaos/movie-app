import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Módulos */
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
