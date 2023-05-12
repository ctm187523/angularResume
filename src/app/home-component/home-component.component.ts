import { Component, OnInit } from '@angular/core';
import { students } from '../interfaces';
import { ListaServiceService } from '../lista-service.service';
import { DataServices } from '../data.services';
import { TotalServiceService } from '../total-service.service';

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

  count: number = 0;

  //en el constructor llamamos al servicio dataService de donde obtendremos la lista de estudiantes de FireBase
  constructor(private dataService: DataServices, private service: ListaServiceService, private contService: TotalServiceService) {

  }

  //usamos en el ngOnInit async await para que hasta que no finalize la peticion get de la lista de estudiantes no se cargue la pagina
  async ngOnInit() {

    this.listEstudiantes = await this.service.obtenerEstudiantesFireBase();

  }

  //metodo para hacer que se muestre o no la lista cambiando el valor del booleano mostrar
  toogle(): void {
    this.mostrar = !this.mostrar;
  }

  //usamos el observable creado en TotalServiceService para usar observables y ver su funcionamiento
  contador() {
    this.contService.add();
    this.contService.totalContador.subscribe(contador => {
      this.count = contador;
    }

    )
  }
}
