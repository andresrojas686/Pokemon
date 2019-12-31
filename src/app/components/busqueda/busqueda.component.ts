import { Component, OnInit } from '@angular/core';
import { PokemonesService } from '../../servicios/pokemones.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {
  pokemons: any[];
  termino: string;
  constructor( private pokemonService: PokemonesService, private router: Router,
               private activateRoute: ActivatedRoute ) {
    this.activateRoute.params.subscribe( params => {
      this.pokemons = pokemonService.resultBusqueda( params[ 'patron' ] );
      this.termino = params['patron'];
    } );
  }
  verPokemon(i: number ) {
    this.router.navigate( ['/pokemon', i] );
  }

  ngOnInit() {

  }

}
