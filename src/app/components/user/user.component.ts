import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { users } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent 
{
  users!:users[];
  constructor(public userService:UsersService,private route :Router)
  {}
  verif="1";


  Login({value,valid} : NgForm)
  {
  this.userService.getUsers().subscribe(
    (data) => {
      // Handle the data here
      this.users= data;
      for (const user of this.users) {
        if (user.email === value.email && user.password === value.password) 
        {
          this.route.navigate(['/admin/produit']);
          
          break;
        }
        else
        {
          this.verif="0";
          console.log(this.verif);
        }
      }
      
      
    },
    (error) => {
      console.error(error);
    }
  );

  }

}
