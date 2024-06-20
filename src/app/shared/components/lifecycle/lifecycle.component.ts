import { CommonModule } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.scss'
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() count!: Observable<number>
  @Input() title!:string 

  titleFormatted = ''
  innerCounter = 1
  innerCount = 0

  constructor(){
    console.log(this.count)
  }

  ngOnInit(): void {
      this.titleFormatted = `👋 ${this.title}`
  }

  ngAfterViewInit(): void {
      console.log('AfterViewInit')
      console.log(this.count)
  }

  ngAfterViewChecked(): void {
      console.log('AfterViewChecked')
  }
  
  ngAfterContentInit(): void {
      console.log('AfterContentInit')
  }


  ngAfterContentChecked(): void {
      console.log('AfterContentChecked')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes)
  }

  ngDoCheck(){
    console.log('ngDoCheck')
    // this.innerCount = this.count + this.innerCount
  }

  ngOnDestroy(): void {
      console.log('ngOnDestroy')
  }
}
