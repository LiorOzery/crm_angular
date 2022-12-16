import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/User';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = { email: '', password: '' };
  constructor(private us: UsersService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.us
      .login(this.user)
      .then((data) => {
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('email', data.user.email as string);
        this.router.navigateByUrl('home/customers');
      })
      .catch((err) => console.log(err));
  }

  loginWithGoogle() {
    this.us
      .loginGoogle()
      .then((data) => {
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('email', data.user.email as string);
        this.router.navigateByUrl('home/customers');
      })
      .catch((err) => console.log(err));
  }
}
