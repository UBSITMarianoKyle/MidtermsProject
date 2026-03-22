import { Injectable } from '@angular/core';
import { Supplier } from '../Models/supplier.interface';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
suppliers: Supplier[] = [
  { id: 1, supplierName: 'NovaTech Supplies', location: 'Makati, Metro Manila', email: 'info@novatech.ph', contactPerson: 'Luis Garcia', phone: '0917-812-3401', productsSupplied: ['Laptop', 'Router', 'Keyboard'] },
  { id: 2, supplierName: 'GreenFarm Agro', location: 'Cebu City, Cebu', email: 'contact@greenfarm.ph', contactPerson: 'Maria Santos', phone: '0917-812-3402', productsSupplied: ['Tomato', 'Lettuce', 'Spinach'] },
  { id: 3, supplierName: 'SnackCorp PH', location: 'Davao City, Davao del Sur', email: 'sales@snackcorp.ph', contactPerson: 'John Doe', phone: '0917-812-3403', productsSupplied: ['Chips', 'Cookies', 'Chocolate Bar'] },
  { id: 4, supplierName: 'DairyPro Inc.', location: 'Quezon City, Metro Manila', email: 'support@dairypro.ph', contactPerson: 'Anna Cruz', phone: '0917-812-3404', productsSupplied: ['Cheese', 'Yogurt', 'Butter'] },
  { id: 5, supplierName: 'JuiceWorld PH', location: 'Mandaue, Cebu', email: 'orders@juiceworld.ph', contactPerson: 'Mark Reyes', phone: '0917-812-3405', productsSupplied: ['Orange Juice', 'Mango Juice', 'Calamansi Juice'] },
  { id: 6, supplierName: 'BakeryKing', location: 'Davao City, Davao del Sur', email: 'info@bakeryking.ph', contactPerson: 'Rosa Lee', phone: '0917-812-3406', productsSupplied: ['Bread', 'Cookies', 'Muffins'] },
  { id: 7, supplierName: 'PeanutWorks', location: 'Pasig, Metro Manila', email: 'support@peanutworks.ph', contactPerson: 'James Tan', phone: '0917-812-3407', productsSupplied: ['Peanut Butter', 'Peanut Snacks'] },
  { id: 8, supplierName: 'FruitHouse', location: 'Lapu-Lapu City, Cebu', email: 'sales@fruithouse.ph', contactPerson: 'Sophia Lim', phone: '0917-812-3408', productsSupplied: ['Apple', 'Banana', 'Mango', 'Tomato'] },
  { id: 9, supplierName: 'MilkCo', location: 'Davao City, Davao del Sur', email: 'contact@milkco.ph', contactPerson: 'Peter Ong', phone: '0917-812-3409', productsSupplied: ['Yogurt', 'Cheese', 'Fresh Milk'] },
  { id: 10, supplierName: 'SnackTime PH', location: 'Makati, Metro Manila', email: 'hello@snacktime.ph', contactPerson: 'Laura Tan', phone: '0917-812-3410', productsSupplied: ['Chocolate Bar', 'Cookies', 'Chips'] },
];
  getSuppliers(): Supplier[] {
    return this.suppliers;
  }

  getSupplierById(id: number): Supplier | undefined {
    return this.suppliers.find(s => s.id === id);
  }

  updateSupplier(updatedSupplier: Supplier): void {
    const index = this.suppliers.findIndex(s => s.id === updatedSupplier.id);
    if (index !== -1) this.suppliers[index] = { ...updatedSupplier };
  }
}