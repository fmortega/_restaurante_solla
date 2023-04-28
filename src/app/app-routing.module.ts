import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosComponent } from './empleados/empleados.component';
import { ReservaAlimentosComponent } from './reserva-alimentos/reserva-alimentos.component';
import { ActualizaEmpleadosComponent } from './actualiza-empleados/actualiza-empleados.component';
import { RegistroAlimentosEmpleadosComponent } from './registro-alimentos-empleados/registro-alimentos-empleados.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'empleados', component: EmpleadosComponent },
  { path: 'reservaAlimentos', component: ReservaAlimentosComponent },
  { path: 'actualiza-empleados/:id', component: ActualizaEmpleadosComponent },
  { path: 'registro-alimentos-empleados', component: RegistroAlimentosEmpleadosComponent },

  {path:'',redirectTo:'inicio',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
