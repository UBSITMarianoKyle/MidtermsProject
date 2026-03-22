// src/app/components/supplier-details/supplier-details.ts
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Supplier } from '../../Models/supplier.interface';

@Component({
  selector: 'app-supplier-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './supplier-details.html',
  styleUrls: ['./supplier-details.css']
})
export class SupplierDetailsComponent implements OnInit {
  @Input() supplier!: Supplier;

  // Notify parent to hide the details
  @Output() closeDetails = new EventEmitter<void>();

  productsSuppliedString: string = '';

  ngOnInit(): void {
    if (this.supplier) {
      this.productsSuppliedString = this.supplier.productsSupplied.join(', ');
    }
  }

  saveChanges() {
    if (this.supplier) {
      this.supplier.productsSupplied = this.productsSuppliedString
        .split(',')
        .map(p => p.trim());
      alert('Supplier updated!');
    }
  }

  goBack() {
    this.closeDetails.emit(); // <-- emit event to parent
  }
}