import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
export class CustomerListComponent implements OnInit { // it shows an delete customers

  customers: Customer[] = []; // only declare data that will be needed in data binding
  // customerService: any;


  constructor(private customerService: CustomerService, private cdr: ChangeDetectorRef) { } // initialize CustomerList with a service attribute

  ngOnInit(): void {
    this.listCustomers(); // this method are executing while the view template
  }

  listCustomers() {
    // metohd to list customers 
    this.customerService.getCustomerList().subscribe(
      data => {
        this.customers = data;
        console.log(this.customers, "impreso");
        this.cdr.detectChanges();// Manually trigger change detection
      });
  }

  deleteCustomer(id: number) {
    this.customerService.deleteCustomerById(id).subscribe(
      () => {
        console.log("Customer deleted with id:", id);
        this.listCustomers(); // Refresh the customer list after deletion
      });
  }

}
