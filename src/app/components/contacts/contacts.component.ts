import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/interfaces/Contact';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = [];
  constructor(private cs: ContactsService) {}

  ngOnInit(): void {
    this.cs.getContacts().subscribe({
      next: (contactsData: Contact[]) => (this.contacts = contactsData),
    });
  }
}
