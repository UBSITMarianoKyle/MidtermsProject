// src/app/components/suppliers-list/suppliers-list.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SupplierDetailsComponent } from '../supplier-details/supplier-details';
import { SupplierService } from '../../services/supplier';
import { Supplier } from '../../Models/supplier.interface';

@Component({
  selector: 'app-suppliers-list',
  standalone: true, // standalone component
  imports: [CommonModule, FormsModule, SupplierDetailsComponent], // <-- important
  templateUrl: './suppliers-list.html',
  styleUrls: ['./suppliers-list.css']
})
export class SuppliersListComponent implements OnInit {
  suppliers: Supplier[] = [];
  selectedSupplier: Supplier | null = null;

  constructor(private supplierService: SupplierService) {}

  ngOnInit(): void {
    this.suppliers = this.supplierService.getSuppliers();
  }

  viewSupplier(supplier: Supplier) {
    this.selectedSupplier = supplier;
  }
}