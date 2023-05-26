import {Component, ElementRef, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent {
  numbersArray: number[] = Array.from({ length: 4 }, (_, i) => i + 3);
  isDropdownVisible = false;
  numberOfWalls!: number;
  width!: number;
  height!: number;
  area!: number;
  gals!: number;
  showResults = false;
  allInputsFilled = false;
  nativeElement: any;
  @ViewChild('rectangle') rectangleElementRef!: ElementRef;
  nativeElementRef!: HTMLElement;
  @Input() isVisible: boolean = false;

  showDropdown(event: MouseEvent) {
    this.isDropdownVisible = true;
  }

  hideDropdown(event: MouseEvent) {
    this.isDropdownVisible = false;
  }
  setNumberOfWalls(value: number) {
    this.numberOfWalls = value;
    //this.currentRoomIndex = 0;
    //this.activeRoomIndex = 0;
    //this.createRooms();
  }



  checkInputs() {
    if (this.width && this.height) {
      this.allInputsFilled = true;
    } else {
      this.allInputsFilled = false;
    }
  }

  calculate() {
    this.area = this.width * this.height;
    this.showResults = true;
    this.gals = this.area / 400;
  }


}


