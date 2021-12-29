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

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;
    this.user.email = this.loginForm.value.email;
    this.user.password = this.loginForm.value.password;
  }
}
