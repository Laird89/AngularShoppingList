import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  foodItem: string = '';
  foodItems: string[] = ['Pizza', 'Burger', 'Fries', 'Hot Dog', 'Ice Cream'];

  addToList(){
    this.foodItems.push(this.foodItem);
    this.foodItem = '';
  }

  clearList(){
    this.foodItems = [];
  }
}
