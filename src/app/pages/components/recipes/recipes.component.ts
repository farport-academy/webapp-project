import { CommonModule } from '@angular/common';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { SemaphoreComponent } from '../../../shared/components/semaphore/semaphore.component';
import { Recipe } from '../../models/recipe';
import { RouterModule } from '@angular/router';
import { RecipesService } from '../../../data/services/recipes.service';
import { ButtonComponent } from '../../../shared/components/button/button.component';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SemaphoreComponent,
    ButtonComponent
  ],
  styleUrl: './recipes.component.scss'
})
export class RecipesComponent {
  recipesService = inject(RecipesService)
  recipes: Observable<Recipe[]> = this.recipesService.getRecipes()
}
