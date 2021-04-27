import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;

  constructor(private http: HttpClient) { 
    if (localStorage.getItem('email') && localStorage.getItem('password')) {
      this.isLoggedIn = true;
    }
  }

  login(): Observable<Object> {
    return this.http.get(`${environment.server_api}/user`);
  }

  logout() {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
  }

}
