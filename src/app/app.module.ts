import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { RegistrazioneComponent } from "./components/registrazione/registrazione.component";
import { AppRoutingModule } from "./modules/app-routing.module";
import { PaginaNontrovataComponent } from "./components/pagina-nontrovata/pagina-nontrovata.component";
import { HomeComponent } from "./components/home-component/home-component.component";
import { LoginComponent } from "./components/login/login.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AuthGuard } from "./services/auth-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    RegistrazioneComponent,
    PaginaNontrovataComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
