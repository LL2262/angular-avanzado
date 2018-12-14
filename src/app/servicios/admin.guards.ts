import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UsuarioService } from './usuario.service';

@Injectable()
export class adminGuard implements CanActivate{

    constructor(private _router: Router, private _userService: UsuarioService){
    }

    canActivate(){
        let identity = this._userService.getIdentity();

        if(identity && identity.rol == 'ADMINISTRADOR'){
            return true;
        }else{
            this._router.navigate(['/home']);
            return false;
        }
    }
}
