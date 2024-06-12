import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  standalone: true,
  imports: [RouterModule],
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() url : any[] = []
}
