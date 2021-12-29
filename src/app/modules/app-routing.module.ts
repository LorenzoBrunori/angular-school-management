import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "../app.component";
import { AppRoutes } from "../routes/app-routes.routes";


@NgModule({
    imports: [
        // RouterModule.forRoot(appRoutes, {useHash: true})
        RouterModule.forRoot(AppRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}