import { Component,OnInit  } from '@angular/core';
import { EmpleadoServicioService } from '../empleado-servicio.service';
import { Router } from '@angular/router';
import { Empleado } from './Empleado';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent implements OnInit {
  title = 'restaurante_solla';

  empleados: any;
  empleado:Empleado = new Empleado();
  constructor(private empleadosService: EmpleadoServicioService,private router: Router) { }

  ngOnInit() {
    this.empleadosService.getEmpleados().subscribe((data) => {
      this.empleados = data;

      console.log(data);
    });
  }
  actualizarEmpleado(id: number) {
    this.router.navigate(['actualiza-empleados', id]);
  }

  private obtenerEmpleados() {
    this.empleadosService.getEmpleados().subscribe(dato => {
      this.empleados = dato;

    });
  }
  //este falta crear el componente
  verDetallesDelEmpleado(id: number) {
    this.router.navigate(['empleado-detalles', id]);
  }
  eliminarEmpleado(id:number){

    let response = confirm("Seguro que quieres eliminar?");
if (response === true) {
  // code to execute if the user clicked "OK"
  this.empleadosService.eliminarEmpleado(id).subscribe(dato => {

    alert("Empleado  eliminado")
    this.obtenerEmpleados();


})
} else {
  // code to execute if the user clicked "Cancel"
}


  }

}
