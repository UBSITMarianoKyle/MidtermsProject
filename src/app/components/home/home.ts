import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home { pageTitle: string = 'Welcome to My Learning Website';
userName: string = 'Kyle Mariano';
university: string = 'University of Baguio';
description: string = 'This website is about learning Angular, JavaScript, TypeScript, and data binding concepts.';

// Featured topics
topics: string[] = [
  'Interpolation',
  'Two-way Binding',
  'Property Binding',
  'Event Binding',
  'Directives',
  'Components',
  'Services'
];

// Tools used
tools: string[] = [
  'Angular CLI',
  'Bootstrap 5',
  'TypeScript',
  'VS Code'
];

// Greeting message to display when button is clicked
greetingMessage: string = '';

// Method to set the greeting message
sayHello() {
  this.greetingMessage = `Hello ${this.userName}, welcome to ${this.university}!`;
}
}
