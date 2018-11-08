import { Component, OnInit } from '@angular/core';
import {fundido} from '../animation';

@Component({
  selector: 'app-cuidadores',
  templateUrl: './cuidadores.component.html',
  animations: [fundido]
})
export class CuidadoresComponent implements OnInit {

  public titulo: string;

  constructor() {

    this.titulo = 'Cuidadores';
   }

  ngOnInit() {
  }

}
