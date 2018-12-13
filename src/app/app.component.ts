import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './servicios/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [UsuarioService]
})

export class AppComponent implements OnInit{

  public titulo: string;
  public identity;

  constructor(private _UsuarioService: UsuarioService, private _router : Router){

    this.titulo = 'Angular Avanzado - Zoo';

   }

  ngOnInit(){
    this.identity = this._UsuarioService.getIdentity();
  }

  ngDoCheck(){
    this.identity = this._UsuarioService.getIdentity();
  }

  logout(){
    localStorage.clear();
    this.identity = null;
  }

}
