import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesComponent } from './componentes.component';
import { ComponentesRoutingModule } from './componentes-routing.module';
import { SharedModule } from '../core/shared/shared.module';
import { SolicitacoesModule } from './solicitacoes/solicitacoes.module';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ComponentesComponent],
  imports: [
    CoreModule,
    CommonModule,
    ComponentesRoutingModule,
    SharedModule,
    SolicitacoesModule,
    RouterModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentesModule { }
