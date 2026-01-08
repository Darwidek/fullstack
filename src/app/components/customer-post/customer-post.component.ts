import { Component, OnInit } from '@angular/core';
import { Customer } from '../../customer';
import { FormsModule } from '@angular/forms';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-customer-post',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './customer-post.component.html',
  styleUrls: ['./customer-post.component.css'],
})

export class CustomerPostComponent implements OnInit {

  public id?: number // id opcional sprinboot will asign it automatically
  firstName: string = "";
  lastName: string = "";
  email: string = "";

  constructor(private customerService: CustomerService) { }; // The constructor is declared because the service will not be an attribute.

  ngOnInit(): void {

  }

  addCustomer() {
    let customer = new Customer(this.firstName, this.lastName, this.email);
    console.log(customer);
    this.customerService.postCustomer(customer).subscribe(res => { console.log(res) });
  }

} 
