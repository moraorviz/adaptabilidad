import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ActividadesCiclicasComponent } from './actividades-ciclicas/actividades-ciclicas.component';

@NgModule({
  declarations: [
    AppComponent,
    ActividadesCiclicasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
