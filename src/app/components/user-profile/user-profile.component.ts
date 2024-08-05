import { Component } from '@angular/core';

import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    HeaderComponent,FooterComponent,NavbarComponent,TopBarComponent,NgClass,RouterLink,
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  constructor(public _themeService:ThemeService,private _showuser:ShowuserService){}
userInfo:any

ngOnInit(): void {
 this._showuser.showuser(this.userInfo).subscribe({
  next:(data)=>console.log(data.user),


 }
  )
 }

}
