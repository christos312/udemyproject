import {Recipe} from "./recipe.model";
import {Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.mode";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
@Injectable()
export class RecipeService{

    private recipes: Recipe[] = [
        new Recipe(
            'Recipe One',
            'this is a recipe',
            'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',
            [
                new Ingredient('meat', 1),
                new Ingredient('potate', 20)
            ]
        ),
        new Recipe(
            'Recipe two',
            'Another cool recipe',
            'http://www.smithfieldfoods.com/images/home/packaged-brands/gwaltney-food.jpg',
            [
                new Ingredient('meat', 1),
                new Ingredient('potate', 20)
            ]
        ),
        new Recipe(
            'Recipe tre',
            'Helloe',
            'https://upload.wikimedia.org/wikipedia/commons/2/2e/Fast_food_meal.jpg',
            [
                new Ingredient('meat', 1),
                new Ingredient('potate', 20)
            ]
        )
    ];

    constructor(private slService:ShoppingListService){}
    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(id: number){
        return this.recipes[id];
    }

    addIngtoSP(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}