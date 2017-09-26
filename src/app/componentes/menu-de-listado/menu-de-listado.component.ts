import { Component, OnInit, Input } from '@angular/core';
import { JuegoService} from '../../servicios/juego.service';

@Component({
  selector: 'app-menu-de-listado',
  templateUrl: './menu-de-listado.component.html',
  styleUrls: ['./menu-de-listado.component.css']
})
export class MenuDeListadoComponent implements OnInit {
  
 
  listadoParaCompartir:Array<any> = new Array();
  miServicioJuego : JuegoService;
  
  constructor(miServicio:JuegoService) { 
    this.miServicioJuego = miServicio;    
    this.listadoParaCompartir = this.miServicioJuego.InicializarLista();
    // this.miAdivina1 = new Juego("Adivina",true,"German");
    // this.miAdivina2 = new Juego("Adivina",false,"Pablo");
    // this.miAdivina3 = new Juego("Adivina",true,"Ivan");
    // this.miAdivina4 = new Juego("Adivina",true,"Alan");
    // this.miAdivina5 = new Juego("Adivina",false,"Juan");
    // this.miAdivina6 = new Juego("Adivina",true,"Federico");

    
    // this.listadoParaCompartir.push(this.miAdivina1,this.miAdivina2,this.miAdivina3,this.miAdivina4,this.miAdivina5,this.miAdivina6);
    
  }

  ngOnInit() {
  }

  // llamaService(){
  //   console.log("llamaService");
  //   this.listadoParaCompartir= this.miServicioJuego.listar();// EMPEZAR POR ACA HACER QUE FUNCIONE EL Servicio
  // }

  // llamaServicePromesa(){
  //   console.log("llamaServicePromesa");
  //   this.miServicioJuego.listarPromesa().then((listado) => {
  //       this.listadoParaCompartir = listado;
  //   });
  // }
}
