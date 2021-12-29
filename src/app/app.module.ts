import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistrazioneComponent } from './components/registrazione/registrazione.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { PaginaNontrovataComponent } from './components/pagina-nontrovata/pagina-nontrovata.component';
import { HomeComponent } from './components/home-component/home-component.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrazioneComponent,
    PaginaNontrovataComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
