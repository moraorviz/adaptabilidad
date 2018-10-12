import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-actividades-ciclicas',
  templateUrl: './actividades-ciclicas.component.html',
  styleUrls: ['./actividades-ciclicas.component.css']
})
export class ActividadesCiclicasComponent implements OnInit {
  @Input() indice: number;
  noticias: string[];

  constructor() {
    this.noticias = ['Mejores jugadas semanales', '5 razones para seguir la liga', 'La desdicha de los Spurs'];
  }

  ngOnInit() {
  }

}
