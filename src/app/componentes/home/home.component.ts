import { Component, OnInit } from '@angular/core';
import {fundido} from '../animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [fundido]
})
export class HomeComponent implements OnInit {

  public titulo: string;

  constructor(){

    this.titulo = 'Bienvenidos a Zoo';

   }

  ngOnInit() {
  }

}
