import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-tarjeta',
  templateUrl: './pokemon-tarjeta.component.html'
})
export class PokemonTarjetaComponent implements OnInit {

  constructor( private router: Router ) {
    this.pokemonSelect = new EventEmitter();
   }
  @Input() pokemon: any = {};
  @Input() index: number;

  @Output() pokemonSelect: EventEmitter<number>;
  ngOnInit() {
  }
  verPokemon() {
    // this.router.navigate( ['pokemon', this.index] );
    this.pokemonSelect.emit(this.index);
  }

}
