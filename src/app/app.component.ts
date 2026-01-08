import { Component } from '@angular/core';
import { CustomerListComponent } from "./components/customer-list/customer-list.component";
import { CustomerPostComponent } from "./components/customer-post/customer-post.component";
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CustomerListComponent, CustomerPostComponent, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'fullstack interpolacion';
}
