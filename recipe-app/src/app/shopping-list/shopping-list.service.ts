import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  //  ingredientAdded = new EventEmitter<Ingredient[]>();
  ingredientAdded = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() {}

  getIngredients(): Ingredient[] {
    // It's possible to use only this, instead event binding
    // return this.ingredients;
    return this.ingredients.slice();
  }

  addIngredients(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    // this.ingredientAdded.emit(this.ingredients.slice());
    this.ingredientAdded.next(this.ingredients.slice());
  }
}
