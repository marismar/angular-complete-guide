import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientAdded = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomato', 10),
  ];

  constructor() {}

  getIngredients(): Ingredient[] {
    // It's possible to use only this, instead event binding
    this.ingredients = JSON.parse(localStorage.getItem('ingredients'));

    // return this.ingredients;
    return this.ingredients.slice();
  }

  getIngredient(index: number): Ingredient {
    return this.ingredients[index];
  }

  addIngredients(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    this.ingredientAdded.next(this.ingredients.slice());

    localStorage.setItem('ingredients', JSON.stringify(this.ingredients));
  }

  updateIngredients(index: number, newIngredient: Ingredient): void {
    this.ingredients[index] = newIngredient;
    this.ingredientAdded.next(this.ingredients.slice());

    localStorage.setItem('ingredients', JSON.stringify(this.ingredients));
  }

  deleteIngredient(index: number): void {
    this.ingredients.splice(index, 1);
    this.ingredientAdded.next(this.ingredients.slice());

    localStorage.setItem('ingredients', JSON.stringify(this.ingredients));
  }
}
