import { CommonModule } from '@angular/common';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Observable, map, takeUntil } from 'rxjs';
import { SemaphoreComponent } from '../../../shared/components/semaphore/semaphore.component';
import { Recipe } from '../../models/recipe';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { RecipesService } from '../../../data/services/recipes.service';
import { EssentialComponent } from '../../../shared/core/essentialComponent';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss'
})
export class RecipesComponent extends EssentialComponent{
  recipesService = inject(RecipesService)
  recipes: Observable<Recipe[]> = this.recipesService.getRecipes()

  
  ngOnInit(){
    this.recipes.pipe(
      takeUntil(this.destroy$)
    ).subscribe(
      res =>{
        console.log(res)
      }
    )
  }

}
