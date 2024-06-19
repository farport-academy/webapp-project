import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';

import { MenuItem } from './shared/models/menu';
import { MenuComponent } from './shared/components/menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    LayoutComponent,
    MenuComponent,
    RouterModule
  ],
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

  route = inject(ActivatedRoute)

  ngOnInit(){
    this.route.queryParamMap.subscribe((res)=>{
      console.log(res)
    })
  }


}
