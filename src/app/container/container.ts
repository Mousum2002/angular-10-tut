import { Component } from '@angular/core';
import { ProductList } from './product-list/product-list';
import { Search } from './search/search';

@Component({
  selector: 'container',
  imports: [ProductList,Search],
  templateUrl: './container.html',
  styleUrl: './container.css',
})
export class Container {
  serchText:string = '';
  setSerchTxt(value:string){
    this.serchText = value;
  }
  

}
