import { Component } from '@angular/core';
import { CustomerListComponent } from "./components/customer-list/customer-list.component";
import { CustomerPostComponent } from "./components/customer-post/customer-post.component";
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({ //  ng generate component name-of-component (git bash & Angualr CLI)
  selector: 'app-root',
  standalone: true, // standalone, it doesn´t needs ngModule
  imports: [CustomerListComponent, CustomerPostComponent, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'fullstack interpolacion';
}
