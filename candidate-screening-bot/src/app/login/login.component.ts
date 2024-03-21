import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string | undefined;
  password: string | undefined;
  showSpinner: boolean = false;

  constructor(private router: Router) {}

  login() {
    // Implement your login logic here
    // For simplicity, just redirect to admin page
    if(this.username == 'admin' && this.password == 'admin'){
      this.router.navigate(["report"]);
     }
     else if(this.username == 'candidate' && this.password == 'candidate'){
      this.router.navigate(["welcome"]);
     }
     else{
      alert("Invalid credentials");
     }
  }
}
