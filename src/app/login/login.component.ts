import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {

    this.form = fb.group({
      email: ['test@gmail.com', [Validators.required]],
      password: ['password', [Validators.required]]
    });

  }

  ngOnInit() {

  }

  login() {

    const val = this.form.value;
    console.log(val)
    // this.auth.login(val.email, val.password)
    //   .subscribe(
    //     () => { },
    //     err => {
    //       alert("Login failed!");
    //     }
    //   );



  }
}
