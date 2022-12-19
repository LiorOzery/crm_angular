import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Contact } from '../interfaces/Contact';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  contactsRef = collection(this.firestore, 'contacts');

  constructor(private firestore: Firestore) {}

  getContacts(): Observable<Contact[]> {
    return collectionData(this.contactsRef) as Observable<Contact[]>;
  }
}
