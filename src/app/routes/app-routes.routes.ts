import { Routes } from "@angular/router";
import { AppComponent } from "../app.component";
import { RegistrazioneComponent } from "../components/registrazione/registrazione.component";

export const AppRoutes: Routes = [
    { path: '', component: AppComponent },
    { path: 'registrazione', component: RegistrazioneComponent},

    { path: '**', component: AppComponent }
];