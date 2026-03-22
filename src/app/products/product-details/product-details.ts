import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../Models/Product.interface';
import { ProductsService } from '../../services/ProductsService';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-details.html',
  styleUrls: ['./product-details.css'],
})
export class ProductDetails {
  @Input() product!: Product;

  constructor(private productService: ProductsService) {}

  saveProduct() {
    this.productService.updateProduct(this.product);
    alert('Product updated successfully!');
  }
}