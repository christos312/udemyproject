import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../shared/ingredient.mode";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
      new Ingredient('Apples', 5),
      new Ingredient('Orange', 10)
  ];
  constructor() { }

  ngOnInit() {
    console.log(this.ingredients);
  }

  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }
}
