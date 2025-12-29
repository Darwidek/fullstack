import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { CommonModule, NgFor } from '@angular/common';
import { Observable } from 'rxjs';
import { Customer } from '../../customer';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = [];
  // customerService: any;


  constructor(private customerService: CustomerService) { } // initialize CustomerList with a service attribute

  ngOnInit(): void {
    this.listCustomers();
  }

  listCustomers() {
     // metohd to list customers 
    this.customerService.getCustomerList().subscribe(
      data => {
        this.customers = data;
        console.log(this.customers, "impreso");
      });
  }

}
