import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//importamos el componente inicio
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  //creacion de ruta y ruta peresoza
  {
  path: "",component:InicioComponent
  },
  { 
    path: "inicio",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
