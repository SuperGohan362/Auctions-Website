import { Component, Input, OnInit } from '@angular/core';
import {ItemModel} from "./item.model";
import {HttpClient, HttpParams} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-browsing',
  templateUrl: './browsing.component.html',
  styleUrls: ['./browsing.component.css']
})

export class BrowsingComponent implements OnInit {


  Items: ItemModel[] = [];

  readonly ROOT_URL = 'http://localhost:8080/restapi/api';
  ItemsObservable : Observable<ItemModel[]>;
  items: any;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private httpClient: HttpClient) {

  }

  ngOnInit() {
    this.getItems()
  }

  getItems() {
    const params = new HttpParams();
    let subcategory_id : string;

    if(this.route.snapshot.queryParamMap.has('subcategory')){
      subcategory_id = this.route.snapshot.queryParamMap.get('subcategory');
    }

    if(this.route.snapshot.queryParamMap.has('category')){
      if (this.route.snapshot.queryParamMap.get('category') != 'All')
      {
        params.append('category', this.route.snapshot.queryParamMap.get('category'));
      }
    }

    if(this.route.snapshot.queryParamMap.has('text')){
      params.append('text', this.route.snapshot.queryParamMap.get('text'));
    } else {
      this.ItemsObservable = this.httpClient.get<ItemModel[]>(this.ROOT_URL + '/categories/items/' + subcategory_id);
      return;
    }

    console.log(params.toString());

    this.ItemsObservable = this.httpClient.get<ItemModel[]>(this.ROOT_URL + '/items/search', {params});
  }

}
