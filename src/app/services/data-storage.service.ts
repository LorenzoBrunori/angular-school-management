import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./user.interface";

@Injectable({providedIn:'root'})
export class DataStorageService {

    constructor (private http: HttpClient){}

    postUser(user: User){
        return this.http.post<User>('http://localhost:3000/users', user);
    }
}