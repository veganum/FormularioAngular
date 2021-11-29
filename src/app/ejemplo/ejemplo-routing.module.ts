import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicosComponent } from './basicos/basicos.component';
import { FormTestComponent } from './formTest/formTest.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'formTest', component: FormTestComponent },
      { path: 'basicos', component: BasicosComponent },
      { path: '**', redirectTo: 'basicos' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class EjemploRoutingModule {}
