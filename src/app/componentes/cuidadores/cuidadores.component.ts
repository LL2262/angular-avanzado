import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuidadores',
  templateUrl: './cuidadores.component.html'
})
export class CuidadoresComponent implements OnInit {

  public titulo: string;

  constructor() {

    this.titulo = 'Cuidadores';
   }

  ngOnInit() {
  }

}
