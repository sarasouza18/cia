import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  constructor(private http: HttpClient) { }

  login({ username, password }) {
    return this.http.post('/api/tokens', {
      username,
      password,
      domain_name: 'default'
    });
  }
}
