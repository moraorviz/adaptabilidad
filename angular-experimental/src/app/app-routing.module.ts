import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JugadoresComponent} from './jugadores/jugadores.component';
import { HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: 'jugadores', component: JugadoresComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
