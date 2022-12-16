import { compilePipeFromMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/interfaces/Customer';
import { CustomersService } from 'src/app/services/customers.service';
import { EditCustomerComponent } from '../edit-customer/edit-customer.component';
import { ShowCustomerComponent } from '../show-customer/show-customer.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private cs: CustomersService, private modal: NgbModal) {}

  ngOnInit(): void {
    this.cs.getCustomers().subscribe({
      next: (customersData: Customer[]) => (this.customers = customersData),
    });
  }

  deleteCustomer(customer: Customer) {
    if (confirm('Are you sure you want to delete the customer?'))
      this.cs
        .deleteCustomer(customer)
        .then(() => console.log('Book was deleted'))
        .catch((err) => console.log(err));
  }

  updateCustomer(customer: Customer) {
    let modalRef = this.modal.open(EditCustomerComponent, {
      size: 'md',
      centered: true,
      windowClass: 'dark-modal',
    });
    modalRef.componentInstance.id = customer.id;
  }

  showCustomer(customer: Customer) {
    let modalRef = this.modal.open(ShowCustomerComponent, {
      size: 'md',
      centered: true,
      windowClass: 'dark-modal',
    });
    modalRef.componentInstance.id = customer.id;
  }
}
