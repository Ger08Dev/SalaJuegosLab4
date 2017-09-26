export  class Juego{

nombre:string;
gano:boolean;
jugador:string;

constructor(nombre?: string, gano?: boolean,jugador?:string) {
    if (nombre)
      this.nombre = nombre;

    if (gano)
      this.gano = gano;
    if(jugador)
      this.jugador=jugador;
    else
      this.jugador= "natalia natalia";
  }

   

}