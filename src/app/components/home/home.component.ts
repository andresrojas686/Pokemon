import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  leer = false;
  btnText = 'Leer Mas';
  constructor() { }

  ngOnInit() {
  }
  cambiarTexto() {
    if ( this.leer) {
      this.btnText = 'Leer Menos';
    } else {
      this.btnText = 'Leer Mas';
    }
  }

}
