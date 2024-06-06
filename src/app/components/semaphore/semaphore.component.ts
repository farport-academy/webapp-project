import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-semaphore',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './semaphore.component.html',
  styleUrl: './semaphore.component.scss'
})
export class SemaphoreComponent {
  @Input() amount: number = 0
  caloriesSemaphore(amount:number): string{
    if( amount <= 200){
      return 'green'
    }else if( amount > 200 && amount <= 300){
      return 'orange'
    }else {
      return 'red'
    }
  }
}
