import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable()
export class MovieApiService {

  url = 'https://api.themoviedb.org/3/';

  constructor(private httpClient: HttpClient) { }

  async get(path, options?): Promise<any> {
    return await this.httpClient.get(this.url + path + '&api_key=5d40ed46982a5881d06a3e6260cc4000', options).toPromise();
  }

}
