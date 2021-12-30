import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from 'src/app/shared/user.interface';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrls: ['./utenti.component.css']
})
export class UtentiComponent implements OnInit {

  editMode : string = null;
  userToEdit: User;
  idReference: number;
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
    this.editMode = "edit";
    this.userToEdit = this.users[id];
  }

  onSaveEdit(){
    console.log(this.userToEdit);
  }

  onClose(){
    this.editMode = null;
  }

  onDelete(id: number){
    this.editMode = "delete";
    this.userToEdit = this.users[id];
    this.idReference = id;
  }

  deleteWasApproved(){
    this.http.delete("http://localhost:3000/users/" + this.idReference).subscribe(
      res => {
        this.users.splice(this.idReference);
      },
      err => {
        console.log(err);
      }
    )
  }
}
