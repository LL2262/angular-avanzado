import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { fundido } from '../animation';
import { Usuario } from '../../modelos/usuario';
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
  public status: number;

  constructor(private _route: ActivatedRoute, private _router: Router, private _UsuarioService: UsuarioService){

    this.titulo = 'Registro';
    this.usuario = new Usuario('','','','','','USUARIO','');

   }

  ngOnInit() {
  }

  onSubmit(registerForm){
    this._UsuarioService.registro(this.usuario).subscribe(
      response => {
        if(response.user && response.user._id){
          this.status = 200;
          this.usuario = new Usuario('','','','','','USUARIO','');
          registerForm.reset();
        }else{
          this.status = 404;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}