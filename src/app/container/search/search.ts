import { Component, EventEmitter, Output } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-search',
  imports: [FormsModule,CommonModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  searchText:string = '';

  @Output()
  searchTextChange:EventEmitter<string> = new EventEmitter<string>();
  updateSearchText(inputln:HTMLInputElement){

    this.searchText = inputln.value;
    this.searchTextChange.emit(this.searchText);
}

}

