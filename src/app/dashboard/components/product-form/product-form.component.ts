import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductserviceService } from '../../services/productservice.service';
import { take } from 'rxjs/internal/operators/take';
// import { take } from 'rxjs/internal/operators';
// import { NgModule } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {

  categories$;
  product = {};
  id;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public categoryService: CategoryService,
    private productService: ProductserviceService
  ) {
    // this.categories$ = categoryService.getCategories();

    // this.id = this.route.snapshot.paramMap.get('id');
    // if (this.id) {
    //   this.productService.get(this.id).valueChanges().pipe(take(1))
    //   .subscribe(p => this.product = p);
    // }
  }

  ngOnInit(): void {}
  save(product) {
    if (this.id) { this.productService.update(this.id, product); }
    else { this.productService.create(product); }

    this.router.navigate(['/dashboard/add-product']);
  }

  delete() {
    if (!confirm('Are you sure you want to delete this product?')) return;

    this.productService.delete(this.id);
    this.router.navigate(['/dashboard/add-product']);
  }
}
