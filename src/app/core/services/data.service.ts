import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';


@Injectable()
export class DataService {

  customer = [{
    "name":"Иван Петров",
    "cards": [
          

    ]
  }];


  constructor() { }


  // getProducts() : Observable<T> {
  //   return of(this.products);
  // }




}