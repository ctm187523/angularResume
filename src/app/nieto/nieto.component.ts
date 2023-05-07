import { Component, EventEmitter, Output } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { ListaServiceService } from '../lista-service.service';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent {

  //creamos el output para mandar la informacion al padre instanciando la clase EventEmmitter de Angular para crear y emitir
  //eventos entre el componente nieto al componente hijo
  @Output() newId = new EventEmitter<string>();

   //en el constuctor llamamos al servicio ListaServiceService creado que tiene un metodo para crear alerts
   constructor(private servicioAlert:ListaServiceService){

   }
 

  //creamos un metodo que recibe el evento del boton con el id seleccionado y gracias al metodo emit() de la clase
  //EventEmitter emitimos el evento.
  addNewId(value: string) {
    this.newId.emit(value);
    //llamamos al metodo del servicio importado arriba en el constructor para que aparezca un alert
    this.servicioAlert.llamarVentana(value);
  }
}
