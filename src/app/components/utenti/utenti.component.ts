import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from 'src/app/shared/user.interface';

@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrls: ['./utenti.component.css']
})
export class UtentiComponent implements OnInit {

  editMode : boolean = false;
  userToEdit: User;
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

  onEdit(id: number){
    this.editMode = true;
    this.userToEdit = this.users[id];
  }

  onSaveEdit(){
    console.log(this.userToEdit);
  }

  onClose(){
    this.editMode = false;
  }

  onDelete(id: number){
    this.http.delete("http://localhost:3000/users/" + id).subscribe(
      res => {
        this.users.splice(id);
      },
      err => {
        console.log(err);
      }
    )
  }

}
