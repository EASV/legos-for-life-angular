import { Component, OnInit } from '@angular/core';
import {ProductDto} from '../shared/product.dto';

@Component({
  selector: 'app-inno-tech-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  save(product: ProductDto) {
    //Call Service
  }
}
