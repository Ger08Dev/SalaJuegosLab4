import { Component, OnInit ,Input,Output,EventEmitter } from '@angular/core';
import { JuegoAdivina }from '../../Clases/juegoAdivina';

@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.css']
})



export class AdivinaElNumeroComponent implements OnInit {

@Output()   
  enviarJuego: EventEmitter<any>= new EventEmitter<any>();

  mostrarVerificar :boolean ;
  unJuego:JuegoAdivina;
  //contador:number;

  constructor() { 
    this.NuevoJugador();
    this.mostrarVerificar=false;
    
  }

  NuevoJugador(){
    this.unJuego = new JuegoAdivina("Adivina el numero",true,"Ger");
  }

  Generar(){
    this.NuevoJugador();
    this.unJuego.generarNuevo();
    this.mostrarVerificar=true;  

  }

  Validar(){
    
      this.unJuego.Verificar();
      this.enviarJuego.emit(this.unJuego);
      this.mostrarVerificar=false;
  }
  ngOnInit() {
    this.mostrarVerificar=true;
    //this.Generar();
    
  }

}
