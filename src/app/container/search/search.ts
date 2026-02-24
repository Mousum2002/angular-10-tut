import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
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

  @ViewChild('searchInput',{static:false}) searchInputEl:ElementRef;

  @Output()
  searchTextChange:EventEmitter<string> = new EventEmitter<string>();
  // inputln:HTMLInputElement
  updateSearchText(){
    this.searchText = this.searchInputEl.nativeElement.value;
    this.searchTextChange.emit(this.searchText);
}

}

