import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Recipe, RecipeResponse } from '../../pages/models/recipe';
import { EssentialService } from '../../shared/core/essentialService';

@Injectable({
  providedIn: 'root',
})
export class RecipesService extends EssentialService {
  constructor() {
    super();
    this.apiPath = 'recipes';
  }

  getRecipes(): Observable<Recipe[]> {
    return this.apiCall<RecipeResponse>({
      type: 'GET',
      url: this.apiUrl,
    }).pipe(
      map((res: RecipeResponse) => {
        return res.recipes;
      })
    );
  }

  getRecipe(id: number | string): Observable<Recipe> {
    return this.apiCall<Recipe>({
      type: 'GET',
      url: `${this.apiUrl}/${id}`,
    });
  }
}
