import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Servicios
import { PokemonesService } from './servicios/pokemones.service';


// Rutas
import { APP_ROUTING } from './app.routes';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { PokemonTarjetaComponent } from './components/pokemon-tarjeta/pokemon-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FavoritosComponent,
    PokemonComponent,
    BusquedaComponent,
    FooterComponent,
    AboutComponent,
    PokemonTarjetaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    PokemonesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
