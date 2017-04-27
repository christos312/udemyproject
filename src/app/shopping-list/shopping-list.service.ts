import {Ingredient} from "../shared/ingredient.mode";
import {Subject} from "rxjs/Subject";
export class ShoppingListService{
    ingedientsChange = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Orange', 10)
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingedientsChange.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingedientsChange.next(this.ingredients.slice());
    }
}