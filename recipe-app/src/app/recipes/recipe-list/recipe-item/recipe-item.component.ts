import { Component, Input, OnInit } from '@angular/core';

import { Recipe } from '../../recipes.model';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {}

  /* onSelectedItem(): void {
    this.recipesService.recipeSelected.emit(this.recipe);
  } */
}
