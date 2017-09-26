import { Component, OnInit } from '@angular/core';
import { Juego } from '../../Clases/juego';
import { JuegoService} from '../../servicios/juego.service';

@Component({
  selector: 'app-agilidad-mas-listado',
  templateUrl: './agilidad-mas-listado.component.html',
  styleUrls: ['./agilidad-mas-listado.component.css']
})
export class AgilidadMasListadoComponent implements OnInit {

  
  public listadoParaCompartir: Array<any>;
  public miServicio : JuegoService;

  constructor(miServ:JuegoService) { 
    this.miServicio = miServ;
    this.listadoParaCompartir = new Array<any>();
    this.listadoParaCompartir = this.miServicio.InicializarLista();  
  }

  ngOnInit() {
    
  }

  tomarJuegoTerminado(juego: Juego)
  {
    console.info(juego);
    
    this.listadoParaCompartir.push(juego);
    this.miServicio.CargarLista(this.listadoParaCompartir);

  }
  

}
