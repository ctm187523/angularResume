
//servicio para usar base de datos firebase usando Realtime Database ver video 33 pildoras informaticas Angualar

import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { students } from './interfaces';
import { environment } from "src/environments/environment.development";
import axios from 'axios';

@Injectable()
export class DataServices {

    //constructor
    constructor() { }

    //creamos un metodo para guardar en la base de datos Firebase los estudiantes,usamos axios
    async guardarEstudiantes(estudiante: students) {

        await axios.post(environment.urlFirebase, estudiante);
        
    }

    //metodo para cargar los estudiantes de la base de datos Firebase, usamos async await para esperar que se finalize la peticion get
    async cargarEstudiantes() {

        const { data } = await axios.get(environment.urlFirebase);
        console.log(data)
        return data;


    }

}