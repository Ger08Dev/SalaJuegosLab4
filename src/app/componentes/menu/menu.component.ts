import { Component, OnInit } from '@angular/core';
import { ParamMap , ActivatedRoute, Router } from "@angular/Router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
  private router: Router) { }

  ngOnInit() {
  }

  Juego(tipo : string){
    switch (tipo){
      case 'adivina':
          this.router.navigate(['/adivina']);
          break;
      case 'agilidad':
          this.router.navigate(['/agilidad']);
          break;
      case 'adivinaMasListado':
          this.router.navigate(['/adivinaMasListado']);
          break;
      case 'agilidadMasListado':
          this.router.navigate(['/agilidadMasListado']);
          break;
      case 'listado':
          this.router.navigate(['/menulistado']);
        break;
    }
}
}

