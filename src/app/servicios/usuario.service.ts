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

    registro(usuarioRegistro){
        let params =JSON.stringify(usuarioRegistro);
        let headers = new Headers({'Content-Type':'application/json'});

        return this._http.post(this.url+'registro', params, {headers:headers}).map(res => res.json());
    }
}