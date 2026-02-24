import { Component, Input } from '@angular/core';
import { product_model } from '../../models/product-model';
import { CommonModule } from '@angular/common';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CommonModule,NgStyle],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  @Input()
  product:product_model ;
}
