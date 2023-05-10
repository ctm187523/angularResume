import { Component, OnInit } from '@angular/core';
import { students } from '../interfaces';
import { ListaServiceService } from '../lista-service.service';
import { DataServices } from '../data.services';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})

//clase que implementa OnInit para usar el metodo al inicializar la clase
export class HomeComponentComponent implements OnInit {


  //creamos un array donde recibiremos los estudiantes del servicio ListaServiceService(Data Service)
  listEstudiantes: students[] = [];
  
  //booleano para mostrar o no la lista
  mostrar: boolean = true;

  //en el constructor llamamos al servicio dataService de donde obtendremos la lista de estudiantes de FireBase
  constructor( private dataService:DataServices, private service:ListaServiceService) {
    
  }

  ngOnInit(): void {
    //usamos el servicio listaService y usamos el metodo obtenerEstudiantesFireBase 
    
    this.service.obtenerEstudiantesFireBase();
    this.listEstudiantes = Object.values (this.service.listEstudiantes) ;
    
  }

  //metodo para hacer que se muestre o no la lista cambiando el valor del booleano mostrar
  toogle(): void {
    this.mostrar = !this.mostrar;
  }
}
