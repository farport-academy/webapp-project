import {
  Directive,
  HostListener,
  Input,
  OnInit
} from '@angular/core';
import { EssentiaDirective } from '../core/essentialDirective';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective extends EssentiaDirective implements OnInit {
  // dipendenze


  // parametri aggiuntivi inseriti nell'elemento in cui abbiammo messo la direttiva
  @Input() color: string = '';
  @Input() tooltip: string | null = null;

  // eventuali variabili per tooltip
  newElement = null;
  newText = null;

  ngOnInit(): void {
    // creo il tooltip se è stato impostato il valore in input
    this.tooltip && this.createTooltip();
    // imposto il colore custom se è valorizzato
    this.setCustomColor(this.color || 'blue');
  }

  // mi metto in ascolto dell'evnto onmouseenter
  @HostListener('mouseenter', ['$event']) onEnter(e: MouseEvent) {
    // cambio il colore
    this.setCustomColor('red');
    // se ho tooltip creo
    this.tooltip && this.setTooltip();
  }

  @HostListener('mouseleave') onLeave(e: MouseEvent) {
    // resetto il colore iniziale
    this.setCustomColor(this.color || 'blue');
    // se ho tooltip rimuovo
    this.tooltip && this.removeTooltip();
  }

  private createTooltip() {
    // creo l'elemento che contiene il tooltip
    this.newElement = this.renderer.createElement('div');
    // creo il testo da mettere dentro il tooltip
    this.newText = this.renderer.createText(this.tooltip || '');

    // imposto gli stili al nuovo elemento creato
    this.renderer.setStyle(this.newElement, 'position', 'absolute');
    this.renderer.setStyle(this.newElement, 'top', '-20px');
    this.renderer.setStyle(this.newElement, 'left', '0');
    this.renderer.setStyle(this.newElement, 'background-color', 'grey');
    // aggancio il nuovo testo al nuovo elemento
    this.renderer.appendChild(this.newElement, this.newText);
    // imposto lo style al mio elemento
    this.renderer.setStyle(this.element.nativeElement, 'position', 'relative');
  }

  private setTooltip() {
    // aggancio il nuovo elemento al mio elemento selezionato
    this.renderer.appendChild(this.element.nativeElement, this.newElement);
  }

  private removeTooltip() {
    // elimino il nuvo elemento dal mio elemento
    this.renderer.removeChild(this.element.nativeElement, this.newElement);
  }

  private setCustomColor(color: string): void {
    this.renderer.setStyle(this.element.nativeElement, 'color', color);
  }
}
