import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'})
export class UserProfileService {

  userURL = "https://my.api.mockaroo.com/user.json?key=259f1a90";

  constructor(
    private http: HttpClient
  ) { }

  getUser(){
    return this.http.get(this.userURL);
  }
}
