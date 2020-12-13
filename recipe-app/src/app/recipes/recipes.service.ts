import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [];

  constructor(private shoppingListService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]): void {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice(); // returns a copy of recipes
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  addToShopping(recipe: Recipe): void {
    for (const ingredient of recipe.ingredients) {
      this.shoppingListService.addIngredients(ingredient);
    }
    alert(`Ingredients added to the shopping list!`);
  }

  addRecipe(recipe: Recipe): void {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  update(index: number, newRecipe: Recipe): void {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number): void {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
