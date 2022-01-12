import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  date = new Date();
  nome = 'João';
  percentual = 0.556834
  salario = 3000;
  user = {name: 'Joao', id: '1'};

  constructor() { }

  ngOnInit(): void {
  }

}
