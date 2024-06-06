import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type TaskItem = {
  id: number,
  title: string,
  done: boolean
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  a: number = 6;
  b: number = 6;

  taskList: TaskItem[] = [
    {
      id: 1,
      title: 'fare la spesa',
      done: true
    }, 
    {
      id: 2,
      title: 'Gettare l\'immondizia',
      done: false
    }, 
    {
      id: 3,
      title: 'Annaffiare le piante',
      done: false
    },
    {
      id: 4,
      title: 'Preparare il pranzo',
      done: false
    }
  ]

  trackById(index:number, item:TaskItem){
    return item.id
  }
}
