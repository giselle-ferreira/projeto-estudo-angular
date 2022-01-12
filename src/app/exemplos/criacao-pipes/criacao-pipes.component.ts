import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criacao-pipes',
  templateUrl: './criacao-pipes.component.html',
  styleUrls: ['./criacao-pipes.component.scss']
})
export class CriacaoPipesComponent implements OnInit {

  numeros = [1, 2, 3]

  add(){
    this.numeros.push(1)
    // o push não altera o array original

    // ou
    // this.numeros = [...this.numeros, 1]
    // dessa forman não precisa incluir pure: false, porque assim ele muda a referência da memória, do array.
  }

  query = ''

  linguagens = [
    'Python',
    'Ruby',
    'Typescript',
    'Perl',
    'Haskell',
    'C++',
    'C#',
    'C',
    'Rust',
    'Java',
    'Go',
    'PHP',
    'Cobol',
    'Javascript',
    'Clojure',
    'Julia',
    'Fortran',
    'Lua',
    'Kotlin',
    'VisualG',
    'Portugol',
    'Elixir',
    'Swift',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
