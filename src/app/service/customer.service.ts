import { HttpClient } from '@angular/common/http'; // to acces api rest
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {

  private api: string = 'http://localhost:8080/api/customers';

  constructor(private http: HttpClient) { } // vamos por la leccion 19 y luego se pasa a la 20 gracias. 

  getCustomerList(): Observable<Customer[]> { // connect to API REST and return observable
    return this.http.get<Customer[]>(this.api);
  }

  postCustomer(customer: Customer): Observable<Customer> { // connect to API REST and return observable
    return this.http.post<Customer>(this.api + '/save', customer, { headers: { 'Content-Type': 'application/json' } });
  }

  deleteCustomerById(id: number): Observable<any> { // connect to API REST and return observable to delete
    return this.http.delete(this.api+'/'+id);
  }

}