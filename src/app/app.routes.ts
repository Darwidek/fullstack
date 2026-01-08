import { Routes } from '@angular/router';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerPostComponent } from './components/customer-post/customer-post.component';
import { AppComponent } from './app.component';


export const routes: Routes = [ // http://localhost:4200
    {path: '', component: CustomerListComponent }, // http://localhost:4200/customers
    {path: 'customers', component: CustomerListComponent }, // http://localhost:4200/customers
    {path: 'post', component: CustomerPostComponent } // http://localhost:4200/post
];