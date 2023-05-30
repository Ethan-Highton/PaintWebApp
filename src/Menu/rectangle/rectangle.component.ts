import { Component, ViewChild,ElementRef, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {
  width!: number;
  length!: number;
  height!: number;
  area!: number;
  gals!: number;
  showResults = false;
  allInputsFilled = false;
  scale: number = 15; //
  genWidth: number = 0;
  genLength: number = 0;
  genHeight: number = 0;
  cubeTransform: string = '';

  nativeElement: any;
  @ViewChild('rectangle') rectangleElementRef!: ElementRef;
  nativeElementRef!: HTMLElement;
  @Input() isVisible: boolean = false;
  @Output() nextButtonClicked = new EventEmitter<void>();
  @Input() showNextButton: boolean = false;

  getWidthInPixels() {
    this.genWidth = this.width * this.scale;
  }

  getLengthInPixels() {
     this.genLength = this.length * this.scale;
  }
  getHeightInPixels() {
    this.genHeight = this.height * this.scale;
  }
  checkInputs() {
    if (this.width && this.length && this.height) {
      this.allInputsFilled = true;
    } else {
      this.allInputsFilled = false;
    }
  }

  calculate() {
    this.area = 2 * (this.width * this.height) + 2 * (this.length * this.height);
    this.showResults = true;
    this.gals = this.area / 400;
    console.log(this.area)
  }



}

