import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Animal } from '../../modelos/animal';
import { AnimalService } from '../../servicios/animal.service';
import { GLOBAL } from '../../servicios/global';

@Component({
  selector: 'animal-detalle',
  templateUrl: './animal-detalle.component.html',
  providers: [AnimalService]
})
export class AnimalDetalleComponent implements OnInit {
  public titulo: string;
  public url: string;
  public animal: Animal;

  constructor(private _route: ActivatedRoute, private _router: Router, private _AnimalService: AnimalService){

    this.titulo = 'Detalle de ';
    this.url = GLOBAL.url;

   }

   ngOnInit(){
       this.getAnimal();
   }    

   getAnimal(){
    this._route.params.forEach((params: Params) => {
        let id = params['id'];

        this._AnimalService.getAnimal(id).subscribe(
            response => {
                if(response.animal){
                    this.animal = response.animal;
                    console.log(this.animal);
                }
            },
            error => {
                this._router.navigate(['/home']);
                console.log(<any>error);
            }
        );
    });
   }

}
