import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { AboutComponent } from './components/about/about.component';



const APP_ROUTES: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'favoritos', component: FavoritosComponent },
  {path: 'pokemon/:id', component: PokemonComponent },
  {path: 'busqueda/:patron', component: BusquedaComponent },
  {path: 'about', component: AboutComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
