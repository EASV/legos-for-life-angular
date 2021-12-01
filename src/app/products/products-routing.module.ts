import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsListComponent} from './products-list/products-list.component';
import {AuthGuard} from '../auth/guards/auth.guard';

const routes: Routes = [
  {path: '', component: ProductsListComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
