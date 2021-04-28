import { Component, OnInit } from '@angular/core';
import { AboutMeServiceService } from '../about-me-service.service';

@Component({
  selector: 'app-about-me-component',
  templateUrl: './about-me-component.component.html',
  styleUrls: ['./about-me-component.component.css']
})



export class AboutMeComponentComponent implements OnInit {
  aboutMe:String
  constructor(private abourMeService:AboutMeServiceService) { }

  abotMe =""

  ngOnInit(): void {
    this.aboutMe = this.abourMeService.getAboutMe();
  }

}
