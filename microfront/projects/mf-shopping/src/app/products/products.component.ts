import { Component, OnInit } from '@angular/core';
import { IProductCard } from '../models/product-card.interface';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private _dataService: DataService) {}
  products: IProductCard[] = [];

  ngOnInit(): void {
    this._dataService.getData().subscribe((response) => {
      this.products = response;
    });
  }
}
