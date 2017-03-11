import { Component, Input, OnInit } from '@angular/core';
import { Quote } from './quote.model';
import { TabuadaService } from './tabuada.service';

@Component({
  selector: 'tabuada',
  template: `<div>
    <input type="number" (input)="calculaInput($event.target.value)"/>
    <ul *ngFor="let res of resultado">
      <li>{{res.calculo}} : {{res.resultado}}</li>
    </ul>
  
  </div>`
})
export class TabuadaComponent implements OnInit{

  @Input() numero:number;
  inputNumero: number;
  resultado:Array<any>;

  constructor(private tabuadaService: TabuadaService) {
    console.log("ola")
  }

  ngOnInit() {
    this.resultado = this.tabuadaService.calcula(this.numero);
  }

  calculaInput(numero) {
    console.log(numero)
    this.resultado = this.tabuadaService.calcula(numero);
  }

}
