import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {
  constructor() {
    let promesa = new Promise((resolve, reject) => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador += 1;
        console.log(contador);
        if (contador == 3) {
          resolve('OK!!');
          // reject('just an error');
          clearInterval(intervalo);
        }
      }, 1000);
    });

    promesa.then(
      (message) => console.log('Termino', message)
    )
    .catch(
      (err) => console.error('error en la promesa',err)
    );
  }

  ngOnInit() {}
}
