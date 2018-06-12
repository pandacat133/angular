import { Component, OnInit } from '@angular/core';
import {UserProfileService} from './user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: any;

  constructor(
    private userService: UserProfileService
  ) { }

  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo(){
    // this.userService.getUser().subscribe( res => {
    //   this.user = res;
    //   console.log(this.user);
    // })
    this.user = {
      address: "8 Mayfield Hill",
      city: "Long Beach",
      first_name: "Theresa",
      last_name: "Fiddy",
      state: "California",
      zipcode: "90831"
    }
  }

}
