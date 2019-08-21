import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { retry, map } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {
  constructor() {
    this.regresaObservable()
      //.pipe(retry(2))
      .subscribe(
        numero => console.log('subs to', numero),
        error => console.error('error en el observable', error),
        () => console.log('el observador termino')
      );
  }

  ngOnInit() {}

  regresaObservable(): Observable<any> {
    return new Observable((observer: Subscriber<any>) => {
      let contador = 0;
      const intervalo = setInterval(() => {
        contador += 1;
        const salida = {
          valor: contador
        };
        observer.next(salida);
        if (contador === 3) {
          clearInterval(intervalo);
          observer.complete();
        }
        // if (contador === 2) {
        //   clearInterval(intervalo);
        //   observer.error('HELP!!!');
        // }
      }, 1000);
    }).pipe(map(respuesta => respuesta.valor));
  }
}
