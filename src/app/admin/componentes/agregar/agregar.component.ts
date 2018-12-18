import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Animal } from '../../../modelos/animal';
import { AnimalService } from '../../../servicios/animal.service';
import { UsuarioService } from '../../../servicios/usuario.service';
import { UploadService } from '../../../servicios/upload.service';
import { GLOBAL } from '../../../servicios/global';

@Component({
  selector: 'admin-agregar',
  templateUrl: './agregar.component.html',
  providers: [AnimalService, UsuarioService, UploadService]
})
export class AdminAgregarComponent implements OnInit {
  public titulo: string;
  public accion: string;
  public identity;
  public token;
  public url: string;
  public animal: Animal;
  public FileToUploads: Array<File>;
  public status: number;


  constructor(private _route: ActivatedRoute, private _router: Router,  private _UsuarioService: UsuarioService, private _UpdateService: UploadService, private _AnimalService: AnimalService){

    this.titulo = 'Añadir animal';
    this.accion = 'Añadir';
    this.identity = this._UsuarioService.getIdentity();
    this.token = this._UsuarioService.getToken();
    this.url = GLOBAL.url;
    this.animal = new Animal('','','','','','');

   }

   ngOnInit(){
   }

   onSubmit(formAddAnimal){
    this._AnimalService.addAnimal(this.token, this.animal).subscribe(
      response =>{
        if(response.animal){
          this.status = 202;
          this.animal = response.animal;

          //Subir imagen
          this._UpdateService.makeFileRequest(this.url+'upload-image-animal/'+response.animal._id, [], this.FileToUploads, this.token, 'image')
                .then((result: any)=> {
                    this.animal.image = result.animal.image;
                });

          //Limpiar formulario
          formAddAnimal.reset();
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
    console.log(this.FileToUploads);
  }

}
