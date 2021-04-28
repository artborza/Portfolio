import { Component, OnInit } from '@angular/core';
import { SkillService } from '../skill.service';

@Component({
  selector: 'app-skill-component',
  templateUrl: './skill-component.component.html',
  styleUrls: ['./skill-component.component.css']
})

export class SkillComponentComponent implements OnInit {
  skills:String[]
  constructor(private skillService:SkillService) { }

  ngOnInit(): void {
    this.skills = this.skillService.getSkills()
  }

}
