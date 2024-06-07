import { Routes } from '@angular/router';
import { HomeComponent } from './pages/components/home/home.component';
import { AboutComponent } from './pages/components/about/about.component';
import { RecipesComponent } from './pages/components/recipes/recipes.component';
import { RecipeDetailComponent } from './pages/components/recipe-detail/recipe-detail.component';


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'recipes',
        component: RecipesComponent,
    },
    {
        path: 'recipes/:id',
        component: RecipeDetailComponent
    }
]
