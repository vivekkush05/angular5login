import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

@NgModule({
  exports: [HeaderComponent],
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent]
})
export class CoreModule { 
  
}
