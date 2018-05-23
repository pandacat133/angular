import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class StarwarsService {

  constructor(private http: HttpClient) { }
}
