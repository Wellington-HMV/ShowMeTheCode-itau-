import { NovaSolicitacaoModule } from './nova-solicitacao/nova-solicitacao.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SolicitacoesComponent } from './solicitacoes.component';


@NgModule({
  declarations: [SolicitacoesComponent],
  imports: [
    NovaSolicitacaoModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    CommonModule,
    RouterModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SolicitacoesModule { }
