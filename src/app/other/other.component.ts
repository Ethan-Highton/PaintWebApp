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
  currentWallIndex: number = 0;
  width!: number | null;
  height!: number | null;
  area!: number;
  gals!: number;
  totalArea: number = 0;
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
    this.currentWallIndex = 1;
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
  nextWall(){
    this.area = this.width! * this.height!;
    this.totalArea += this.area ;
    if (this.area){
      this.currentWallIndex++;
      console.log(this.totalArea)
      this.width = null;
      this.height = null;
    }
    else {
      alert("Please enter all dimensions.")
    }
  }




}


