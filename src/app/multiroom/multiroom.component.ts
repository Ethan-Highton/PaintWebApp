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
  currentRoomIndex: number = 0;
  activeRoomIndex: number = 0;
  area!: number;
  totalArea: number = 0;
  roomsArray!: number[];
  widthArray!: number[];
  heightArray!: number[];
  lengthArray!: number[];
  areaArray!: number[];
  galArray!:number[];

  @ViewChild('roomsContainer') roomsContainer!: ElementRef;
  @ViewChild(RectangleComponent) rectangleComponent!: RectangleComponent;

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
    this.roomsArray =Array.from({length:value}, (_, i) => i + 1) ;
    this.heightArray = new Array(value).fill(null);
    this.widthArray = new Array(value).fill(null);
    this.lengthArray = new Array(value).fill(null);
    this.areaArray = new Array(value).fill(null);
    this.galArray = new Array(value).fill(null);
  }

handleArea(value: number){
  this.area = value;
 }

nextRoom() {
  if (this.currentRoomIndex < this.numberOfRooms) {
    if (this.area){
      if (this.rectangleComponent.height != null && this.rectangleComponent.width != null && this.rectangleComponent.length != null && this.rectangleComponent.area != null && this.rectangleComponent.gals !=null) {
        this.heightArray[this.currentRoomIndex] = this.rectangleComponent.height;
        this.widthArray[this.currentRoomIndex] = this.rectangleComponent.width;
        this.lengthArray[this.currentRoomIndex] = this.rectangleComponent.length;
        this.areaArray[this.currentRoomIndex] = this.rectangleComponent.area;
        this.galArray[this.currentRoomIndex] = this.rectangleComponent.gals;
      }
      this.totalArea += this.area;
      this.rectangleComponent.reset()
      this.area = this.rectangleComponent.area!
      this.currentRoomIndex++
      if (this.currentRoomIndex == this.numberOfRooms - 1) {
        this.rectangleComponent.showNextButton = false;
        this.rectangleComponent.showResultButton = true;
      }
    }
    else {
      alert('Please enter the area for the current room.');
    }
  }
}

}
