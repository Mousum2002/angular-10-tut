import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header/header.component'
import { TopHeader } from './header/top-header/top-header';
import {ProductList} from './container/product-list/product-list'
import { CommonModule } from '@angular/common';
import { Container } from './container/container';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent,TopHeader,ProductList,CommonModule,Container],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-10-tut');
}
