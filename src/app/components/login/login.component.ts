import { HttpClient } from "@angular/common/http";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "src/app/services/auth.service";
import { map } from "rxjs/operators";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  @ViewChild("loginForm") loginForm: NgForm;
  submitted = false;
  users = [];
  user = {
    email: "",
    password: "",
  };

  constructor(private http: HttpClient, private authService: AuthService) {}

  ngOnInit(): void {}

  logIn() {
    this.submitted = true;
    this.user.email = this.loginForm.value.email;
    this.user.password = this.loginForm.value.password;

    this.http
      .get("http://localhost:3000/users")
      .pipe(
        map((responseData) => {
          const usersArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              usersArray.push({ ...responseData[key], id: key });
            }
          }
          return usersArray;
        })
      )
      .subscribe((users) => {
        console.log(users);
        this.users = users;

        for (let i = 0; i < users.length; i++) {
          if (
            users[i].email == this.user.email &&
            users[i].password == this.user.password
          ) {
            this.authService.login();
            break;
          } else {
            console.log("ACCESSO FALLITO");
          }
        }
      });
  }

  logOut() {
    this.authService.logout();
  }
}
