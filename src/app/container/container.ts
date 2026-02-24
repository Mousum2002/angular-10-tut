import { Component, ViewChild } from '@angular/core';
import { ProductList } from './product-list/product-list';
import { Search } from './search/search';
import { ProductDetail } from './product-detail/product-detail';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'container',
  imports: [ProductList,Search,ProductDetail,CommonModule],
  templateUrl: './container.html',
  styleUrl: './container.css',
})
export class Container {
  serchText:string = '';
  setSerchTxt(value:string){
    this.serchText = value;
  }
  @ViewChild(ProductList) productListComp: ProductList;
  
}
