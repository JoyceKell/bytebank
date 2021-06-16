import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import {Routes} from '@angular/router';
import { ExtratoComponent } from './extrato/extrato.component';
import { NovaTransferenciaComponent } from './novaTransferencia/nova-transferencia.component';

export const routes: Routes=[
  {path:'extrato',component:ExtratoComponent},
  {path:'',redirectTo: 'extrato',pathMatch:'full'},
  {path:'nova-transferencia',component:NovaTransferenciaComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:  [RouterModule]
})

export class AppRoutingModule{}

