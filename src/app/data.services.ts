
//servicio para usar base de datos firebase usando Realtime Database ver video 33 pildoras informaticas Angualar

import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { students } from './interfaces';
import { environment } from "src/environments/environment.development";
import { of } from 'rxjs';

@Injectable()
export class DataServices {

    //en el constructor inyectamos HttpClient para conectar con Firebase antes importada en app.module.ts
    constructor(private httpClient: HttpClient) { }

    //creamos un metodo para guardar en la base de datos Firebase los estudiantes
    guardarEstudiantes(estudiante: students) {

        //he usado como primer parametro la url de la base de datos en firebase usando las variables de entorno
        //creadas en src/environments/environment.development y como segundo parametro la lista de estudiantes
        //usamos un observable con subscribe, el que explica en el video 33 en pildorasinformaticas Angualar
        //lo pone como absoleto uso el que recomienda en la web -> https://rxjs.dev/deprecations/subscribe-arguments
        //importando of de rxjs
        of(this.httpClient.post(environment.urlFirebase, estudiante).subscribe({

            error: (e) => console.log("Error" + e),
            complete: () => console.log("Se ha agregado un estudiante"),
        }

        ));

    }

    //metodo para cargar los estudiantes de la base de datos Firebase
    cargarEstudiantes() {  
        //return this.httpClient.get(environment.urlFirebase);
        const request = new XMLHttpRequest();
        request.open('GET', environment.urlFirebase, false); 
        request.send(null);
        const response = JSON.parse(request.responseText);
        return response;
    }

}