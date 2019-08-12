import { Injectable } from "@angular/core";
import URL_CONFIG from "../url.config";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, BehaviorSubject } from "rxjs";
import { catchError, map, tap, switchMap } from "rxjs/operators";
import { GroceryItemModel } from "../model/grocery-item-model";

@Injectable({
  providedIn: "root"
})
export class GroceryItemAddService {
  constructor(private httpClient: HttpClient) {}
  public saveGroceryItem(request: GroceryItemModel) :Observable<any> {
    const url = URL_CONFIG.GROCERY_ITEM_ADD;
    const body = JSON.stringify(request);
    console.log('URL: ' + url + ' Lodgement: ' + body);
    const headers: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
    });
    const options = { headers: headers};

    return this.httpClient.post(url, body, options);
}
}
