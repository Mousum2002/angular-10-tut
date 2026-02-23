import { Component,EventEmitter,Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  imports: [FormsModule],
  templateUrl: './filter.html',
  styleUrl: './filter.css',
})
export class Filter {
  @Input()
  all:number;
  @Input()
  inStock:number;
  @Input()
  outOfStock:number;


  @Output()
  selectedFilterRationChanged:EventEmitter<string> = new EventEmitter<string>();

  selectedFilterButton:string = "all";


  onSelectedFilterButtonChanged(){
    this.selectedFilterRationChanged.emit(this.selectedFilterButton);
  }

}
