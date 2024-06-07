import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { SemaphoreComponent } from './components/semaphore/semaphore.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormatDirective } from './directives/format.directive';
import { HighlightDirective } from './directives/highlight.directive';

const components = [
  LayoutComponent,
  SemaphoreComponent,
  ButtonComponent,
  MenuComponent,
]

const directives = [
  HighlightDirective,
  FormatDirective
]

const importExports = [
  ...components,
  ...directives
]

@NgModule({
  declarations: importExports,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: importExports
})
export class ComponentsModule { }
