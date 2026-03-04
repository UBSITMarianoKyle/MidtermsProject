import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Users } from '../../users';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interpolation',
  standalone: true,
  imports: [CommonModule, JsonPipe, FormsModule],
  templateUrl: './interpolation.html',
  styleUrls: ['./interpolation.css'],
})
export class Interpolation {
  title: string = 'Angular Data Binding Demo';
  studentName: string = 'Mariano, Kyle';
  courseCode: string = 'APPDEV1';
  currentYear: number = new Date().getFullYear();
  isActive: boolean = false; 

  

 
  text: string = '{{ expression }}';
  curly: string = '{{ }}';
  common: string = '{{ userName }}';
  methods: string = '{{ getStatus() }}';
  dotnot: string = '{{ user.name }}';
  dotnot2: string = '{{ user.details.role }}'; 
  jpipe: string = '{{ user | json }}';

  user = {
    name: 'Kyle Mariano',
    position: 'Student',
    department: 'IT',
    details: {
      role: 'Developer'
    }
  };

  // ── Arrays for iteration and select dropdowns
  skills: string[] = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular'];
  roles: string[] = ['Admin', 'Editor', 'Viewer']; // ✅ only once
  countries = [
    { id: 1, name: 'Philippines' },
    { id: 2, name: 'USA' },
    { id: 3, name: 'Canada' },
    { id: 4, name: 'Japan' }
  ];

  selectedCountryId: number | null = null;

  // ── Methods
  getWelcomeMessage(): string {
    return 'Welcome to Angular Interpolation Demo!';
  }

  getStatus(): string {
    return this.isActive ? 'Active' : 'Inactive';
  }
}