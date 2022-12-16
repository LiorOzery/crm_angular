import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  image!: string;

  constructor() {
    this.image = '../assets/images/CRM.png';
  }

  ngOnInit(): void {}
}
