import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { fundido } from '../animation';
import { Usuario } from '../../modelos/usuario';
import { UsuarioService } from '../../servicios/usuario.service';
import { UploadService } from '../../servicios/upload.service';
import { GLOBAL } from '../../servicios/global';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  animations: [fundido],
  providers: [UsuarioService, UploadService]
})
export class UsuarioEditComponent implements OnInit {

  public titulo: string;
  public usuario: Usuario;
  public status: number;
  public identity;
  public token;
  public FileToUploads: Array<File>;
  public url: string;

  constructor(private _UsuarioService: UsuarioService, private _UpdateService: UploadService){

    this.titulo = 'Modifica tu perfil';
    this.identity = this._UsuarioService.getIdentity();
    this.token = this._UsuarioService.getToken();
    this.usuario = this.identity;
    this.url = GLOBAL.url;

   }

  ngOnInit() {

  }

  onSubmit(){
    this._UsuarioService.usuarioUpdate(this.usuario).subscribe(
        response => {
          if(response.user){
            this.status = 200;
            localStorage.setItem('identity', JSON.stringify(this.usuario));

            //Subida de imagen
            this._UpdateService.makeFileRequest(this.url+'upload-image-user/'+this.identity._id, [], this.FileToUploads, this.token, 'image')
                .then((result: any)=> {
                    this.usuario.image = result.user.image;
                    localStorage.setItem('identity', JSON.stringify(this.usuario));
                });

          }else{
            this.status = 404;
          }
        },
        error => {
            this.status = 404;
            console.log(<any>error);
        }
      );
  }

  fileChangeEvent(fileInput: any){
    this.FileToUploads = <Array<File>>fileInput.target.files;
    console.log(this.FileToUploads);
  }

}