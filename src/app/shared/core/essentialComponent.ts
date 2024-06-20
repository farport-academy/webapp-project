import { Component, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";


@Component({
    template: ''
})
export class EssentialComponent implements OnDestroy{
    destroy$ = new Subject()

    ngOnDestroy(): void {
        this.destroy$.next(null)
        this.destroy$.complete()
    }

}