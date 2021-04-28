import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponentComponent } from './about-me/about-me-component/about-me-component.component';
import { CountactMeComponentComponent } from './countact-me/countact-me-component/countact-me-component.component';
import { PortfolioComponentComponent } from './portfolio/portfolio-component/portfolio-component.component';
import { SkillComponentComponent } from './skill/skill-component/skill-component.component';
import { AboutMeModule } from './about-me/about-me.module';
import { CountactMeModule } from './countact-me/countact-me.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { SkillModule } from './skill/skill.module';

const routes: Routes = [
  {
    path:'aboutMe',
    component:AboutMeComponentComponent
  },
  {
    path:'contactMe',
    component:CountactMeComponentComponent
  },
  {
    path:'portfolio',
    component:PortfolioComponentComponent
  },
  {
    path:'skill',
    component:SkillComponentComponent
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutMeModule,
    CountactMeModule,
    PortfolioModule,
    SkillModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
