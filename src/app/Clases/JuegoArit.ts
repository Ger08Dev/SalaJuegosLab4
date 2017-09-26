import {Juego} from './juego';

export class JuegoArit extends Juego {


numero1:number;
numero2:number;
operador:number;
numeroIngresado:number;
resulatdoReal: number;
resultadoParticipante: number;
operardorMostrar: string;

constructor(nombre?:string,gano?:boolean,jugador?:string)
{
    super("Agilidad Aritmetica", gano,jugador)
    
    
    this.resultadoParticipante=0;
    
      
      
}

  generarNuevo()
  {
      this.numero1= Math.floor(Math.random()*10);
      this.numero2= Math.floor(Math.random()*10);
      this.operador= Math.floor(Math.random()*4);

      if(this.operador == 0){
          this.operardorMostrar = "+";
          this.resulatdoReal = this.numero1 + this.numero2;
       }
      if(this.operador == 1){
          this.operardorMostrar = "-";
          this.resulatdoReal = this.numero1 - this.numero2;
      }
      if(this.operador == 2){
          this.operardorMostrar = "/";
          this.resulatdoReal = this.numero1 / this.numero2;
      }
      if(this.operador == 3){
          this.operardorMostrar = "x";
          this.resulatdoReal = this.numero1 * this.numero2;
      }
        console.info(this.numero1 +this.operardorMostrar+this.numero2+"="+this.resulatdoReal); 
  }




 public Verificar()
  {     
    
      if(this.resulatdoReal==this.resultadoParticipante)
      {
        this.gano=true;
        console.info("Gano Participate");
      }
      else{
        this.gano=false;
        console.info("Perdio Participate");
      }
      
      
    }
  }