import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  isLoading: boolean = false;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() { }

  login() {
    const val = this.form.value;
    this.isLoading = true;
    this.authService.login().subscribe((users: Object[]) => {
        users.forEach(user => {
          if (user['email'] === val.email && user['password'] === val.password) {
            this.authService.isLoggedIn = true;
            localStorage.setItem('email', val.email)
            localStorage.setItem('password', val.email)
            this.router.navigate(['/about'])
          } else {
            this.authService.isLoggedIn = false;
            alert("Login failed!")
          }
          this.isLoading = false;
        }, () => {
          this.isLoading = false;
        });
      })
    return this.authService.isLoggedIn;
  }
}
