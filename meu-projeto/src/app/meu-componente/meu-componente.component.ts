import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-componente',
  template: `
    <p>Meu nome é {{nome}}.</p>
  `,
  styleUrls: ['./meu-componente.component.css']
})
export class MeuComponenteComponent implements OnInit {

  nome:String = "Munif Gebara Júnior";

  constructor() { }

  ngOnInit() {
  }

}
