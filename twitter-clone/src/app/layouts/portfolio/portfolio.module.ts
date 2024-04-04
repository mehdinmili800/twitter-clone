import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortFolioRouting } from './portfolio.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from 'src/app/pages/home-page/home-page.component';
import { AboutMeComponent } from 'src/app/pages/about-me/about-me.component';
import { ServicesComponent } from 'src/app/pages/services/services.component';
import { WorksComponent } from 'src/app/pages/works/works.component';
import { ContactComponent } from 'src/app/pages/contact/contact.component';



@NgModule({
  declarations: [
    HomePageComponent,
    AboutMeComponent,
    ServicesComponent,
    WorksComponent,
    ContactComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PortFolioRouting),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PortfolioModule { }
