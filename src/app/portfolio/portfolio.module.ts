import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponentComponent } from './portfolio-component/portfolio-component.component';



@NgModule({
  declarations: [PortfolioComponentComponent],
  imports: [
    CommonModule
  ],
  exports:[PortfolioComponentComponent]
})
export class PortfolioModule { }
