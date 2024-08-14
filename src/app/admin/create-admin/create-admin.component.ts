import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-create-admin',
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    ReactiveFormsModule,
    SidebarComponent
],
  templateUrl: './create-admin.component.html',
  styleUrl: './create-admin.component.css'
})
export class CreateAdminComponent {




      constructor(){}
      adminForm: FormGroup<any> = new FormGroup(
        {first_name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(30)]),
        last_name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(30)]),
          email:new FormControl(null,[Validators.required,Validators.email]),
              password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z]/)]),

              });
            // }
    submitadminForm(adminForm:FormGroup){
    console.log(adminForm.value);
    localStorage.setItem('userValue',JSON.stringify(this.adminForm.value))



    }

    }


