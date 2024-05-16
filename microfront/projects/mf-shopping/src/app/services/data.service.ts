import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IResponseData } from '../models/data-api.interface';
import { IProductCard } from '../models/product-card.interface';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private _httpClient: HttpClient) {}

  getData(): Observable<IProductCard[]> {
    return this._httpClient
      .get<IResponseData>('https://pokeapi.co/api/v2/pokemon/')
      .pipe(
        map((response) => {
          return response.results
            .map<IProductCard>((item:any) => ({
               name: item.name
            }));
        })
      );
  }

 
}
