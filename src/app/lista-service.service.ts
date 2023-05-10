import { Injectable } from '@angular/core';
import { students } from './interfaces';
import { ServicioService } from './servicio.service';
import { DataServices } from './data.services';

@Injectable()
export class ListaServiceService {

  //en este servicio vamos a añadir el otro servicio creadp servicio.service, necesitamos @Injectable
  //en el constructor añadimos el servicio, agregamos el servicio DataService creado en --> ./data.services
  //para manejar la base de datos en FireBase
  constructor(private servicioVentanaEmergente: ServicioService, private dataService: DataServices) {



  }

  //lista de estudiantes de tipo de la interfaz students que seran servidas(data set) al componente padre app.component
  //LO COMENTAMOS PORQUE USAMOS FIREBASE
  // listEstudiantes: students[] = [
  //   {
  //     nombre: 'Tomas Gonzalez', estado: 'Promocionado'
  //   },
  //   {
  //     nombre: 'Manuel Perez', estado: 'Regular'
  //   },
  //   {
  //     nombre: 'Maria Fontaneda', estado: 'Regular'
  //   },
  //   {
  //     nombre: 'Nicolas Gomez', estado: 'Promocionado'
  //   },
  //   {
  //     nombre: 'Laura Gonzalez', estado: 'Libre'
  //   },
  // ];

   listEstudiantes: students[] = []; //creamos un array vacio para almacenar los datos obtenidos de FireBase

  llamarVentana(IdRecibido: String) {
    this.servicioVentanaEmergente.mostrarAlert(` Id ${IdRecibido} sera agreagado a la lista`);
  }

  agregarEstudiante(estudiante: students) {


   // this.listEstudiantes.push(estudiante); //agregamos el estudiante al array de la lista de estudiantes 


    this.dataService.guardarEstudiantes(estudiante); //agregamos el estudiante a la base de datos firebase
  }

  //metodo para encontrar un estudiante por su id(indice)
  encontrarEstudiante(indice: number) {
    let estudiante: students = this.listEstudiantes[indice];
    return estudiante;
  }

  //metodo para actualizar los datos de un estudiante
  actualizarEstudiante(indice: number, estudiante: students) {

    let estudianteModificado = this.listEstudiantes[indice]; //obtenemos el estudiante a modificar
    //modificamos las propiedades del estudiante
    estudianteModificado.nombre = estudiante.nombre;
    estudianteModificado.estado = estudiante.estado;
  }

  borrarEstudiante(indice: number) {
    //borramos al estudiante con el metodo splice de javascript donde recibimos el indice del estudiante y le
    //damos el valor de 1 ya que solo queremos borrar un estudiante a partir del indice pasado por parametro
    this.listEstudiantes.splice(indice, 1);
  }

  //metodo para obtener los estudiantes de la base de datos ,usando el service dataService creado por mi
  //para cargar los estudiantes de la base de datos Firebase, tenemos que subscribirnos ya que devuelve un observable
  //en la subscripcion creamos un arrayfucntion donde ponemos en el array listEstudiantes los estudiantes
  //recibidos de la base de datos y los retornamos para ser usados cuando un componente inyecte el servicio
  obtenerEstudiantesFireBase() {

    
    this.listEstudiantes = this.dataService.cargarEstudiantes();
     
  }

  //metodo utilizado para que despues de haber registrado un nuevo estudiante en el componete proyectos-cpmponent
  //actualize la lista de estudiantes, recibe un array de tipo students, actualizamos el array creado arriba
  //listEstudiantes con el nuevo array pasado por parametro
  // setEmpleados(estudiantes: students[]) {

  //   this.listEstudiantes = estudiantes;
  //   console.log(this.listEstudiantes)
  // }
}
