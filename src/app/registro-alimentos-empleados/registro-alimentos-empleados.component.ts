import { Component,Input,OnInit  } from '@angular/core';
import { EmpleadoServicioService } from '../empleado-servicio.service';
import { EmpleadoAlimentos } from './EmpleadoAlimentos';
import { Router } from '@angular/router';

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { Empleado } from '../empleados/Empleado';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-registro-alimentos-empleados',
  templateUrl: './registro-alimentos-empleados.component.html',
})
export class RegistroAlimentosEmpleadosComponent implements OnInit {
  @Input() nombreEmpleado: string;

  constructor(private empleadoServicio: EmpleadoServicioService,private empleado:Empleado ,private router: Router) { }


  horaActual: string="";
  fechaActual = new Date();
 mensajeregistroAlimento:string="";
  idEmpleado: number;
  tipoAlimento:string="sin definir";
  existeEmpleado: boolean =false;
  mensajeEmpleado: string | undefined;
  empleadoAlimentos: EmpleadoAlimentos = new EmpleadoAlimentos();
   empleados :EmpleadoAlimentos[] | undefined;
   empleados2: Empleado = new Empleado;
   nombreEmpleadoRecibido: string;

   recibirNombreEmpleado(nombre: string) {
     this.nombreEmpleadoRecibido = nombre;
   }


  guardarEmpleadoAlimentos() {
    this.empleadoServicio.registrarEmpleadoAlimentos(this.empleadoAlimentos).subscribe(dato => {
      console.log(dato);
      this.existeEmpleado=true;

      this.mensajeEmpleado="Empleado Registrado exitosamente"
      this.createPdf();
      this.empleadoAlimentos.id_empleado=0;
      this.empleadoAlimentos.tipo_alimento="";

    }, error=>(
      this.existeEmpleado=false,
      console.log(this.empleadoAlimentos),
     this.mensajeEmpleado="El documento "+this.empleadoAlimentos.id_empleado+" no existe "
    )
    );

  }


  createPdf(){


    const fechaCorta = this.fechaActual.toLocaleDateString('es-ES');
    const filename="ficho "+this.empleadoAlimentos.tipo_alimento
    const pdfdefinition:any={

      content:[
        {
          text:" "+this.empleadoAlimentos.id_empleado+" - "+this.empleadoAlimentos.tipo_alimento,
        },
        {
          text:" "
        },
        {
          text:"--------------------------------------------------------------------------------------------------------- ",
        },
        {
          text:" "+fechaCorta+" - "+this.horaActual,
        }
      ],

    }

    const pdf=pdfMake.createPdf(pdfdefinition).download(filename);


    }


  ngOnInit() {
    setInterval(() => {
      this.mostrarHora();
    }, 1000);
  }


  mostrarHora() {
    const fecha = new Date();
    const horaConSegundos = fecha.toLocaleTimeString('es-ES');
    this.horaActual = horaConSegundos;

  }


}
