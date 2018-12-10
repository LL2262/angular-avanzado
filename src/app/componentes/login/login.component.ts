import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { fundido } from '../animation';
import { Usuario } from '../../modelos/usuario';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  animations: [fundido],
  providers: [UsuarioService]
})
export class LoginComponent implements OnInit {

  public titulo: string;
  public usuario: Usuario;
  public status: number;

  constructor(private _route: ActivatedRoute, private _router: Router, private _UsuarioService: UsuarioService){

    this.titulo = 'Login';
    this.usuario = new Usuario('','','','','','USUARIO','');

   }

  ngOnInit() {
  }

}