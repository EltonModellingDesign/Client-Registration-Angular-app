import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NovoComponent } from './components/templates/main/routing-main/novo/novo.component';
import { ListaComponent } from './components/templates/main/routing-main/lista/lista.component';

const routes: Routes = [
  {path: '', component: NovoComponent},
  {path: 'Lista', component: ListaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
