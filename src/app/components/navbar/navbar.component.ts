import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  image!: string;
  email!: string;

  constructor(private us: UsersService, private router: Router) {
    this.image = '../assets/images/CRM.svg';
  }

  ngOnInit(): void {
    this.email = sessionStorage.getItem('email') as string;
  }

  logout() {
    this.us
      .logout()
      .then(() => {
        sessionStorage.removeItem('email');
        sessionStorage.removeItem('isLoggedIn');
        this.router.navigateByUrl('login');
      })
      .catch((err) => console.log(err));
  }
}
