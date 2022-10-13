import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html'
})
export class ProductHeaderComponent implements OnInit {

  @Output() columnsCountChange = new EventEmitter<number>();
  sort = 'desc'
  itemShowCount = 12

  constructor() { }

  ngOnInit(): void {
  }

  onSortUpdate(newSort: string): void {
    this.sort = newSort;
  }

  onItemUdate(count: number): void {
    this.itemShowCount = count;
  }

  onColumnsUpdated(colsNum: number): void {
    this.columnsCountChange.emit(colsNum)
  }

}
