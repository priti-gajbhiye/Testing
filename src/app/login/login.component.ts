import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  template: `<button [hidden]="needslogin()">Login</button>`
  
})
export class LoginComponent {

  constructor(private auth : AuthService) { }

  needslogin(){
    return !this.auth.isAuthenticated();
  }

 
}
