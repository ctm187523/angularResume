import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TotalServiceService {

  

  //creamos un BehaviorSubject para la gestion de envio de datos a otros componentes con los que se podran suscribir
  //El objeto BehaviorSubject nos ofrece que ya tiene un valor predefinido por defecto, cuando arranca el servicio
  private _totalContador: BehaviorSubject<number>; 

  //constructor
  constructor() {

    this._totalContador = new BehaviorSubject<number>(0);

   }

   //al pulsar en home-component el pulsador se añade uno a la suma
   add(){
    let total = this._totalContador.value; //sumamos un nuevo estudiante
     this._totalContador.next(total +1); //emitimos el total usando next a los que esten subscritos
   }

   //metodo get para recuperar el total donde retornamos el objeto BehaviourSubject como un observable para
   //que otros componentes se puedan suscribir
   get totalContador(){
    return this._totalContador.asObservable();
   }
}
