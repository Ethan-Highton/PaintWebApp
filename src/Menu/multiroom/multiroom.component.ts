import { AfterViewInit, Component, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
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
  currentRoomIndex: number = 0;
  activeRoomIndex: number = 0;

  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;
  
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
    this.rooms = [];
    this.createRooms();
  }

  constructor(private resolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) {}
  
  createRooms() {
    this.rooms = [];
  
    for (let i = 0; i < this.numberOfRooms; i++) {
      const factory = this.resolver.resolveComponentFactory(RectangleComponent);
      const componentRef = this.viewContainerRef.createComponent(factory);
      const room = componentRef.instance as RectangleComponent;
      this.rooms.push(room);
    }
  }
  nextRoom() {
    if (this.currentRoomIndex < this.numberOfRooms) {
      this.currentRoomIndex++;
      this.activeRoomIndex++;
    }
  }
  onAreaCalculated(area: number) {
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




