import { CommonModule } from '@angular/common';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { SemaphoreComponent } from '../../../shared/components/semaphore/semaphore.component';
import { Recipe } from '../../models/recipe';
import { RouterModule } from '@angular/router';
import { RecipesService } from '../../../data/services/recipes.service';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SemaphoreComponent,
    ButtonComponent,
    ReactiveFormsModule,
  ],
  styleUrl: './recipes.component.scss',
})
export class RecipesComponent {
  recipesService = inject(RecipesService);
  recipes: Observable<Recipe[]> = this.recipesService.getRecipes();

  searchForm = new FormGroup({
    query: new FormControl('', Validators.required),
  });
  searchActive: boolean = false;

  searchRecipes() {
    const query = this.searchForm.value.query;
    if (typeof query === 'string') {
      this.recipes = this.switchSearchActive(
        true,
        this.recipesService.searchRecipe(query)
      );
    }
  }

  resetSearch() {
    this.recipes = this.switchSearchActive(
      false,
      this.recipesService.getRecipes()
    );
  }

  private switchSearchActive(
    status: boolean,
    obs: Observable<Recipe[]>
  ): Observable<Recipe[]> {
    return obs.pipe(tap((_) => (this.searchActive = status)));
  }
}
