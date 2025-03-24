import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  signupData = {
    username: '',
    email: '',
    password: ''
  };

  errorMessage = '';
  successMessage = '';
  isLoading = false;

  constructor(public authService: AuthService) {}

  onSignup(form: NgForm) {
    if (form.invalid) return;
  
    const { username, email, password } = form.value;
  
    this.authService.createUser(username, email, password).subscribe({
      next: () => {
        this.successMessage = '✅ Signed up successfully!';
        this.errorMessage = '';
        form.resetForm();
      },
      error: (err) => {
        console.error("Signup error response:", err);
  
        // Display custom error from backend if available
        this.errorMessage = err.error?.error || '❌ Signup failed';
        this.successMessage = '';
      }
    });
  }
  
}
