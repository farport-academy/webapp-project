import { Injectable } from '@angular/core';
import { Observable, map, pipe } from 'rxjs';
import { Recipe, RecipeResponse } from '../../pages/models/recipe';
import { EssentialService } from '../../shared/core/essentialService';
import { HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RecipesService extends EssentialService {
  constructor() {
    super();
    this.apiPath = 'recipes';
  }

  getRecipes(): Observable<Recipe[]> {
    return this.extractRecipes(
      this.apiCall<RecipeResponse>({
        type: 'GET',
        url: this.apiUrl,
        options: {
          headers: new HttpHeaders({
            Authorization: 'bearer',
            token: 'xyxzasdasd',
          }),
        },
      })
    );
  }

  searchRecipe(query: string): Observable<Recipe[]> {
    return this.extractRecipes(
      this.apiCall<RecipeResponse>({
        type: 'GET',
        url: this.apiUrl + 'search',
        options: {
          params: new HttpParams().set('q', query),
        },
      })
    );
  }

  getRecipe(id: number | string): Observable<Recipe> {
    return this.apiCall<Recipe>({
      type: 'GET',
      url: `${this.apiUrl}/${id}`,
    });
  }

  private extractRecipes(
    obs: Observable<RecipeResponse>
  ): Observable<Recipe[]> {
    return obs.pipe(
      map((res: RecipeResponse) => {
        return res.recipes;
      })
    );
  }
}
