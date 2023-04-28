import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from './empleados/Empleado';
import { EmpleadoAlimentos } from './registro-alimentos-empleados/EmpleadoAlimentos';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoServicioService {
  private apiUrl = 'http://localhost:8080/api/empleados';
  private apiUrlEmpleado = 'http://localhost:8080/api/empleados/existe';
  private apiUrlAlimentos = 'http://localhost:8080/api/alimentos';
  constructor(private http: HttpClient) { }

  getEmpleados() {
    return this.http.get(this.apiUrl);
  }
  registrarEmpleado(empleado:Empleado) : Observable<Object>{
    return this.http.post(`${this.apiUrl}`,empleado);
  }
   //este metodo sirve para obtener o buscar un empleado
   obtenerEmpleadoPorId(id:number):Observable<Empleado>{
    return this.http.get<Empleado>(`${this.apiUrl}/${id}`);
  }
    //este metodo sirve para actualizar el empleado
    actualizarEmpleado(id:number,empleado:Empleado) : Observable<Object>{
      return this.http.put(`${this.apiUrl}/${id}`,empleado);
    }
    eliminarEmpleado(id:number): Observable<Object>{
      return this.http.delete(`${this.apiUrl}/${id}`);
    }
//metodo para verificar que existe empleado
    obtenerEmpleado(id: number): Observable<Empleado> {
      return this.http.get<Empleado>(`${this.apiUrlEmpleado}/${id}`);
    }

    registrarEmpleadoAlimentos(empleadoAlimentos:EmpleadoAlimentos) : Observable<Object>{
      return this.http.post(`${this.apiUrlAlimentos}`,empleadoAlimentos);
    }

}

