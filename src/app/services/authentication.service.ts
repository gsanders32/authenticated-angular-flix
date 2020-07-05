import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private token: string;
  user = 'Please Login';
  constructor(private apiService: ApiService) { }

  async signup(username: string, password: string) {
    let response = await this.apiService.post('auth/signup', { username, password });
    return await response;
  }

  async login(username: string, password: string) {
    const response = await this.apiService.post('auth/login',{ username, password });
    this.token = response.token;
    this.user = username;
  }

  getUserName() {
    return this.user;
  }

  get getToken() {
    return this.token;
  }
}
