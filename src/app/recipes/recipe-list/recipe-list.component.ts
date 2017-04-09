import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
      new Recipe('Recipe One', 'this is a recipe', 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg'),
      new Recipe('Recipe two', 'Another cool recipe', 'http://www.smithfieldfoods.com/images/home/packaged-brands/gwaltney-food.jpg'),
      new Recipe('Recipe tre', 'Helloe', 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Fast_food_meal.jpg')
  ];
  @Output() recipeWasSelected= new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
    console.log('recipe selcted');
  }

}
