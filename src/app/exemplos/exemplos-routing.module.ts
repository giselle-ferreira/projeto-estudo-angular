<<<<<<< HEAD
import { CriacaoPipesComponent } from './criacao-pipes/criacao-pipes.component';
=======
>>>>>>> b51471adc5a31de200eff5bb4595c68c52bfe0a2
import { PipesComponent } from './pipes/pipes.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: 'data-binding',
    component: DataBindingComponent,
  },
  {
    path: 'diretivas',
    component: DiretivasComponent
  },
  {
    path: 'pipes',
    component: PipesComponent
<<<<<<< HEAD
  },
  {
    path: 'criacao-pipes',
    component: CriacaoPipesComponent
=======
>>>>>>> b51471adc5a31de200eff5bb4595c68c52bfe0a2
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExemplosRoutingModule {}
