import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-show-admins',
  standalone: true,
  imports: [
    SidebarComponent,
    NgFor,
    FormsModule,

  ],
  templateUrl: './show-admins.component.html',
  styleUrl: './show-admins.component.css'
})
export class ShowAdminsComponent {
changeRole() {
throw new Error('Method not implemented.');
}
  constructor(private router:Router){}

  selectedRole:  string = 'admin';
  selectedUser: any;

  admins: any[] = [
    {
      fname: 'John',
      lname: 'Doe',
      gender: 'Male',
      email: 'john@example.com',
      phone_number: '123-456-7890'
    },
    {
      fname: 'Jane',
      lname: 'Smith',
      gender: 'Female',
      email: 'jane@example.com',
      phone_number: '987-654-3210'
    },
    {
      fname: 'Alice',
      lname: 'Johnson',
      gender: 'Female',
      email: 'alice@example.com',
      phone_number: '555-555-5555'
    }
    // Add more user objects as needed
  ];

  movetoCreateAdmin(){
this.router.navigate(['/create-admins'])
  }



}
