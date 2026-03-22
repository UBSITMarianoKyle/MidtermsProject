import { Component, OnInit } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../Models/Product.interface';
import { ProductsService } from '../../services/ProductsService';
import { ProductDetails } from '../product-details/product-details';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DecimalPipe,
    ProductDetails  // to render details below table
  ],
  templateUrl: './products-list.html',
  styleUrls: ['./products-list.css']
})
export class ProductList implements OnInit {
  products: Product[] = [];
  selectedProduct: Product | null = null;  // product to show below table

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  openProductDetails(product: Product) {
    // Toggle selection — clicking the same product again hides it
    this.selectedProduct = this.selectedProduct?.id === product.id ? null : product;
  }
}