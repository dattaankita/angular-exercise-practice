import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
  ingredients=[
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 10)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
