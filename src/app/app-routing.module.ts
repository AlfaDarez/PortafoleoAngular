    import { NgModule } from '@angular/core';
    import { Routes,RouterModule} from '@angular/router';
    import { PortafoleoComponent } from './pages/portafoleo/portafoleo.component';
    import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import {ConstactComponent} from './pages/constact/constact.component';

    
        const app_routes: Routes =[
            {   path:'home',        component:PortafoleoComponent   },
            {   path:'about',   component:AboutComponent   },
            {   path:'item',    component:ItemComponent },
            { path:'contact',   component:ConstactComponent},
            {   path:'**',      pathMatch:'full', redirectTo:'home'}

            
        ];





    @NgModule({
        imports:[
            RouterModule.forRoot(app_routes)
        ],
        exports:[
            RouterModule
        ]

    })
    
    export class AppRoutingModule{
        
     }   