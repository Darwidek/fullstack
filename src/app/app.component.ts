import { Component } from '@angular/core';
import { EjemploComponent } from "./ejemplo/ejemplo.component";
import { CustomerListComponent } from "./components/customer-list/customer-list.component";
import { CustomerPostComponent } from "./components/customer-post/customer-post.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CustomerListComponent, CustomerPostComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'fullstack interpolacion';
}
