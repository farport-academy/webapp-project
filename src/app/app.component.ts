import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { ComponentsModule } from './shared/shared.module';
import { MenuItem } from './shared/models/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'webapp-project';
  menuConfig: MenuItem[] = [
    {
      url: '/',
      label: 'Home'
    },
    {
      url:'/about',
      label: 'About'
    },
    {
      url:'/recipes',
      label: 'Recipes'
    }
  ]


}
