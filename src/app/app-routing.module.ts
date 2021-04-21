import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeelComponent } from './components/feel/feel.component';
import { LookComponent } from './components/look/look.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { IngresaComponent } from './components/ingresa/ingresa.component';

const routes: Routes = [
  {path: 'menu', component: FeelComponent },
  {path:'look', component:LookComponent},
  { path: 'buscar', component: BusquedaComponent },
  { path: 'ingresar', component: IngresaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'ingresar' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
