import { Component } from '@angular/core';

@Component({
  selector: 'app-property',
  imports: [],
  templateUrl: './property.html',
  styleUrl: './property.css',
})
export class Property {  // Button disabled state
  isButtonDisabled: boolean = false;

  // Image properties
  imageSource: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl1gz6yGEBpyLShUhCTL89KbAUj6AsY4KCKw&s';
  imageAlt: string = 'University of Baguio Logo';
  imageWidth: number = 200;

  // Link property
  linkUrl: string = 'https://www.ubaguio.edu';

  // Input placeholder
  inputPlaceholder: string = 'Enter your full name';

  // Button click method
  onButtonClick(): void {
    this.isButtonDisabled = !this.isButtonDisabled;
    alert('Button is now enabled!');
  }

}
