import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Animal } from '../../../modelos/animal';
import { AnimalService } from '../../../servicios/animal.service';
import { UsuarioService } from '../../../servicios/usuario.service';
import { GLOBAL } from '../../../servicios/global';
import { Response } from '@angular/http';

@Component({
  selector: 'admin-listado',
  templateUrl: './listado.component.html',
  providers: [AnimalService, UsuarioService]
})
export class AdminListadoComponent implements OnInit {
  public titulo: string;
  public url: string;
  public animales: Animal[];
  public token;

  constructor(private _route: ActivatedRoute, private _router: Router, private _UsuarioServicio: UsuarioService, private _AnimalService: AnimalService){

    this.titulo = 'Listado de Animales';
    this.url = GLOBAL.url;
    this.token = this._UsuarioServicio.getToken();

   }

   ngOnInit(){
     this._AnimalService.getAnimals().subscribe(
       response =>{
        if(response.animals){
          this.animales = response.animals;
        }
       },
       error => {
        console.log(<any>error);
       }
     );
   }

   getAnimales(){
    this._AnimalService.getAnimals().subscribe(
      response =>{
       if(response.animals){
         this.animales = response.animals;
       }
      },
      error => {
       console.log(<any>error);
      }
    );
   }

   onDelete(id){
    this._AnimalService.deleteAnimal(this.token, id).subscribe(
      response =>{
        if(response.animal){
          this.getAnimales();
        }

      },
      error => {

      }
    );
   }

}
