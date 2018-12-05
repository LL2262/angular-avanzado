import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {fundido} from '../animation';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  animations: [fundido]
})
export class RegistroComponent implements OnInit {

  public titulo: string;

  constructor( private _route: ActivatedRoute, private _router: Router){

    this.titulo = 'Registro';

   }

  ngOnInit() {
  }

}