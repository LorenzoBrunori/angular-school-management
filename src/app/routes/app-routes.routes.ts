import { Routes } from "@angular/router";
import { AppComponent } from "../app.component";
import { HomeComponent } from "../components/home-component/home-component.component";
import { LoginComponent } from "../components/login/login.component";
import { PaginaNontrovataComponent } from "../components/pagina-nontrovata/pagina-nontrovata.component";
import { RegistrazioneComponent } from "../components/registrazione/registrazione.component";
import { UtentiComponent } from "../components/utenti/utenti.component";
import { AuthGuard } from "../services/auth-guard.service";

export const AppRoutes: Routes = [
  { path: "", component: HomeComponent },

  { path: "utente", canActivate: [AuthGuard], component: UtentiComponent },

  { path: "registrazione", component: RegistrazioneComponent },

  { path: "login", component: LoginComponent },

  { path: "**", redirectTo: "", pathMatch: "full" },
];
