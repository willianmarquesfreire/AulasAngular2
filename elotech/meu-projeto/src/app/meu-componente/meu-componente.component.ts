import { Component, OnInit } from '@angular/core';

declare let window:any;

@Component({
  selector: 'app-meu-componente',
  templateUrl: './meu-componente.component.html',
  styleUrls: ['./meu-componente.component.scss']
})
export class MeuComponenteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  alerta() {
    window.alert("ola")
  }

}
