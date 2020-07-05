import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { AuthenticationService } from './services/authentication.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthenticationService) {}

  intercept( request: HttpRequest<unknown>, next: HttpHandler ) {
    if (this.authService.getToken === undefined) {
      return next.handle(request);
    }
    const clone = request.clone({
        setHeaders: { Authorization: `Bearer ${this.authService.getToken}` }
    });

    return next.handle(clone);
  }
}

