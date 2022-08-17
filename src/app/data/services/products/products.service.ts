import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IStore } from 'src/app/core/models/home.models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) { }

  getStores(): Observable<IStore[]> {
    return this._http.get<any>('store');
    // .pipe(
    //   map((response: any) => {
    //     const { data } = response;
    //     const values = data.map((val: any) => ({id: val._id, ...val.atributes}));
    //     return values;
    //   })
    // );
  }


}
