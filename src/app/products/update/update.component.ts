import { Component, OnInit } from '@angular/core';
import {ProductDto} from '../shared/product.dto';

@Component({
  selector: 'app-inno-tech-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  product: ProductDto | undefined;
  constructor() { }

  ngOnInit(): void {
    //Get prodcut on init
  }

  update($event: ProductDto) {
    //Service to udate
  }
}
