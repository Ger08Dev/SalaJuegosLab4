import { Injectable } from '@angular/core';
import { Juego } from '../clases/Juego'

@Injectable()
export class JuegoService {

  myArrayServicio : Array<Juego>;

  constructor() { 
    this.myArrayServicio = new Array<Juego>();
   }
  

  public CargarLista(ArrayParaPasar:Array<Juego>){
    this.myArrayServicio.concat(ArrayParaPasar);
    console.info("En el Servicio: ",ArrayParaPasar);
  }

  public InicializarLista():Array<Juego>{

    return this.myArrayServicio;
  }

  // public listar(): Array<Juego> {
    
  //       let miArray: Array<Juego> = new Array<Juego>();
  //       miArray.push(new Juego("Adivina",true,"German"));
  //       miArray.push(new Juego("Adivina",false,"Pablo"));
  //       miArray.push(new Juego("Adivina",true,"Ivan"));
  //       miArray.push(new Juego("Adivina",true,"Alan"));
  //       miArray.push(new Juego("Adivina",false,"Juan"));
  //       miArray.push(new Juego("Adivina",true,"Federico"));
       
  //       return miArray;
  //     }

  //     public listarPromesa(): Promise<Array<Juego>> {
  //       let promesa: Promise<Array<Juego>> = new Promise((resolve, reject) => {
  //         let miArray: Array<Juego> = new Array<Juego>();
  //         miArray.push(new Juego("Adivina",true,"German"));
  //         miArray.push(new Juego("Adivina",false,"Pablo"));
  //         miArray.push(new Juego("Adivina",true,"Ivan"));
  //         miArray.push(new Juego("Adivina",true,"Alan"));
  //         miArray.push(new Juego("Adivina",false,"Juan"));
  //         miArray.push(new Juego("Adivina",true,"Federico"));
  //         resolve(miArray);
  //       });
    
  //       return promesa;
  //     }
}
