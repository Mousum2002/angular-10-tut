import { Component, Input } from '@angular/core';
import { product_model } from '../models/product-model';
import { ProductList } from '../product-list/product-list';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {

  selectedProd:product_model;
  @Input()
  productListComp:ProductList;

  ngOnInit(){
    this.selectedProd= this.productListComp.selectedProduct;
  }

}
