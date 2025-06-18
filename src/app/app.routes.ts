import { Routes } from '@angular/router';
import { CatalogoInicio } from './components/catalogo/catalogo-inicio/catalogo-inicio';

export const routes: Routes = [
  { path: '', component: CatalogoInicio },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];
