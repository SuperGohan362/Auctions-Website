import { NgModule } from '@angular/core';
import {RouterModule, Routes, CanActivate} from "@angular/router";
import {MainPageComponent} from "./main-page.component";
import {HomeCategoriesComponent} from "./home-categories/home-categories.component";
import {AuthGuardServise} from "../auth/auth-guard.servise";
import {BrowsingComponent} from "./browsing/browsing.component";
import {Shop_byComponent} from "./shop_by/shop_by.component";


const mainPageRoutes: Routes = [
  {path: 'main',canActivate: [AuthGuardServise],pathMatch: 'prefix', component:MainPageComponent,children: [
      {path: 'home', component:HomeCategoriesComponent},
      {path: 'browse', component:BrowsingComponent},
      {path: 'browse/:id', component:BrowsingComponent},
      {path: 'categories', component: Shop_byComponent},
      {path: 'categories/:id', component: Shop_byComponent}
    ]}

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(mainPageRoutes)
  ],
  exports:[RouterModule],
  providers: [AuthGuardServise]
})
export class MainPageRoutingModule { }
