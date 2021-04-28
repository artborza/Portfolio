import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutMeServiceService {

  constructor() { }

  aboutMe:String
  abotMe ="I'm a java Developer,specializing in java ,html ,javascript and sql."
  getAboutMe(){
    return this.abotMe
  }
}
