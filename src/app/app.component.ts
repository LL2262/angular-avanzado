import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './servicios/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [UsuarioService]
})

export class AppComponent implements OnInit{

  public titulo: string;
  public identity;

  constructor(private _UsuarioService: UsuarioService){

    this.titulo = 'Angular Avanzado - Zoo';

   }

  ngOnInit(){
    this.identity = this._UsuarioService.getIdentity();
  }

  ngDoCheck(){
    this.identity = this._UsuarioService.getIdentity();
  }
}
