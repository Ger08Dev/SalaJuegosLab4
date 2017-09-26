import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  usuario:string='';
  pass:string='';
  
  constructor(
    ) {
     }

  

  ngOnInit() {
  }
 
  entrar=function(){
    if(this.usuario === "admin" &&  this.pass === "1234" )
    {
      //this.router.navigate(['/principal']);  
    }
  }

}
