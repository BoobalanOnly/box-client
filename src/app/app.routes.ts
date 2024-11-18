import { Routes } from '@angular/router';
import { BoxListComponent } from './box-list/box-list.component';
import { BoxComponent } from './box/box.component';

export const routes: Routes = [
  { path: '', component: BoxListComponent },
  { path: 'box/:id', component: BoxComponent },
];
