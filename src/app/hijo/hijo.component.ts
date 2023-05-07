import { Component, Input } from '@angular/core';
import { students } from '../interfaces';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

  //usamos el decorador @Input para recibir la informacion del padre en este caso un array de tipo students
  //y un booleano para la funcionalidad del boton creado en el componente padre(home.component)
  @Input() listaEstudiantes: students[];
  @Input() mostrar: boolean;

 
  //creamos un array donde recibirimos la informacion del nieto
  ids = [''];

  //usamos la funcion para añadir el id al array creado arriba desde el componente nieto
  addId(newId: string) {
    this.ids.push(newId);
  }

}
