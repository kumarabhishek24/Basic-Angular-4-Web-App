import { Component } from '@angular/core';
import { ProductService } from './services/productService';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ProductService]
})
export class AppComponent {
  title:string = 'the Store';
}
