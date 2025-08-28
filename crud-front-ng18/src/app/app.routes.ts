import { Routes } from '@angular/router';
import { ListarComponent } from './producto/listar/listar';
import { DetalleComponent } from './producto/detalle/detalle';
import { EditarComponent } from './producto/editar/editar';
import { NuevoComponent } from './producto/nuevo/nuevo';
import { InicioComponent } from './inicio/inicio';
import { Eliminar } from './producto/eliminar/eliminar';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'producto/listar', component: ListarComponent },
  { path: 'producto/detalle/:id', component: DetalleComponent },
  { path: 'producto/editar/:id', component: EditarComponent },
  { path: 'producto/nuevo', component: NuevoComponent },
   {path: 'producto/eliminar/:id', component: Eliminar},
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
