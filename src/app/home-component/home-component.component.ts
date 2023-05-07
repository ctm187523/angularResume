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
  constructor( private dataService:DataServices) {
    
  }

  ngOnInit(): void {
    //usamos el servicio dataService y usamos el metodo caragrEstudiantes) para cargar los
    //estudiantes de la base de datos Firebase, tenemos que subscribirnos ya que devuelve un observable
    //en la subscripcion creamos un arrayfucntion donde ponemos en el array listEstudiantes los estudiantes
    //recibidos de la base de datos
    setTimeout( () => { //ponemos un setTimeout porque al añadir un nuevo estudiante y dirigirlo al home de tiempo de registrarse en firebase y luego obtnerlo

      this.dataService.cargarEstudiantes().subscribe(
        misEstudiantes => {
          this.listEstudiantes =  Object.values(misEstudiantes)
          console.log(this.listEstudiantes)
        }
     );
    },100) //ponemos un pequeño tiempo de espera para esperar que cargue en la firebase los cambios
    
  }




  //metodo para hacer que se muestre o no la lista cambiando el valor del booleano mostrar
  toogle(): void {
    this.mostrar = !this.mostrar;
  }
}
