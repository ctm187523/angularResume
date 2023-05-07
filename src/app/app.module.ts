import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HijoComponent } from './hijo/hijo.component';
import { NietoComponent } from './nieto/nieto.component';
import { FormsModule } from '@angular/forms';
import { ServicioService } from './servicio.service';
import { ListaServiceService } from './lista-service.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { Routes, RouterModule } from '@angular/router';
import { ActualizaComponentComponent } from './actualiza-component/actualiza-component.component';
import { ActualizaConparamsComponent } from './actualiza-conparams/actualiza-conparams.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';
import { DataServices } from './data.services';
import { HttpClientModule} from '@angular/common/http';

//creamos las rutas, usando Routes de angular/router
const appRoutes:Routes=[
  {path:'', component:HomeComponentComponent},
  {path:'nuevos', component:ProyectosComponentComponent},
  {path:'quienes', component:QuienesComponentComponent},
  {path:'contacto', component:ContactoComponentComponent},
  {path:'actualiza/:id', component:ActualizaComponentComponent}, //recibe el argumento id por parametros en la url
  {path:'actualizaconparams/:id', component:ActualizaConparamsComponent},   //recibe el argumento id por parametros en la url
  {path:'**', component:ErrorPersonalizadoComponent} //ponemos path:'**' para redirigir en caso de no reconocer la ruta url, tiene que estar siempre en el ultimo lugar
 
]

//declaracion de los componentes creados
@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    NietoComponent,
    HomeComponentComponent,
    ProyectosComponentComponent,
    QuienesComponentComponent,
    ContactoComponentComponent,
    ActualizaComponentComponent,
    ActualizaConparamsComponent
  ],
  //importaciones
  imports: [
    BrowserModule,
    FormsModule, //importamos para usar NgModel(Banana in BOX)
    RouterModule.forRoot(appRoutes),  //importamos para usar el Router y le decimos que usaremos la constante creada arriba appRoutes
    HttpClientModule, //modulo para usar las peticiones http lo usamos para Firebase para manejar la base de datos
  ],
  // registro de services
  providers: [
    ServicioService,
    ListaServiceService,
    DataServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
