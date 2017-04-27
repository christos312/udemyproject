import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.mode";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem(name: string, amount: number){
    let inpName = this.nameInputRef.nativeElement.value;
    let inpAmount = this.amountInputRef.nativeElement.value;
    let tempIng = new Ingredient(inpName, inpAmount);
    this.slService.addIngredient(tempIng);
  }

}
