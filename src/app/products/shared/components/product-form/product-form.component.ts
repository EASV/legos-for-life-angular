import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductDto} from '../../product.dto';

@Component({
  selector: 'app-inno-tech-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  @Input()
  product: ProductDto | undefined;
  @Input()
  buttonText: string | undefined;
  @Output()
  saveOrUpdate = new EventEmitter<ProductDto>();
  constructor() { }

  ngOnInit(): void {
    if(this.product) {
      //Patch my Form
    }
  }

  save() {
    //Get formdata into product
    this.saveOrUpdate.emit(this.product);
  }
}
