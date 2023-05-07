import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { students } from '../interfaces';
import { ListaServiceService } from '../lista-service.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent {

  //atributos
  nombre:string;
  estado:string;

  //en el constructor inyectamos el servicio Router de angular core para poder usar rutas programaticas
  //que mediante botones envian a una ruta concreta
  //inyectamos tambien en el servidor el servicio creado por mi ListaServiceService
  constructor(private router:Router, private service:ListaServiceService){}

  //metodo para volver al home usando en la importacion del constructor el servicio Router de angular core
  //usamos el metodo navigate de Router
  volverHome(){

    this.router.navigate(['/'])

  }

//metodo para agregar un nuevo estudiante a la lista usa el servicio inyectado en el constructor ListaServiceSevice
  Agregar(){
    
    //creamos un nuevo estudiante de tipo students
    const estudiante:students = {
      nombre: this.nombre,
      estado: this.estado
    }
    
    this.service.agregarEstudiante(estudiante);
    
    //al agregar el nuevo usuario lo redirigimos al Home 
    this.router.navigate(['/'])
  }
}
