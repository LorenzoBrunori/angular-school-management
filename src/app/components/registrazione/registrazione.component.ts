import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { DataStorageService } from 'src/app/services/data-storage.service';
import { User } from 'src/app/services/user.interface';
@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {

  @ViewChild('formObj', {static:false}) form:NgForm;



  constructor(
    private dataHandling: DataStorageService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    const user = this.createUser(form.value);


    this.dataHandling.postUser(user).subscribe(data => {
      console.log(data);
    }, er => {
      console.log(er)
    }
    );
  }

  createUser(value: any){
    const body: User = new newUser(value.nome, value.cognome, value.numero_telefono,value.sesso,value.eta, value.ruolo, value.email, value.password);
    return body;
  }
}

class newUser implements User{
  nome: string;
  cognome: string;
  numero_telefono: string;
  sesso: string;
  eta: string;
  ruolo: string;
  email: string;
  password: string;
  constructor(nome, cognome, numero_telefono, sesso, eta, ruolo, email, password){
    this.nome = nome;
    this.cognome = cognome;
    this.numero_telefono = numero_telefono;
    this.sesso = sesso;
    this.eta = eta;
    this.ruolo = ruolo;
    this.email = email;
    this.password = password;
  }
}