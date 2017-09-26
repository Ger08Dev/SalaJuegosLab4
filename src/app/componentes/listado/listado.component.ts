import { Component, OnInit , Input} from '@angular/core';

import { Juego }from '../../Clases/juego';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

@Input()
listado:Array<any> ;

  
  constructor() {
   
    
    
    

   }

  ngOnInit() {
    
  }

}
