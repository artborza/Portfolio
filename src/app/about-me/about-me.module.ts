import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponentComponent } from './about-me-component/about-me-component.component';
import { AboutMeServiceService } from './about-me-service.service';



@NgModule({
  declarations: [AboutMeComponentComponent],
  imports: [
    CommonModule
  ],
  providers:[AboutMeServiceService],
  exports:[AboutMeComponentComponent]
})
export class AboutMeModule { }
