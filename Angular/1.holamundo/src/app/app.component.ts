import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  nombre:string = "Gustavo";
  apellido:string = "Herrera";
  mensaje:string = "hola mundo";
}
