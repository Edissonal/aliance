import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//mopulos

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LookComponent } from './components/look/look.component';
import { FeelComponent } from './components/feel/feel.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { IngresaComponent } from './components/ingresa/ingresa.component';


@NgModule({
  declarations: [
    AppComponent,
    LookComponent,
    FeelComponent,
    BusquedaComponent,
    TablaComponent,
    IngresaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
