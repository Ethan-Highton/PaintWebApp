import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {
  width!: number;
  length!: number;
  height!: number;
  area!: number;
  gals!: number;
  showResults = false;
  allInputsFilled = false;
  isDropdownVisible = false;


  checkInputs() {
    if (this.width && this.length && this.height) {
      this.allInputsFilled = true;
    } else {
      this.allInputsFilled = false;
    }
  }

  calculate() {
    this.area = 2 * (this.width * this.height) + 2 * (this.length * this.height);
    this.showResults = true;
    this.gals = this.area / 400;
  }
  showDropdown(event: MouseEvent) {
    this.isDropdownVisible = true;
  }

  hideDropdown(event: MouseEvent) {
    this.isDropdownVisible = false;
  }
}

