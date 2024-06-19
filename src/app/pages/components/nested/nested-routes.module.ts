import { NgModule } from "@angular/core";
import { HomeNestedComponent } from "./home/home.component";
import { CommonModule } from "@angular/common";
import { NestedRoutingModule } from "./nested-routes-routing.module";
import { RouterModule, RouterOutlet } from "@angular/router";
import { NestedComponent } from "./nested.component";
import { InfoComponent } from "./info/info.component";

@NgModule({
    declarations: [
        HomeNestedComponent,
        NestedComponent,
        InfoComponent
    ],
    imports:[
        CommonModule,
        NestedRoutingModule,
    ],
    bootstrap:[
        NestedComponent
    ]
})
export class NestedModule {}