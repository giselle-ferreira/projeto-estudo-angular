import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-um',
  templateUrl: './exercicio-um.component.html',
  styleUrls: ['./exercicio-um.component.scss']
})

// Crie uma propriedade que é um array de links de imagens,
// crie um botão para trocar a imagem para a próxima no array.

export class ExercicioUmComponent implements OnInit {

  pictures = [
    'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    'https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=434&q=80',
    'https://images.unsplash.com/photo-1534570122623-99e8378a9aa7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    'https://images.unsplash.com/photo-1532517891316-72a08e5c03a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
  ];


  // o index é usado para acessar o array
  index = 0

  // metodo para avancar para a proxima imagem
  next(){
    if(this.index < this.pictures.length - 1 ){
      this.index++
    } else {
      this.index = 0
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}
