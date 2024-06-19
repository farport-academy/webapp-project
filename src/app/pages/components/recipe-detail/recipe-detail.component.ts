import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, HostListener, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Recipe } from '../../models/recipe';

import { RecipesService } from '../../../data/services/recipes.service';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { SemaphoreComponent } from '../../../shared/components/semaphore/semaphore.component';
@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    SemaphoreComponent,
    NgOptimizedImage
  ],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.scss'
})
export class RecipeDetailComponent {

  private activatedRoute = inject(ActivatedRoute);
  private recipesService = inject(RecipesService)



  id = this.activatedRoute.snapshot.params['id']
  q = this.activatedRoute.snapshot.queryParams['q']
  queryPArams = this.activatedRoute.snapshot.queryParamMap
  recipe: Observable<Recipe> = this.recipesService.getRecipe(this.id)
  
  constructor() {
    console.log('/:id', this.id)
    console.log('/:id?q', this.q)
    console.log('tutti i parametri', this.queryPArams)
  } 

  imageSizes= {
    width: 400,
    height: 400
  }



  
}
