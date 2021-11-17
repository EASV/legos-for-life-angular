import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import {HttpClientModule} from '@angular/common/http';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import {ProductFormComponent} from './shared/components/product-form/product-form.component';


@NgModule({
  declarations: [
    ProductsListComponent,
    ProductFormComponent,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
  ]
})
export class ProductsModule { }
