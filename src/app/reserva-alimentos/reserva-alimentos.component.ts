import { Component } from '@angular/core';
import { EmpleadoServicioService } from '../empleado-servicio.service';
import { Router } from '@angular/router';
import { Empleado } from '../empleados/Empleado';

@Component({
  selector: 'app-reserva-alimentos',
  templateUrl: './reserva-alimentos.component.html',
  styleUrls: ['./reserva-alimentos.component.scss']
})
export class ReservaAlimentosComponent {
  empleado: Empleado = new Empleado();
  constructor(private empleadosService: EmpleadoServicioService, private router: Router) { }


  regresarListaEmpleados() {
    this.router.navigate(['/empleados']);
    }
  guardarEmpleado() {
    this.empleadosService.registrarEmpleado(this.empleado).subscribe(dato => {
      console.log(dato);
  alert("Registro exitoso "+this.empleado)
  this.regresarListaEmpleados();
    },
    );

  }
}
