import { Component, OnInit } from '@angular/core';
import {fundido} from '../animation';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  animations: [fundido]
})
export class ContactoComponent implements OnInit {

  public titulo: string;
  public email: string;

  constructor() { 

    this.titulo = 'Conctatco';
  }

  ngOnInit() {
  }

  guardarEmail(){
    localStorage.setItem('email', this.email);
    console.log(localStorage.getItem('email'));
  }

}
