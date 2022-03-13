import { Component, OnInit } from '@angular/core';
import { RecipesDataService } from '../services/recipes-data.service';

@Component({
  selector: 'app-recept-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes!: any[];

  constructor(private recipeDataService: RecipesDataService) {
    recipeDataService.getRecipes().subscribe(
      (recipes)=>this.recipes = recipes
    );
  }

  ngOnInit(): void {
  }

}
