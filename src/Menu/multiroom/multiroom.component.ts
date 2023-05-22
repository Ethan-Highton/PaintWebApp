import { AfterViewInit, Component } from '@angular/core';
import { RectangleComponent } from '../rectangle/rectangle.component';

@Component({
  selector: 'app-multiroom',
  templateUrl: './multiroom.component.html',
  styleUrls: ['./multiroom.component.css']
  
})
export class MultiroomComponent implements AfterViewInit {
  numbersArray: number[] = Array.from({ length: 9 }, (_, i) => i + 2)
  isDropdownVisible = false;
  roomIndexes: number[] = [];
  rooms: RectangleComponent[] = []; 
  numberOfRooms!: number;
  totalWallSpace: number = 0;
  
  ngAfterViewInit() {
    const menuLi = document.querySelector("#menuElem > li:nth-child(1)");
    // Perform any modifications to the menuLi element here
    
  }
  showDropdown(event: MouseEvent) {
    this.isDropdownVisible = true;

  }

  hideDropdown(event: MouseEvent) {
    this.isDropdownVisible = false;
  }
  updateRoomWallSpace(roomIndex: number, wallSpace: number) {
    // Handle the wall space update for the specific room
  }
  setNumberOfRooms(value: number) {
    this.numberOfRooms = value;
    if (this.numberOfRooms && this.numberOfRooms > 0) {
      this.createRooms();
    }
  }

  createRooms() {
    this.rooms = Array.from({ length: this.numberOfRooms }, () => new RectangleComponent());
  }

  calculateTotalWallSpace() {
    this.totalWallSpace = 0;
    for (const room of this.rooms) {
      this.totalWallSpace += room.area;
    }
    return this.totalWallSpace;
  }
}




