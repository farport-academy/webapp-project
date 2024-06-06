import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { Recipe } from '../../models/recipe';
import { SemaphoreComponent } from '../../components/semaphore/semaphore.component';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [CommonModule, SemaphoreComponent],

  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.scss'
})
export class RecipeDetailComponent implements OnInit {

  private activatedRoute = inject(ActivatedRoute);
  private http = inject(HttpClient)

  id = this.activatedRoute.snapshot.params['id']
  recipe!: Observable<Recipe>
  ngOnInit(): void {
      this.recipe = this.getRecipe()
  }

  getRecipe(){
    return this.http.get(`https://dummyjson.com/recipes/${this.id}`).pipe(
      map((res:any)=> {
        console.log(res)
        return res
      })
    )
  }
  
}
