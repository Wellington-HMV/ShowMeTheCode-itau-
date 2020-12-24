import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MenuModule } from './menu/menu.module';

@NgModule({
  declarations: [],
  exports:[MenuModule],
  imports: [
    CommonModule,    
  ]
})
export class SharedModule { }
