import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Pizza',
      'A savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients.',
      'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      [
        new Ingredient('Tomato', 3),
        new Ingredient('Mozzarella', 5),
        new Ingredient('Parmesan', 5),
        new Ingredient('Flour', 1),
      ]
    ),
    new Recipe(
      'Taco',
      'A traditional Mexican dish consisting of a small hand-sized corn or wheat tortilla topped with a filling. A taco can be made with a variety of fillings, allowing for great versatility and variety.',
      'https://images.unsplash.com/photo-1596215111811-300da822746d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      [
        new Ingredient('Tomato', 5),
        new Ingredient('Salt', 1),
        new Ingredient('Pepper', 2),
        new Ingredient('Taco shells', 12),
      ]
    ),
    new Recipe(
      'Churrasco',
      'It is a prominent feature in the cuisine of Brazil, Uruguay and Argentina. The related term churrascaria (or churrasqueria) is mostly understood to be a steakhouse.',
      'https://images.unsplash.com/photo-1594266063697-304befca9629?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      [
        new Ingredient('Meat', 8),
        new Ingredient('Chicken', 4),
        new Ingredient('Salt', 1),
        new Ingredient('Garlic', 5),
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

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
}
