import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillComponentComponent } from './skill-component/skill-component.component';
import { SkillService } from './skill.service';



@NgModule({
  declarations: [SkillComponentComponent],
  imports: [
    CommonModule
  ],
  providers:[SkillService],
  exports:[SkillComponentComponent]
})
export class SkillModule { }
