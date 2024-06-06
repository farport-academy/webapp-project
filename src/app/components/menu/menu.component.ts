import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MenuItem } from '../../models/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent  {
  @Input() menu: MenuItem[] = [];
  windowWidth: number =  window.innerWidth
  breakpoint: number = 768
  menuVisible: boolean = false

  @HostListener('window:resize', ['$event']) onResize(event: any) {
    this.windowWidth = event.target.innerWidth;
  }

  toggleMenu(){
    this.menuVisible = !this.menuVisible
  }
}
