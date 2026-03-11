import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { Product } from '../../Models/Product.interface';
import { ProductsService } from '../../services/ProductsService';
import { FormsModule }  from '@angular/forms';
import { CommonModule}  from '@angular/common';
@Component({
  selector: 'app-product-details',
  imports: [FormsModule, CommonModule, RouterLink, RouterOutlet],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductList implements OnInit{

  products: Product [] = [];
  returnUrls: string | null =null;
  
  selectedId:number|null =null;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
){}

ngOnInit(): void {
  this.products = this.productService.getProducts();

}

getProduct(p:Product): void {
this.selectedId = p.id;
this.router.navigate(['/products1', p.id, 'Details']);
}












}


