import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {BrowsingComponent} from "./browsing.component";
import {ItemComponent} from "./item/item.component";
import {FormsModule} from "@angular/forms";
import {BrowsingFilterPipe} from "./browsing-filter.pipe";
import {PaginationModule} from "ngx-bootstrap";

const routes:Routes = [
  {path: '', component:BrowsingComponent}
];


@NgModule({
  declarations: [
    BrowsingComponent,
    ItemComponent,
    BrowsingFilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    PaginationModule.forRoot()
  ]
})
export class BrowsingModule { }
