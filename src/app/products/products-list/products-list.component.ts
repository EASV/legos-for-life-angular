import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsService} from '../shared/products.service';
import {ProductDto} from '../shared/product.dto';
import {Observable, Subscription} from 'rxjs';
import {catchError, delay, take, tap} from 'rxjs/operators';

@Component({
  selector: 'app-inno-tech-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products$: Observable<ProductDto[]> | undefined;
  error: any;

  constructor(private _productService: ProductsService) { }

  ngOnInit(): void {
    this.products$ = this._productService.getAll()
      .pipe(
        catchError(err => {
          this.error = err;
          throw err;
        })
      );
  }

}
