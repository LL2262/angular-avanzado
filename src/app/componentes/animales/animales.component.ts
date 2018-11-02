import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html'
})
export class AnimalesComponent implements OnInit {

  public titulo: string;

  constructor() { 

    this.titulo = 'Animales';
  }

  ngOnInit() {
    console.log(localStorage.getItem('email'));
  }

}
