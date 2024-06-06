import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';


const components = [
  AboutComponent,
  HomeComponent,
  RecipesComponent,
  RecipeDetailComponent
]
@NgModule({
  declarations:components ,
  imports: [
    CommonModule,
    ComponentsModule,
    NgOptimizedImage
  ],
  exports: components
})
export class PagesModule { }
