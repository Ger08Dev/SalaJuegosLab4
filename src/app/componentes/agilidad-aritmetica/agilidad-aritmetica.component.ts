import { Component, OnInit , Output , EventEmitter} from '@angular/core';
import { JuegoArit }from '../../Clases/juegoArit';

@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {

  unJuego:JuegoArit;
  
  @Output()   
  enviarJuego: EventEmitter<any>= new EventEmitter<any>();

  constructor() { 
    
    
    
  }

  NuevoJugador(){
    this.unJuego = new JuegoArit("Agilidad Aritmetica",true,"Ger");
  }

  Generar(){
    this.NuevoJugador();
    this.unJuego.generarNuevo();
     

  }

  Validar(){
    
      this.unJuego.Verificar();
      this.enviarJuego.emit(this.unJuego);
      
  }

  ngOnInit() {
    this.Generar();
  }

}
