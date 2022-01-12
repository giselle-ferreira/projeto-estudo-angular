import { Component, OnInit } from '@angular/core';
import { Pacientes } from './model/pacientes';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit {

  pacientes: Pacientes[] = []

   listaPacientes = [
    {nome: 'Joao Silva', email:'joao@gmail.com', genero: 'M', cpf: '12345678923'},
    {nome: 'Ana Clara', email:'ana@gmail.com', genero: 'F', cpf: '12345678923'},
    {nome: 'Maria Souza ', email:'maria@gmail.com', genero: 'F', cpf: '12345678923'},
    {nome: 'Joana Oliveira', email:'joana@gmail.com', genero: 'F', cpf: '12345678923'},
  ]

  newAttribute: any = {};

  add() {
    this.listaPacientes.push(this.newAttribute)
    this.newAttribute = {};
}

  del(pct: any){
    const index = this.listaPacientes.indexOf(pct)
    var confirmDel = confirm('Confirma exclusão do paciente?')
    if(confirmDel === true){
      this.listaPacientes.splice(index, 1)
    } else {
      alert('Paciente não excluído.')
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
