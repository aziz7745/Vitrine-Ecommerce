import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

   // construteur
   constructor(private http: HttpClient) { }
   // declaration de la route de connexion
   private apiUrl = 'http://localhost:3000';

   //get all users
   getUsers(): Observable<users[]>
   {
    return this.http.get<users[]>(this.apiUrl+'/users');
   }


}
