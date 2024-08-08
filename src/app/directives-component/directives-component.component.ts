import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-component',
  templateUrl: './directives-component.component.html',
  styleUrls: ['./directives-component.component.css']
})
export class DirectivesComponentComponent {
  numbers: number[] = [1, 3, 6, 8, 10];
  // void is return type
  // The splice method in JavaScript's array prototype is used to add or remove items from an array. It modifies the original array and returns the removed items (if any).
  removeNumber(i:number):void{
    this.numbers.splice(i,1);
  }
  // array.splice(start, deleteCount, item1, item2, ...);
  // item1, item2, ... (optional): Items to add to the array, starting from the start index. If not specified, splice will only remove items.
}
