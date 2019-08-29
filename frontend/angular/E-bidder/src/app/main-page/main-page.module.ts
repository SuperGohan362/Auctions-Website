import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainPageRoutingModule} from "./main-page-routing.module";
import {MainPageComponent} from "./main-page.component";
import {HeaderComponent} from "./header/header.component";
import {LogoComponent} from "./header/logo/logo.component";
import {NavBarComponent} from "./header/nav-bar/nav-bar.component";
import {SearchBarComponent} from "./header/search-bar/search-bar.component";
import {HomeCategoriesComponent} from "./home-categories/home-categories.component";
import {HomeCategoryItemComponent} from "./home-categories/home-category-item/home-category-item.component";
import {HomeSubcategoriesComponent} from "./home-categories/home-subcategories/home-subcategories.component";



@NgModule({
  declarations: [
    HomeCategoriesComponent,
    MainPageComponent,
    HeaderComponent,
    LogoComponent,
    NavBarComponent,
    SearchBarComponent,
    HomeCategoryItemComponent,
    HomeSubcategoriesComponent,
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,

  ]
})
export class MainPageModule { }