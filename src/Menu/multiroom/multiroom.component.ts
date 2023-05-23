import { AfterViewInit, Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { RectangleComponent } from '../rectangle/rectangle.component';

@Component({
  selector: 'app-multiroom',
  templateUrl: './multiroom.component.html',
  styleUrls: ['./multiroom.component.css']
})
export class MultiroomComponent implements AfterViewInit {
  numbersArray: number[] = Array.from({ length: 9 }, (_, i) => i + 2);
  isDropdownVisible = false;
  numberOfRooms!: number;
  rooms: RectangleComponent[] = [];
  currentRoomIndex: number = 0;
  activeRoomIndex: number = 0;
  totalWallSpace: number = 0;

  constructor(private resolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) {}

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

  setNumberOfRooms(value: number) {
    this.numberOfRooms = value;
    this.currentRoomIndex = 0;
    this.activeRoomIndex = 0;
    this.createRooms();
  }

  createRooms() {
    this.rooms = [];
    this.currentRoomIndex = 0;
    this.viewContainerRef.clear();

    for (let i = 0; i < this.numberOfRooms; i++) {
      const factory = this.resolver.resolveComponentFactory(RectangleComponent);
      const componentRef = this.viewContainerRef.createComponent(factory);
      const room = componentRef.instance as RectangleComponent;
      this.rooms.push(room);
    }
  }

  nextRoom() {
    if (this.currentRoomIndex < this.numberOfRooms) {
      const currentRoom = this.rooms[this.currentRoomIndex];
      const area = currentRoom.area;

      if (area) {
        this.currentRoomIndex++;
        this.activeRoomIndex++;
      } else {
        alert("Please enter the area for the current room.");
      }
    }
  }

  onAreaCalculated(event: Event) {
    const area = +(event.target as HTMLInputElement).value;
    this.rooms[this.currentRoomIndex - 1].area = area;
  }

  calculateTotalWallSpace() {
    this.totalWallSpace = 0;
    for (const room of this.rooms) {
      this.totalWallSpace += room.area;
    }
    return this.totalWallSpace;
  }
}
