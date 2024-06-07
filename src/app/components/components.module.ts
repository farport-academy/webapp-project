import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { SemaphoreComponent } from './semaphore/semaphore.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { MenuComponent } from './menu/menu.component';
import { FormatDirective } from './directives/format.directive';
import { HighlightDirective } from './directives/highlight.directive';

const components = [
  LayoutComponent,
  SemaphoreComponent,
  ButtonComponent,
  MenuComponent,
  HighlightDirective,
  FormatDirective
]

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: components
})
export class ComponentsModule { }
