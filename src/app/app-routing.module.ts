import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ItemComponent } from './pages/item/item.component';
import { AboutComponent } from './pages/about/about.component';

const app_routes: Routes = [
    { path: 'Home', component: PortafolioComponent},
    { path: 'item/:id', component: ItemComponent},
    { path: 'about', component: AboutComponent},
    { path: '**',pathMatch: 'full' , redirectTo: 'Home'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(app_routes, {useHash: true})
    ],
    exports: [
        RouterModule
    ]
})


export class AppRoutingModule {}