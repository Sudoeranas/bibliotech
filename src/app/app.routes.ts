// app.routes.ts

import { Routes } from '@angular/router';
import { LivresComponent } from './livres/livres.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';

export const routes: Routes = [
  { path: '', redirectTo: '/livres', pathMatch: 'full' },
  { path: 'livres', component: LivresComponent },
  { path: 'utilisateurs', component: UtilisateursComponent }
];
