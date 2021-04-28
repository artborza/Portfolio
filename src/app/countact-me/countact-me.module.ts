import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountactMeComponentComponent } from './countact-me-component/countact-me-component.component';
import { ContactMeService } from './contact-me.service';



@NgModule({
  declarations: [CountactMeComponentComponent],
  imports: [
    CommonModule
  ],
  providers:[ContactMeService],
  exports:[CountactMeComponentComponent]
})
export class CountactMeModule { }
