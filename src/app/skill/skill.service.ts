import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SkillService {
  skills:string[] =['HTML5','CSS3','JavaScript','Java','SQL']
  constructor() { }

  getSkills():String[]{
    return this.skills
  }
}
