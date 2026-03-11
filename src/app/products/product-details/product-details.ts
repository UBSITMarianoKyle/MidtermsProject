import { Component } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common'; // For *ngIf, number pipe
import { FormsModule } from '@angular/forms';

import { Product } from '../../Models/Product.interface';
import { ProductsService } from '../../services/ProductsService';

@Component({
  selector: 'app-product-details',
  standalone: true, // optional, if using standalone component
  imports: [CommonModule, FormsModule, DecimalPipe],
  templateUrl: './product-details.html',
  styleUrls: ['./product-details.css'], // fixed typo: styleUrls
})
export class ProductDetails {

  // The product currently displayed in the modal
  selectedProduct: Product | null = null;

  constructor(private productService: ProductsService) {}

  // Method to open modal for a specific product
  openModal(productId: number): void {
    const product = this.productService.getProduct(productId);
    if (product) {
      this.selectedProduct = product;
    }
  }

  // Method to close the modal
  closeModal(): void {
    this.selectedProduct = null;
  }

}