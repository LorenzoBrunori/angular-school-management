import { HttpClient } from "@angular/common/http";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  @ViewChild("loginForm") loginForm: NgForm;
  submitted = false;
  user = {
    email: "",
    password: "",
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  logIn() {
    this.submitted = true;
    this.user.email = this.loginForm.value.email;
    this.user.password = this.loginForm.value.password;

    this.http.get("http://localhost:3000/users/1").subscribe((users) => {
      console.log(users);
    });
  }
}
