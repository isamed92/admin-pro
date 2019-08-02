import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @Input('nombre') leyenda: string = 'leyenda';
  @Input() porcentaje: number = 50;

  @ViewChild('txtProgress', {static: false}) txtProgreso: ElementRef;
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    // console.log('leyenda:',this.leyenda);
    // console.log('porcentaje:',this.porcentaje);
   }

  ngOnInit() {
    // console.log('leyenda:',this.leyenda);
    // console.log('porcentaje:',this.porcentaje);
  }
  onChanges(newValue: number){
    // let elementoHTML: any = document.getElementsByName('porcentaje')[0];
    // console.log(elementoHTML.value);
    // console.log(this.txtProgreso);

    if(newValue >= 100 ){
      this.porcentaje = 100;
    } else if (newValue <= 0){
      this.porcentaje = 0;
    }  else {
      this.porcentaje = newValue;
    }

    this.txtProgreso.nativeElement.value = this.porcentaje;
    // elementoHTML.value = this.porcentaje;

    this.cambioValor.emit(this.porcentaje);
    this.txtProgreso.nativeElement.focus();

  }

  cambiarValor(valor: number) {
    if (this.porcentaje >= 100 && valor>0) {
      this.porcentaje = 100;
      return;
    }
    if (this.porcentaje <= 0 && valor < 0) {
      this.porcentaje = 0;
      return;
    }
    this.porcentaje = this.porcentaje + valor;
    this.cambioValor.emit(this.porcentaje);
  }

}
