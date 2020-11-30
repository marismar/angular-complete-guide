import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Pizza',
      'A savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients.',
      'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    ),
    new Recipe(
      'Taco',
      'A traditional Mexican dish consisting of a small hand-sized corn or wheat tortilla topped with a filling. A taco can be made with a variety of fillings, allowing for great versatility and variety.',
      'https://images.unsplash.com/photo-1596215111811-300da822746d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    ),
    new Recipe(
      'Churrasco',
      'It is a prominent feature in the cuisine of Brazil, Uruguay and Argentina. The related term churrascaria (or churrasqueria) is mostly understood to be a steakhouse.',
      'https://images.unsplash.com/photo-1594266063697-304befca9629?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe): void {
    this.recipeWasSelected.emit(recipe);
  }
}
