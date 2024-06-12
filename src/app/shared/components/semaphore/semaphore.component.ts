import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-semaphore',
  templateUrl: './semaphore.component.html',
  standalone: true,
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
