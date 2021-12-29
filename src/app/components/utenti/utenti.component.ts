import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from 'src/app/shared/user.interface';

@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrls: ['./utenti.component.css']
})
export class UtentiComponent implements OnInit {

  users:  User[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<User[]>("http://localhost:3000/users").subscribe(
      users => {
        this.users = users;
      },
      err => {
        console.log(err);
      }
    )
  }

}
