import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LoginComponent } from '../componentes/login/login.component';
import { AdivinaElNumeroComponent } from '../componentes/adivina-el-numero/adivina-el-numero.component';
import { AgilidadAritmeticaComponent } from '../componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { RouterModule , Routes } from "@angular/Router";
import { MenuComponent } from '../componentes/menu/menu.component';
import { ErrorComponent } from '../componentes/error/error.component';
import { PrincipalComponent } from '../componentes/principal/principal.component';
import { ListadoComponent } from '../componentes/listado/listado.component';
import { MenuDeListadoComponent } from '../componentes/menu-de-listado/menu-de-listado.component';
import { AdivinaMasListadoComponent } from '../componentes/adivina-mas-listado/adivina-mas-listado.component';
import { AgilidadMasListadoComponent } from '../componentes/agilidad-mas-listado/agilidad-mas-listado.component';


let miRuteo = [
  {path: 'error', component: ErrorComponent},
  {path:'login', component: LoginComponent},
  {path:'adivina', component: AdivinaElNumeroComponent},
  {path:'agilidad', component: AgilidadAritmeticaComponent},
  {path:'listado', component: ListadoComponent},
  {path:'principal', component: PrincipalComponent},
  {path:'menulistado', component: MenuDeListadoComponent},
  {path:'adivinaMasListado', component: AdivinaMasListadoComponent},
  {path:'agilidadMasListado', component: AgilidadMasListadoComponent }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(miRuteo)
  ],
  exports: [
    RouterModule]
})
export class RuteandoModule { }
