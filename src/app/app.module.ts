import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/views/home/home.component';
import { PeliculaComponent } from './components/views/pelicula/pelicula.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { PeliculaResultComponent } from './components/shared/pelicula-result/pelicula-result.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PeliculaComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    PeliculaResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
