import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-twoway',
  imports: [FormsModule],
  templateUrl: './twoway.html',
  styleUrl: './twoway.css',
})
export class Twoway {  twoWName: string = '';
twoWayName: string = '';
twoWayEmail: string = '';
twoWayAge: number = 18;
twoWayGender: string = '';
twoWaySubscribed: boolean = false;
rangeValue: number = 50;
twoWayLanguage: string = '';
twoWayColor: string = '#ff0000';

// Programming languages for select dropdown
programmingLanguages: string[] = ['JavaScript', 'TypeScript', 'Python', 'Java', 'C#'];

// User table data
user = [
  { id: 1, name: 'Kyle Mariano', department: 'IT', position: 'Student', role: 'Developer' },
  { id: 2, name: 'Jane Doe', department: 'HR', position: 'Manager', role: 'Admin' },
  { id: 3, name: 'John Smith', department: 'Finance', position: 'Analyst', role: 'User' }
];

// Modal selected user details
selectedId: number | null = null;
selectedName: string = '';
selectedDepartment: string = '';
selectedPosition: string = '';
selectedRole: string = '';

// ── Computed property for live profile summary ───────────
get profileSummary(): string {
  return `Name: ${this.twoWayName || '-'}, Email: ${this.twoWayEmail || '-'}, Age: ${this.twoWayAge}, Gender: ${this.twoWayGender || '-'}, Subscribed: ${this.twoWaySubscribed ? 'Yes' : 'No'}, Language: ${this.twoWayLanguage || '-'}, Favorite Color: ${this.twoWayColor}`;
}

// ── Reset all fields ─────────────────────────────────────
resetForm(): void {
  this.twoWName = '';
  this.twoWayName = '';
  this.twoWayEmail = '';
  this.twoWayAge = 18;
  this.twoWayGender = '';
  this.twoWaySubscribed = false;
  this.rangeValue = 50;
  this.twoWayLanguage = '';
  this.twoWayColor = '#ff0000';
}

// ── Handle modal click ───────────────────────────────────
onClick(user: any): void {
  this.selectedId = user.id;
  this.selectedName = user.name;
  this.selectedDepartment = user.department;
  this.selectedPosition = user.position;
  this.selectedRole = user.role;
}
}