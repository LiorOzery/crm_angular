import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from 'src/app/interfaces/Customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.component.html',
  styleUrls: ['./show-customer.component.css'],
})
export class ShowCustomerComponent implements OnInit {
  @Input() id!: string;
  customer: Customer = { firstName: '', lastName: '', email: '', phone: '' };
  image!: string;

  constructor(
    private cs: CustomersService,
    private activeModal: NgbActiveModal
  ) {
    this.image = '../assets/images/userIcon.png';
  }

  ngOnInit(): void {
    this.cs.getCustomerById(this.id).subscribe({
      next: (customerData: Customer) => (this.customer = customerData),
    });
  }

  showCustomerCard() {
    this.cs
      .showCustomerById(this.customer)
      .then(() => {
        this.activeModal.close();
      })
      .catch((err) => console.log(err));
  }
}
