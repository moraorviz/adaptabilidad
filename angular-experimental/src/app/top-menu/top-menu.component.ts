import { Component, OnInit } from '@angular/core';
import { Elemento } from '../elemento';
import { ELEMENTOS } from '../lista-elementos';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  elementos = ELEMENTOS;

  elementoElegido: Elemento;

  constructor() { }

  ngOnInit() {
  }

  onSelect(elemento: Elemento): void {
    this.elementoElegido = elemento;
  }
}
