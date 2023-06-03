import { AfterViewInit, Component, ComponentFactoryResolver, ViewContainerRef, ViewChild, ElementRef} from '@angular/core';
import { RectangleComponent } from '../rectangle/rectangle.component';
import { OtherComponent } from '../other/other.component';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
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
  rectRoomsArray!: number[];
  otherRoomsArray!: number[];
  widthArray!: number[];
  heightArray!: number[];
  lengthArray!: number[];
  areaArray!: number[];
  galArray!:number[];
  otherWidthArray!: number[];
  otherHeightArray!: number[];
  otherAreaArray!: number[];
  otherGalArray!: number[];
  otherQuartArray!: number[];
  numberOfOtherRooms: number = 0;
  numberOfRectRooms: number = 0;
  showComponent = '';
  lastRoom: boolean = false;
  wallsArray!: number[];
  activeTab: number = 0;
  roomsDetails: {height: number, width: number, area: number}[][] = [];
  private _rooms = new BehaviorSubject<any[]>([]);
  @ViewChild('roomsContainer') roomsContainer!: ElementRef;
  @ViewChild(RectangleComponent) rectangleComponent!: RectangleComponent;
  @ViewChild(OtherComponent) otherComponent!: OtherComponent;



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
    this.heightArray = new Array(value).fill(null);
    this.widthArray = new Array(value).fill(null);
    this.lengthArray = new Array(value).fill(null);
    this.areaArray = new Array(value).fill(null);
    this.galArray = new Array(value).fill(null);
    this.otherHeightArray = new Array(value).fill(null);
    this.otherWidthArray = new Array(value).fill(null);
    this.otherAreaArray = new Array(value).fill(null);
    this.otherGalArray = new Array(value).fill(null);
    this.otherQuartArray = new Array(value).fill(null);
  }

handleArea(value: number){
  this.area = value;
 }

  handleRoomDetails(walls: {height: number, width: number, area: number}[]) {
    this.roomsDetails.push(walls);
  }
nextRoom() {
  if (this.currentRoomIndex < this.numberOfRooms) {
    if (this.area){
      if (this.showComponent == 'rectangle' && this.rectangleComponent.height != null && this.rectangleComponent.width != null && this.rectangleComponent.length != null && this.rectangleComponent.area != null && this.rectangleComponent.gals !=null) {
        this.heightArray[this.currentRoomIndex - this.numberOfOtherRooms] = this.rectangleComponent.height;
        this.widthArray[this.currentRoomIndex - this.numberOfOtherRooms] = this.rectangleComponent.width;
        this.lengthArray[this.currentRoomIndex - this.numberOfOtherRooms] = this.rectangleComponent.length;
        this.areaArray[this.currentRoomIndex - this.numberOfOtherRooms] = this.rectangleComponent.area;
        this.galArray[this.currentRoomIndex - this.numberOfOtherRooms] = this.rectangleComponent.gals;
      }
      else  if (this.showComponent == 'other'){
        this.wallsArray = this.otherComponent.wallsArray;
        this.otherHeightArray = this.otherComponent.heightArray;
        this.otherWidthArray = this.otherComponent.widthArray;
        this.otherAreaArray = this.otherComponent.areaArray;
      }
      if (this.showComponent == 'rectangle'){
        this.totalArea += this.area;
        this.rectangleComponent.reset();
        this.area = this.rectangleComponent.area!;
        this.currentRoomIndex++;
        this.numberOfRectRooms++;
        this.showComponent = '';
      }
     else if (this.showComponent == 'other'){
       this.totalArea += this.area;
       this.otherComponent.reset();
       this.area = this.otherComponent.area!;
       this.currentRoomIndex++;
        this.numberOfOtherRooms++;
       this.otherComponent.currentWallIndex = 0;
       this.otherComponent.numberOfWalls = 0;
       this.showComponent = '';

      }
    }else {
      alert('Please enter the area for the current room.');
    }

    if (this.currentRoomIndex == this.numberOfRooms -1) {
      this.lastRoom = true;

    }
    if (this.lastRoom){
      this.rectRoomsArray = Array.from({length: this.numberOfRectRooms}, (_, i) => i) ;
      this.otherRoomsArray = Array.from({length: this.numberOfOtherRooms}, (_, i) => i) ;
    }
  }
}

}
