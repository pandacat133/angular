import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class UserProfileService {

  constructor(private http: HttpClient) { }

  getUsers() : Observable<any> {
    return this.http.get(`https://my.api.mockaroo.com/fads.json?key=08197910`);
  }
}
