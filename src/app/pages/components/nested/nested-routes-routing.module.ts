import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { nestedRoutes } from "../../../global.routes";



@NgModule({
    imports: [RouterModule.forChild(nestedRoutes)],
    exports: [RouterModule],
  })
  export class NestedRoutingModule {}