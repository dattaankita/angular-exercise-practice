import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("new recipe","good food","https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg"),
    new Recipe("new recipe","good food","https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg")

];
  constructor() { }

  ngOnInit(): void {}

}
