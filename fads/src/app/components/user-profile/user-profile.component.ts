import { Component, OnInit } from '@angular/core';
import {UserProfileService} from '../../services/user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userProfileData: any;

  constructor(private userProfileService: UserProfileService) { }

  ngOnInit() {
    this.getUserProfile();
  }

  getUserProfile() {
    this.userProfileService.getUsers().subscribe(result => {
      this.userProfileData = result;
    });
  }

  save(){
    console.log(this.userProfileData);
  }

}
