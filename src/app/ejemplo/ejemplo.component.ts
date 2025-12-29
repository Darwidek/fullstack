import { Component } from '@angular/core';


@Component({
  standalone: true,
  selector: 'app-ejemplo',
  imports: [],
  // templateUrl: './ejemplo.component.html',
  template: '<h1>como va esta plantilla</h1>',
  styleUrls: ['./ejemplo.component.css'],
})
export class EjemploComponent {
  nombre: string = 'Usuario';
}
