import { Directive, ElementRef, Renderer2, inject } from "@angular/core";

@Directive()
export class EssentiaDirective {
    element = inject(ElementRef);
    renderer = inject(Renderer2);
}