import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { RouterModule } from '@angular/router';
import { PortfolioComponent } from './layouts/portfolio/portfolio.component';
import { PortfolioModule } from './layouts/portfolio/portfolio.module';
import { ComponentsModule } from './components/components.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PortfolioComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    PortfolioModule,
    ComponentsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
