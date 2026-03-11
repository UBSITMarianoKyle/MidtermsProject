import { Injectable } from '@angular/core';
import { Product } from '../Models/Product.interface';

@Injectable({
    providedIn: 'root',
    
})
export class ProductsService { 
  products: Product[] = [ 
  { id: 1, name: 'Apple', category: 'Fruit', price: 1.5 * 56, stock: 50, status: 'Available', description: 'Fresh red apples', expiryDate: '2026-03-20', calories: 52, ingredients: 'Apple' },
  { id: 2, name: 'Banana', category: 'Fruit', price: 0.8 * 56, stock: 0, status: 'Out of Stock', description: 'Ripe yellow bananas', expiryDate: '2026-03-15', calories: 89, ingredients: 'Banana' },
  { id: 3, name: 'Chocolate Bar', category: 'Snack', price: 2 * 56, stock: 10, status: 'Limited', description: 'Milk chocolate bar', expiryDate: '2026-06-01', calories: 250, ingredients: 'Sugar, Cocoa, Milk' },
  { id: 4, name: 'Orange Juice', category: 'Beverage', price: 3 * 56, stock: 20, status: 'Available', description: 'Freshly squeezed', expiryDate: '2026-04-10', calories: 45, ingredients: 'Orange' },
  { id: 5, name: 'Bread', category: 'Bakery', price: 1.2 * 56, stock: 30, status: 'Available', description: 'Whole wheat bread', expiryDate: '2026-03-12', calories: 120, ingredients: 'Wheat, Yeast, Water, Salt' },
  { id: 6, name: 'Cheese', category: 'Dairy', price: 4 * 56, stock: 5, status: 'Limited', description: 'Cheddar cheese', expiryDate: '2026-04-05', calories: 402, ingredients: 'Milk, Salt, Enzymes' },
  { id: 7, name: 'Yogurt', category: 'Dairy', price: 1.5 * 56, stock: 0, status: 'Out of Stock', description: 'Low-fat yogurt', expiryDate: '2026-03-08', calories: 59, ingredients: 'Milk, Bacteria Culture' },
  { id: 8, name: 'Cookies', category: 'Snack', price: 2.5 * 56, stock: 15, status: 'Available', description: 'Chocolate chip cookies', expiryDate: '2026-05-15', calories: 200, ingredients: 'Flour, Sugar, Chocolate, Butter' },
  { id: 9, name: 'Tomato', category: 'Vegetable', price: 0.7 * 56, stock: 40, status: 'Available', description: 'Fresh red tomatoes', expiryDate: '2026-03-18', calories: 18, ingredients: 'Tomato' },
  { id: 10, name: 'Peanut Butter', category: 'Spread', price: 3.5 * 56, stock: 8, status: 'Limited', description: 'Creamy peanut butter', expiryDate: '2026-07-01', calories: 588, ingredients: 'Peanuts, Salt, Oil' },
];

getProducts(): Product[] {
  return this.products;

}
getProduct(id: number): Product | undefined {
   return this.products.find(p => p.id === id)
}
updateProduct(updated: Product): void{
  const idx = this.products.findIndex(p => p.id === updated.id);
  if (idx !== -1) this.products[idx] = {...updated};

}

isauthenticated(): boolean{
  return !!sessionStorage.getItem("Auth_token")
}






login(): void { sessionStorage.setItem('auth_token', 'demo-token');
}
logout(): void { sessionStorage.removeItem('auth_token');
}
























}