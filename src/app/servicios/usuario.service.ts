import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/observable';
import { GLOBAL } from './global';

@Injectable()
export class UsuarioService{
    public url: string;

    constructor(private _http: Http){
        this.url = GLOBAL.url;
    }

    registro(){
        return "Texto desde el servicio";
    }
}