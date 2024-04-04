import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PortfolioComponent } from './layouts/portfolio/portfolio.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path:'',redirectTo:'portfolio',pathMatch:'full',
  },
  {
    path:'test',component:TestComponent
  },

  {
    path:'portfolio',
    component:PortfolioComponent,
    children:[{
      path:'',
      loadChildren: () => import('./layouts/portfolio/portfolio.module').then(m => m.PortfolioModule)
    }]
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
