import { AfterViewInit, Component, ComponentFactoryResolver, ViewContainerRef, ViewChild, ElementRef} from '@angular/core';
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
  isCalculatingTotalSpace: boolean = false;
  showTotalSpace: boolean = false;
  showCalculateButton = true;
  area!: number;

  @ViewChild('roomsContainer') roomsContainer!: ElementRef;
  @ViewChild(RectangleComponent) rectangleComponent!: RectangleComponent;
  constructor(
  private resolver: ComponentFactoryResolver,
  private viewContainerRef: ViewContainerRef,
) {}


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
  }

 /** createRooms() {
  this.rooms = [];
  this.currentRoomIndex = 0;
  this.viewContainerRef.clear();

  for (let i = 0; i < this.numberOfRooms; i++) {
    const factory = this.resolver.resolveComponentFactory(RectangleComponent);
    const componentRef = this.viewContainerRef.createComponent(factory);
    const room = componentRef.instance as RectangleComponent;

    // Set the isVisible property for each room
    room.isVisible = i === 0; // Set the first room as visible, and the rest as hidden
    room.nextButtonClicked.subscribe(() => this.nextRoom());
    room.showNextButton = true;
    if (i === 0) {
      this.activeRoomIndex = i;
      room.nativeElementRef = componentRef.location.nativeElement;
    } else {
      room.nativeElementRef = componentRef.location.nativeElement;
      room.nativeElementRef.style.display = 'none'; // Hide the component element
    }

    this.rooms.push(room);
  }
}**/
handleArea(value: number){
  this.area = value;
 }

nextRoom() {
  if (this.currentRoomIndex < this.numberOfRooms) {


    if (this.area){
      alert('working')
    }


    else {
      alert('Please enter the area for the current room.');
    }
  } else {
    alert('broke')
  }
}




  calculateTotalWallSpace() {
    this.totalWallSpace = 0;
    for (const room of this.rooms) {
      this.totalWallSpace += room.area;
    }
    this.showTotalSpace = true;
    this.showCalculateButton = false;
  }
}
