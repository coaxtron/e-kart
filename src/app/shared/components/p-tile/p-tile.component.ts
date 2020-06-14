import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-p-tile',
  templateUrl: './p-tile.component.html',
  styleUrls: ['./p-tile.component.scss']
})
export class PTileComponent implements OnInit {
  @Input() inStock : boolean;
  @Input('product') product: Product;
  @Input('show-actions') showActions = true;

  constructor() { }

  ngOnInit(): void {
  }

}
