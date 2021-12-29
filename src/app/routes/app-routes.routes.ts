import { Routes } from "@angular/router";
import { AppComponent } from "../app.component";
import { HomeComponent } from "../components/home-component/home-component.component";
import { PaginaNontrovataComponent } from "../components/pagina-nontrovata/pagina-nontrovata.component";
import { RegistrazioneComponent } from "../components/registrazione/registrazione.component";

export const AppRoutes: Routes = [
    { path: '', component: HomeComponent },
    
    { path: 'registrazione', component: RegistrazioneComponent},

    { path: '**', redirectTo: '', pathMatch: 'full'}
];