import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']  // fixed typo
})
export class HomeComponent implements OnInit {

  studentName = "Mariano, Kyle";
  school = "University of Baguio";
  subject = "Application Development 1";

  typedText = "";
  textArray = [
    "Future Software Developer 💻",
    "Professional Bug Creator 🐛",
    "Angular Student Developer ⚡",
    "Still Googling Errors Since 2024 😂"
  ];

  textIndex = 0;
  charIndex = 0;

  ngOnInit(){
    this.typeEffect();
  }

  typeEffect(){
    const currentText = this.textArray[this.textIndex];

    if(this.charIndex < currentText.length){
      this.typedText += currentText.charAt(this.charIndex);
      this.charIndex++;

      setTimeout(()=>this.typeEffect(),80);
    }
    else{
      setTimeout(()=>{
        this.typedText="";
        this.charIndex=0;
        this.textIndex=(this.textIndex+1)%this.textArray.length;
        this.typeEffect();
      },2000);
    }
  }

}