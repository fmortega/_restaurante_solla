import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { Empleado } from '../empleados/Empleado';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoServicioService } from '../empleado-servicio.service';

@Component({
  selector: 'app-actualiza-empleados',
  templateUrl: './actualiza-empleados.component.html',
  styleUrls: ['./actualiza-empleados.component.scss']
})
export class ActualizaEmpleadosComponent implements OnInit {
  @Output() nombreEmpleadoEnviar = new EventEmitter<string>();
  nombreEmpleado: string;
  id!: number;
  empleado:Empleado = new Empleado();

  constructor(private empleadoService:EmpleadoServicioService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empleadoService.obtenerEmpleadoPorId(this.id).subscribe(dato =>{
      this.empleado = dato;
      this.nombreEmpleado=this.empleado.nombre;
    },(error: any) => console.log(error));
  }
  enviarNombre() {
    this.nombreEmpleadoEnviar.emit(this.nombreEmpleado);
  }

  irAlaListaDeEmpleados(){
    this.router.navigate(['/empleados']);

  }

  irAlaListaDeEmpleados2(){
    this.router.navigate(['/empleados']);
    //swal.fire('Empleado actualizado',`El empleado ${this.empleado.nombre} ha sido actualizado con exito`,`success`);
  }

  onSubmit(): void{
    this.empleadoService.actualizarEmpleado(this.id,this.empleado).subscribe(dato => {
      alert("El empleado "+this.empleado.nombre+" ha sido actualizado con exito" );
      this.irAlaListaDeEmpleados();
    },error => alert(error));
  }

}
