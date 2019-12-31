import { Component, OnInit } from '@angular/core';
import { PokemonesService } from '../../servicios/pokemones.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html'
})
export class FavoritosComponent implements OnInit {
  favoritos: any[] = [];
  constructor( private pokemonesService: PokemonesService, private router: Router ) {
  }
  ngOnInit() {
    this.favoritos = this.pokemonesService.getFavoritos();
    // console.log(this.favoritos);
  }
  verPokemon(i: number ) {
    this.router.navigate( ['/pokemon', i] );
  }
}

