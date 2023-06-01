import { Component, ViewChild,ElementRef, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {
  width: number | null = null;
  length: number | null = null;
  height: number | null = null;
  area: number | null = null;
  gals: number | null = null;
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
  @Output() nextButtonClicked = new EventEmitter<number>();
  @Input() showNextButton: boolean = false;
  @Output() areaCalculated = new EventEmitter<number>();
  @Input() showResultButton: boolean = false;

reset(){
  this.width = null;
  this.gals = null;
  this.length = null;
  this.height = null;
  this.area = null;
}
  getWidthInPixels() {
    this.genWidth = this.width! * this.scale;
  }

  getLengthInPixels() {
     this.genLength = this.length! * this.scale;
  }
  getHeightInPixels() {
    this.genHeight = this.height! * this.scale;
  }
  checkInputs() {
    if (this.width && this.length && this.height) {
      this.allInputsFilled = true;
    } else {
      this.allInputsFilled = false;
    }
  }

  calculate() {
    this.area = 2 * (this.width! * this.height!) + 2 * (this.length! * this.height!);
    this.showResults = true;
    this.gals = this.area / 400;
    console.log(this.area)
    this.areaCalculated.emit(this.area);
  }



}

