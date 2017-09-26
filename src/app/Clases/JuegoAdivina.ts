import {Juego} from './juego';

export class JuegoAdivina extends Juego  {

    numeroIngresado:number;
    numeroSecreto:number;
    
    constructor(nom:string,gano:boolean,jugador:string)
    {
        super("Adivina el Numero",gano,jugador)
        
    }
    
    generarNuevo()
    {
        this.numeroSecreto= Math.floor(Math.random()*9+1);
    
    
        console.info("Numero: " + this.numeroSecreto);
    
    }
    
           
        public Verificar(){
            if(this.numeroIngresado == this.numeroSecreto)
            {
                this.gano = true;
                console.info("Gano");
                return true;
             }
            else
                 this.gano = false;
                console.info("Perdio");
                return false;
        }

    
}