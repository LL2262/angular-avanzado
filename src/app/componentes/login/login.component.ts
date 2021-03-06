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
  public identity;
  public token;

  constructor(private _route: ActivatedRoute, private _router: Router, private _UsuarioService: UsuarioService){

    this.titulo = 'Login';
    this.usuario = new Usuario('','','','','','USUARIO','');

   }

  ngOnInit() {
    console.log(this._UsuarioService.getIdentity());
    console.log(this._UsuarioService.getToken());
  }

  onSubmit(loginForm) {
    //Loguearse y conseguir datos de usuario
    this._UsuarioService.login(this.usuario).subscribe(
      response => {
        this.identity = response.issetUser;
        if (!this.identity || !this.identity._id) {
          console.log('El usuario no se ha logueado correctamente');
        } else {
          this.identity.password = '';
          //Persistencia de usuario en localStorage
          localStorage.setItem('identity', JSON.stringify(this.identity));

          //Conseguir token
          this._UsuarioService.login(this.usuario, 'true').subscribe(
            response => {
              this.token = response.token;
              if (this.token.length <= 0) {
                console.log('El token no se ha generado');
              } else {
                //Persistencia de token en localStorage
                localStorage.setItem('token', this.token);
                this.status = 202;
                this._router.navigate(['/']);
              }
            },
            error => {
              console.log(<any>error);
              this.status = 505;
            }
          );
        }
      },
      error => {
        console.log(<any>error);
        this.status = 404;
      }
    );
  }

}