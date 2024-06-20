import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, Subject, map, of, switchMap, takeUntil } from 'rxjs';
import { LifecycleComponent } from '../../../shared/components/lifecycle/lifecycle.component';

type TaskItem = {
  id: number;
  title: string;
  done: boolean;
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports:[CommonModule, LifecycleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  a: number = 6;
  b: number = 6;
  // creo il subject
  destroy = new Subject<boolean>();
  taskList: TaskItem[] = [
    {
      id: 1,
      title: 'fare la spesa',
      done: true,
    },
    {
      id: 2,
      title: "Gettare l'immondizia",
      done: false,
    },
    {
      id: 3,
      title: 'Annaffiare le piante',
      done: false,
    },
    {
      id: 4,
      title: 'Preparare il pranzo',
      done: false,
    },
  ];

  counter$: Observable<any> = new Observable((subscriber) => {
    let counter = 0;
    const intervalId = setInterval(() => {
      // console.log(counter);
      subscriber.next(counter++);
    }, 1000);
    // letto solo all'unsubscribe
    return () => {
      clearInterval(intervalId);
    };
    // subscriber.complete()
  }).pipe(
    takeUntil(this.destroy)
  );

  counter!:number

  ngOnInit() {

    // this.counter$.pipe(
    //   takeUntil(this.destroy)
    // ).subscribe(res => {
    //   this.counter = res
    // })
    // const source = of(1, 2, 3, 4, 5);
    // const example = source.pipe(map((val) => val * 2));

    // example.subscribe((val) => console.log(val));
  }
  
  stopEmission(){
    this.counter$ = this.counter$.pipe(
      takeUntil( this.destroy),
      switchMap(
        res => of(res + 100)
      )
    )
    this.destroy.next(true)
  }

  ngOnDestroy() {
    // emetto il valore al destroy
    this.destroy.next(true);
  }

  trackById(index: number, item: TaskItem) {
    return item.id;
  }
}
