import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './servicios/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [UsuarioService]
})

export class AppComponent implements OnInit{

  public titulo: string;

  constructor(private _UsuarioService: UsuarioService){

    this.titulo = 'Angular Avanzado - Zoo';

   }

  ngOnInit(){
    console.log(this._UsuarioService.getIdentity());
    console.log(this._UsuarioService.getToken());
  }
}
