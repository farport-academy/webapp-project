import { Routes } from '@angular/router';

import { InfoComponent } from './pages/components/nested/info/info.component';
import { NestedComponent } from './pages/components/nested/nested.component';
import { RecipeDetailComponent } from './pages/components/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './pages/components/recipes/recipes.component';
import { HomeNestedComponent } from './pages/components/nested/home/home.component';

export const globalRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/components/home/home.component').then(
        (m) => m.HomeComponent
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/components/about/about.component').then(
        (m) => m.AboutComponent
      ),
  },
  {
    path: 'recipes',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/components/recipes/recipes.component').then(
            (m) => m.RecipesComponent
          ),
      },
      {
        path: ':id',
        loadComponent: () =>
          import(
            './pages/components/recipe-detail/recipe-detail.component'
          ).then((m) => m.RecipeDetailComponent),
      },
    ],
  },
  {
    path: 'contacts',
    loadComponent: () => import('./pages/components/contacts/contacts.component').then(m => m.ContactsComponent),
  },
  {
    path: 'nested',
    loadChildren: () =>
      import('./pages/components/nested/nested-routes.module').then(
        (m) => m.NestedModule
      ),
  },
];

export const nestedRoutes: Routes = [
  {
    path: '',
    component: NestedComponent,
    children: [
      {
        path: '',
        component: HomeNestedComponent,
      },
      {
        path: 'info',
        component: InfoComponent,
      },
    ],
  },
];
