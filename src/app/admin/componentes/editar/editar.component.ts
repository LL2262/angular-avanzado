import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Animal } from '../../../modelos/animal';
import { AnimalService } from '../../../servicios/animal.service';
import { UsuarioService } from '../../../servicios/usuario.service';
import { UploadService } from '../../../servicios/upload.service';
import { GLOBAL } from '../../../servicios/global';

@Component({
  selector: 'admin-editar',
  templateUrl: '../agregar/agregar.component.html',
  providers: [AnimalService, UsuarioService, UploadService]
})
export class AdminEditarComponent implements OnInit {
  public titulo: string;
  public accion: string;
  public identity;
  public token;
  public url: string;
  public animal: Animal;
  public FileToUploads: Array<File>;
  public status: number;
  public idAnimal;


  constructor(private _route: ActivatedRoute, private _router: Router,  private _UsuarioService: UsuarioService, private _UpdateService: UploadService, private _AnimalService: AnimalService){

    this.titulo = 'Editar animal';
    this.accion = 'Editar';
    this.identity = this._UsuarioService.getIdentity();
    this.token = this._UsuarioService.getToken();
    this.url = GLOBAL.url;
    this.animal = new Animal('','','','','','');

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
                    this.idAnimal = response.animal._id;
                }
            },
            error => {
                this._router.navigate(['/home']);
                console.log(<any>error);
            }
        );
    });
   }

   onSubmit(formAddAnimal){
     
    this._AnimalService.editAnimal(this.token, this.idAnimal, this.animal).subscribe(
      response =>{
        if(response.animalUpdate){
          this.status = 202;
          this.animal = response.animalUpdate;

          //Subir imagen
          if(this.FileToUploads){
            this._UpdateService.makeFileRequest(this.url+'upload-image-animal/'+response.animalUpdate._id, [], this.FileToUploads, this.token, 'image')
            .then((result: any)=> {
                this.animal.image = result.animal.image;
                this._router.navigate(['/animal',  result.animal._id]);
            });
          }else{
            this._router.navigate(['/animal',  response.animalUpdate._id]);
          }

        }else{
          this.status = 404;
        }
      },
      error =>{
        var errorMesage = <any>error;

        if(errorMesage != null){
          this.status = 404;
        }
      }
    );

   }

   fileChangeEvent(fileInput: any){
    this.FileToUploads = <Array<File>>fileInput.target.files;
  }

}
