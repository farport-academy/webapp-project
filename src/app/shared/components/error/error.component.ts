import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent {
  @Input() control!: AbstractControl<any, any> | null
  @Input() errorMessage!: string | undefined
  @Input() globalErrors!: AbstractControl<any, any> | null
  @Input() fieldName!: string | null
}
