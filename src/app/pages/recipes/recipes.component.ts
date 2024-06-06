import { CommonModule } from '@angular/common';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { SemaphoreComponent } from '../../components/semaphore/semaphore.component';
import { Recipe } from '../../models/recipe';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss'
})
export class RecipesComponent implements OnInit {

  recipes!: Observable<Recipe[]>

  constructor(
    private http: HttpClient
  ){}

  ngOnInit(): void {
      this.recipes = this.getRecipes()

  }

  getRecipes(){
    return this.http.get('https://dummyjson.com/recipes').pipe(
      map((res:any)=> {
        console.log(res.recipes)
        return res.recipes
      })
    )
  }



}
