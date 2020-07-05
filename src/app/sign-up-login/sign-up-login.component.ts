import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-login',
  templateUrl: './sign-up-login.component.html',
  styleUrls: ['./sign-up-login.component.css']
})
export class SignUpLoginComponent implements OnInit {

  username: string;
  password: string;

  constructor( private authenticationService: AuthenticationService, private router: Router ) { }

  ngOnInit() {
  }

  async login() {
    await this.authenticationService.login(this.username, this.password);
    this.router.navigate(['/main']);
  }

  async signup() {
    await this.authenticationService.signup(this.username, this.password);
    await this.login();
  }

}
