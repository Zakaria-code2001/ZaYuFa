import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  templateUrl: "./login.component.html",
})
export class LoginComponent {
    loginData = {
      email: '',
      password: '',
    };
  
    errorMessage = '';
  
    constructor(private http: HttpClient, private router: Router) {}
  
    onLogin() {
      console.log("Attempting login with:", this.loginData);

      this.http.post<{ token: string; username: string }>('http://localhost:3000/auth/login', this.loginData).subscribe({
        next: (res) => {
          localStorage.setItem('token', res.token);
          localStorage.setItem('username', res.username); // ✅ store username
          this.router.navigate(['/recording']);
        },
        error: (err) => {
          this.errorMessage = err.error?.error || 'Login failed';
        }
      });
    }
    

  }