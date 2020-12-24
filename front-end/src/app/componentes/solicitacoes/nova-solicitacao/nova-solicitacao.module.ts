import { NgxMaskModule } from 'ngx-mask';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { NovaSolicitacaoComponent } from './nova-solicitacao.component';

@NgModule({
  declarations: [NovaSolicitacaoComponent],
  exports:[NovaSolicitacaoComponent],
  imports: [
    FormsModule,
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatRippleModule,
    MatGridListModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ]
})
export class NovaSolicitacaoModule { }
