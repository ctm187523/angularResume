

//este servicio no le hace falta @Injectable ya que no se le añade otro servicio
//ester servicio sera añadido al servico lista-service.service
export class ServicioService {

  mostrarAlert( mensaje:String) {
    return alert(mensaje);
  }
}
