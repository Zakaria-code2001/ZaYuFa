import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData } from './auth-data.model';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  createUser(username: string, email: string, password: string): Observable<any> {
    const authData: AuthData = { username, email, password };
    return this.http.post('http://localhost:3000/auth/signup', authData);
  }

  getUsername(): string | null {
    return localStorage.getItem('username');
  }
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
  
  
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  }

}
