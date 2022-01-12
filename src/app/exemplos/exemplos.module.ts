<<<<<<< HEAD
import { CompartilhadoModule } from './../compartilhado/compartilhado.module';
=======
>>>>>>> b51471adc5a31de200eff5bb4595c68c52bfe0a2
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

<<<<<<< HEAD
import { CriacaoPipesComponent } from './criacao-pipes/criacao-pipes.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { ExemplosRoutingModule } from './exemplos-routing.module';
=======
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ExemplosRoutingModule } from './exemplos-routing.module';
import { DiretivasComponent } from './diretivas/diretivas.component';
>>>>>>> b51471adc5a31de200eff5bb4595c68c52bfe0a2
import { PipesComponent } from './pipes/pipes.component';



@NgModule({
  declarations: [
    DataBindingComponent,
    DiretivasComponent,
<<<<<<< HEAD
    PipesComponent,
    CriacaoPipesComponent
=======
    PipesComponent
>>>>>>> b51471adc5a31de200eff5bb4595c68c52bfe0a2
  ],
  imports: [
    CommonModule,
    FormsModule,
<<<<<<< HEAD
    ExemplosRoutingModule,
    CompartilhadoModule
=======
    ExemplosRoutingModule
>>>>>>> b51471adc5a31de200eff5bb4595c68c52bfe0a2
  ],
  exports: [DataBindingComponent]
})
export class ExemplosModule { }
