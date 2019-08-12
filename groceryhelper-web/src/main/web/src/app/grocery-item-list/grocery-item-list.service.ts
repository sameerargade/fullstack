import { Injectable } from "@angular/core";
import URL_CONFIG from "../url.config";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, BehaviorSubject } from "rxjs";
import { catchError, map, tap, switchMap } from "rxjs/operators";
import { GroceryItemModel } from "../model/grocery-item-model";
import { SearchItemModel } from "../model/search-item-model";

@Injectable({
  providedIn: "root"
})
export class GroceryItemListService {
  constructor(private httpClient: HttpClient) {}
  public listGroceryItems() :Observable<any> {
    const groceryListUrl = URL_CONFIG.GROCERY_ITEM_LIST;
    const headers: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
    });
    const options = { headers: headers};

    return this.httpClient.get(groceryListUrl,options);
}
public deleteGroceryItem(id:number) :Observable<any> {
  const groceryDeleteUrl = URL_CONFIG.GROCERY_ITEM_DELETE + "/" + id;
  const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
  });
  const options = { headers: headers};

  return this.httpClient.get(groceryDeleteUrl,options);
}
public listGroceryItemsByTag(searchModel:SearchItemModel) :Observable<any> {
  const grocerySearchUrl = URL_CONFIG.GROCERY_ITEM_SEARCH;
  const body = JSON.stringify(searchModel);
    console.log('URL: ' + grocerySearchUrl + ' Lodgement: ' + body);
    const headers: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
    });
    const options = { headers: headers};

    return this.httpClient.post(grocerySearchUrl, body, options);
  
}
}
