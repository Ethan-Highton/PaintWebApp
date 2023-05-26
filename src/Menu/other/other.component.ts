import { Component } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent {
  numbersArray: number[] = Array.from({ length: 4 }, (_, i) => i + 3);
  isDropdownVisible = false;
  numberOfWalls!: number;

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
}
