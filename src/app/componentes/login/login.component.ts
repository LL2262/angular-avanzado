import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {fundido} from '../animation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  animations: [fundido]
})
export class LoginComponent implements OnInit {

  public titulo: string;

  constructor( private _route: ActivatedRoute, private _router: Router){

    this.titulo = 'Login';

   }

  ngOnInit() {
  }

}