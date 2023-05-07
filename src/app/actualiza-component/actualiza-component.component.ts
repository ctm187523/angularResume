import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { students } from '../interfaces';
import { ListaServiceService } from '../lista-service.service';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent {


  //atributos
  nombre: string;
  estado: string;
  listaEstudiantes: students[];
  indice:number; //variable para almacenar el id que recibimos por parametro

  //en el constructor inyectamos el servicio Router de angular core para poder usar rutas programaticas
  //que mediante botones o en codigo envian a una ruta concreta
  //inyectamos tambien en el constuctor el servicio creado por mi ListaServiceService
  //inyectamos el servicio de angular/router ActivatedRoute para poder recibir los parametros que en la url obtenemos de hijo.component
  constructor(private router: Router, private service: ListaServiceService, private route:ActivatedRoute) { }


  //usamos el metodo onInit para que al iniciar el componente se ejecute lo que hay en el interior del metodo
  ngOnInit(): void {

    this.listaEstudiantes=this.service.listEstudiantes; //cargamos la lista de estudiantes del servicio ListaServiceService
    this.indice = this.route.snapshot.params['id']; //recibimos los parametros obtenidos en la url en app.module.ts llamamos id a los parametros de la url --> path:'actualiza/:id'
    let estudiante:students = this.service.encontrarEstudiante(this.indice); //almacenamos en la variable estudiante el estudiante con el id seleccionado usando el metodo del servico ListaServiceService
    //le damos valor a los atributos del estudiante seleccionado para que aparezca en el formulario cargado al iniciar
    this.nombre = estudiante.nombre;
    this.estado = estudiante.estado;
  
  }




  //metodo para volver al home usando en la importacion del constructor el servicio Router de angular core
  //usamos el metodo navigate de Router
  volverHome() {

    this.router.navigate(['/'])

  }

  //metodo para actualizar un estudiante de la lista usa el servicio inyectado en el constructor ListaServiceSevice
  actualizaEstudiante() {

    //creamos un nuevo estudiante de tipo students con los atributos modificados
    const estudiante: students = {
      nombre: this.nombre,
      estado: this.estado
    }
    this.service.actualizarEstudiante(this.indice,estudiante);

    //al agregar el nuevo usuario lo redirigimos al Home 
    this.router.navigate(['/']);
  }

  borraEstudiante() {
    this.service.borrarEstudiante(this.indice);
    this.router.navigate(['/']);
  }
}
