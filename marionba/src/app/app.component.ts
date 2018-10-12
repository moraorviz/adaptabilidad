import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valor: number;

  constructor() {
    this.valor = 0;
  }

  aumentarValor() {
    if (this.valor < 2) {
      this.valor += 1;
    }
  }

  disminutirValor() {
    if (this.valor > 0) {
      this.valor -= 1;
    }
  }
}
