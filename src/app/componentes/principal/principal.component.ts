import { Component, OnInit } from '@angular/core';
import { JuegoService } from '../../servicios/juego.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  public status: any = {
    isFirstOpen: true,
    isFirstDisabled: false}
    
    
    listadoParaCompartir:Array<any> = new Array();
    

    constructor() { 
      
     }

  ngOnInit() {
  }

}
