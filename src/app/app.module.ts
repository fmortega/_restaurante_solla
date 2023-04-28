import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { FormsModule } from '@angular/forms';
import { EmpleadoServicioService } from './empleado-servicio.service';
import { HttpClientModule } from '@angular/common/http';
import { ReservaAlimentosComponent } from './reserva-alimentos/reserva-alimentos.component';
import { ActualizaEmpleadosComponent } from './actualiza-empleados/actualiza-empleados.component';
import { RegistroAlimentosEmpleadosComponent } from './registro-alimentos-empleados/registro-alimentos-empleados.component';
import { InicioComponent } from './inicio/inicio.component';
import { Empleado } from './empleados/Empleado';


@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    ReservaAlimentosComponent,
    ActualizaEmpleadosComponent,
    RegistroAlimentosEmpleadosComponent,
    InicioComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    HttpClientModule,
  ],
  providers: [Empleado],
  bootstrap: [AppComponent]
})
export class AppModule { }
