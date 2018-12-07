import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { fundido } from '../animation';
import { Usuario } from '../../modelos/usuario';
import { GLOBAL } from '../../servicios/global';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  animations: [fundido],
  providers: [UsuarioService]
})
export class RegistroComponent implements OnInit {

  public titulo: string;
  public usuario: Usuario;

  constructor( private _route: ActivatedRoute, private _router: Router, private _UsuarioService: UsuarioService){

    this.titulo = 'Registro';
    this.usuario = new Usuario('','','','','','USUARIO','');

   }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.usuario);
    console.log(this._UsuarioService.registro());
  }

}