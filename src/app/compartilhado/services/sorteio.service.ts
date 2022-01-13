import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SorteioService {

  constructor() { }

  // recebe uma lista de nomes
  // escolhe um numero q vai de 0 ate o tamanho do array, garantindo q nao tera numero quebrado
  // o observable traz o retorno da função e termina

  sortear(nomes: string[]): Observable<string>{
    return new Observable((subscriber) => {
      if(nomes.length === 1){
        subscriber.error('Lista vazia');
      } else {
        const sorteado = Math.floor(Math.random() * nomes.length)

        subscriber.next(nomes[sorteado]);
        subscriber.complete();
      };

    })
  }

}
