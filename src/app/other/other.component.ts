import {Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {MultiroomComponent} from '../multiroom/multiroom.component';
@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent {
  numbersArray: number[] = Array.from({ length: 4 }, (_, i) => i + 3);
  isDropdownVisible = false;
  numberOfWalls!: number;
  currentWallIndex: number = 0;
  width!: number | null;
  height!: number | null;
  wallArea!: number;
  gals!: number;
  area: number = 0;
  ceilingArea: number = 0;
  showResults = false;
  allInputsFilled = false;
  nativeElement: any;
  widthArray!: number[];
  heightArray!: number[];
  areaArray!: number[];
  wallsArray!: number[];
  walls: {height: number, width: number, area: number}[] = [];
  @ViewChild('rectangle') rectangleElementRef!: ElementRef;
  nativeElementRef!: HTMLElement;
  @Input() isVisible: boolean = false;
  @Output() nextButtonClicked = new EventEmitter<number>();
  @Input() lastRoom!: boolean;
  @Output() areaCalculated = new EventEmitter<number>();
  @ViewChild(MultiroomComponent) multiroomComponent!: MultiroomComponent;
  @Output() roomDetails: EventEmitter<any> = new EventEmitter();
  @Output() roomNameEntered = new EventEmitter<string>();
  roundedGals: any;

  showDropdown(event: MouseEvent) {
    this.isDropdownVisible = true;
  }

  hideDropdown(event: MouseEvent) {
    this.isDropdownVisible = false;
  }
  setNumberOfWalls(value: number) {
    this.numberOfWalls = value;
    this.currentWallIndex = 1;
    this.wallsArray =Array.from({length:value}, (_, i) => i + 1) ;
    this.heightArray = new Array(value).fill(null);
    this.widthArray = new Array(value).fill(null);
    this.areaArray = new Array(value).fill(null);
  }



  checkInputs() {
    if (this.width && this.height) {
      this.allInputsFilled = true;
    } else {
      this.allInputsFilled = false;
    }
  }

  nextWall(){
    this.wallArea = this.width! * this.height!;
    this.area += this.wallArea ;
    if (this.wallArea){
      if (this.height != null && this.width != null ) {
        this.heightArray[this.currentWallIndex - 1] = this.height;
        this.widthArray[this.currentWallIndex - 1] = this.width;
        this.areaArray[this.currentWallIndex - 1] = this.wallArea;
        let wall = {height: this.height, width: this.width, area: this.wallArea};
        this.walls.push(wall);
      }

      this.currentWallIndex++;
      this.width = null; //problem is here
      this.height = null;
      if (this.currentWallIndex > this.numberOfWalls){
        if (this.numberOfWalls === 3) {
          let a = +this.widthArray[0];
          let b = +this.widthArray[1];
          let c = +this.widthArray[2];
          let semi = (a + b + c) / 2;
          this.ceilingArea = Math.sqrt(semi * (semi - a) * (semi - b) * (semi - c));
        }
        this.areaCalculated.emit(this.area);
        this.gals = this.area / 400;
        let galsStep = this.gals;
        this.roundedGals = parseFloat(this.gals.toFixed(2));
        this.roomDetails.emit(this.walls);
      }
    }
    else {
      alert("Please enter all dimensions.")
    }

  }

  reset(){
    this.width = null;
    this.gals = 0;
    this.height = null;
    this.area = 0;
    this.walls = [];
  }


}


