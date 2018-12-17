import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Animal } from '../../../modelos/animal';
import { AnimalService } from '../../../servicios/animal.service';
import { GLOBAL } from '../../../servicios/global';

@Component({
  selector: 'admin-listado',
  templateUrl: './listado.component.html',
  providers: [AnimalService]
})
export class AdminListadoComponent implements OnInit {
  public titulo: string;
  public url: string;
  public animales: Animal[];

  constructor(private _route: ActivatedRoute, private _router: Router, private _AnimalService: AnimalService){

    this.titulo = 'Listado de Animales';
    this.url = GLOBAL.url;

   }

   ngOnInit(){
     this._AnimalService.getAnimals().subscribe(
       response =>{
        if(response.animals){
          this.animales = response.animals;
          console.log(this.animales);
        }
       },
       error => {
        console.log(<any>error);
       }
     );
   }

}
