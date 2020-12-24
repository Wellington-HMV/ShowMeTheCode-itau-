import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuOptionComponent } from './menu-option.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [MenuOptionComponent],
  exports:[MenuOptionComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule
  ]
})
export class MenuOptionModule { }
