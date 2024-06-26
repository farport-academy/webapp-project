import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, HostListener, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { Recipe } from '../../models/recipe';
import { SemaphoreComponent } from '../../../shared/components/semaphore/semaphore.component';
import { SharedModule } from '../../../shared/shared.module';
import { RecipesService } from '../../../data/services/recipes.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.scss'
})
export class RecipeDetailComponent {

  private activatedRoute = inject(ActivatedRoute);
  private recipesService = inject(RecipesService)



  id = this.activatedRoute.snapshot.params['id']
  recipe: Observable<Recipe> = this.recipesService.getRecipe(this.id)
  
  imageSizes= {
    width: 400,
    height: 400
  }



  
}
