import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/observable';
import { GLOBAL } from './global';

@Injectable()
export class AnimalService{
    public url: string;
    public identity;
    public token;

    constructor(private _http: Http){
        this.url = GLOBAL.url;
    }

    addAnimal(token, animal){

        let params =JSON.stringify(animal);
        let headers = new Headers({'Content-Type':'application/json', 'Authorization':token});

        return this._http.post(this.url+'save-animal', params, {headers:headers}).map(res => res.json());
    }

    getAnimals(){

        return this._http.get(this.url+'animales').map(res => res.json());
    }

    getAnimal(id){

        return this._http.get(this.url+'animal/'+id).map(res => res.json());
    }

    
}