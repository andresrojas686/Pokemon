import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonesService } from '../../servicios/pokemones.service';
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styles: []
})
export class PokemonComponent implements OnInit {
  pokemon: any = {};
  constructor( private activateRoute: ActivatedRoute,  private pokemonService: PokemonesService ) {
    this.activateRoute.params.subscribe( params =>{
      this.pokemon = pokemonService.getPokemon( params[ 'id' ] );
    } );
   }

  ngOnInit() {
  }

}
