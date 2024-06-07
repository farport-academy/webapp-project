import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';


const components = [
  AboutComponent,
  HomeComponent,
  RecipesComponent,
  RecipeDetailComponent,
]
@NgModule({
  declarations:components ,
  imports: [
    CommonModule,
    SharedModule,
    NgOptimizedImage
  ],
  exports: components
})
export class PagesModule { }
