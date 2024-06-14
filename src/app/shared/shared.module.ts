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
import { ReversePipe } from './pipes/reverse.pipe';
import { CustomCurrencyPipe } from './pipes/custom-currency.pipe';
import { ObjToStrArrPipe } from './pipes/obj-to-str-arr.pipe';

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

const pipes = [
  ReversePipe,
  CustomCurrencyPipe,
  ObjToStrArrPipe
]

const importExports = [
  ...components,
  ...directives,
  ...pipes
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
export class SharedModule { }
