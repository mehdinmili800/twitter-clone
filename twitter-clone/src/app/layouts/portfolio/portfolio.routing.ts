import { Routes } from "@angular/router";
import { AboutMeComponent } from "src/app/pages/about-me/about-me.component";
import { ContactComponent } from "src/app/pages/contact/contact.component";
import { HomePageComponent } from "src/app/pages/home-page/home-page.component";
import { ServicesComponent } from "src/app/pages/services/services.component";
import { WorksComponent } from "src/app/pages/works/works.component";

export const PortFolioRouting:Routes =[

    {
        path:'',
        redirectTo:'home-page',
        pathMatch:'full',
    },
    {
        path:'home-page',component:HomePageComponent
    },
    {
        path:'about-me',component:AboutMeComponent
    },
    {
        path:'services',component:ServicesComponent
    },
    {
        path:'works',component:WorksComponent
    },
    {
        path:'contact',component:ContactComponent
    }


    
]