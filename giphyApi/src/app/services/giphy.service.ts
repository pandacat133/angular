import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import * as giphyKey from '../local-api-keys/giphy-api-key';

@Injectable()

export class GiphyService {

  constructor(private http: HttpClient) {
  }

  getGiphy(input): Observable<any> {
    return this.http.get(`http://api.giphy.com/v1/gifs/search?q=${input}&api_key=${giphyKey.default}&limit=5`);
  }
}

