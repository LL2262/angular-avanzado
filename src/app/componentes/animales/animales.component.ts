import { Component, OnInit } from '@angular/core';
import {fundido} from '../animation';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  animations: [fundido]
})
export class AnimalesComponent implements OnInit {

  public titulo: string;

  constructor() { 

    this.titulo = 'Animales';
  }

  ngOnInit() {
  }

}
