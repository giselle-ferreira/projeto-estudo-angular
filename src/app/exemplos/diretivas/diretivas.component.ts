import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss']
})
export class DiretivasComponent implements OnInit {

  oculto: boolean = false;

  ocultar(){
    this.oculto = true
  }

  mostrar(){
    this.oculto = false
  }

  alimento: string = ''

  compras = ['arroz', 'carne', 'tempero']

  add(){
    if(this.alimento.length > 0){
      this.compras.push(this.alimento)
      this.alimento = ''
    } else {
      alert('Entrada inválida!')
    }
  }

  //switch
  status: string = 'loading'
  cargo: string = 'junior'

  constructor() { }

  ngOnInit(): void {
  }

}
