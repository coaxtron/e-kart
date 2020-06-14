import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from 'src/app/dashboard/services/productservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$;
  constructor(productservice : ProductserviceService) {
    this.products$ = productservice.getAll();
   }

  ngOnInit(): void {
  }

}
