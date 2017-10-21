import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';

import { ProductService } from '../services/productService';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  listFilter:string = 'cart';

  products:IProduct[];

 filteredProducts:IProduct[];
 showImage:boolean = false;

  constructor(private _products:ProductService) {

      this.products = _products.getProducts();
      
   }

  ngOnInit() {
  	  this.filteredProducts =  this.products;
    }



  toggleImage() : void{
  	this.showImage = !this.showImage;
  }

}
