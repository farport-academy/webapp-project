import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  standalone: true,
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
    title: string = "titolo del componente layout"
    private date:number = new Date().getFullYear()
    get currentYear():number{
      return this.date
    }

    ngOnInit(){}

}
