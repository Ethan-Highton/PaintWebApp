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
  quarts: number | null = null;
  ceilingArea: number | null = null;
  ceilingGals: number | null = null;
  ceilingQuarts: number | null = null;
  coverage: number = 400;
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
  @Input() lastRoom!: boolean;
  @Output() areaCalculated = new EventEmitter<number>();


reset(){
  this.width = null;
  this.gals = null;
  this.length = null;
  this.height = null;
  this.area = null;
  this.ceilingGals = null;
  this.ceilingArea = null;
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
    this.gals = this.area / this.coverage;
    this.quarts = this.gals * 4;
    this.ceilingArea = this.width! * this.length!;
    this.ceilingGals = this.ceilingArea! / this.coverage;
    this.ceilingQuarts = this.ceilingGals * 4;
    this.areaCalculated.emit(this.area);
  }


  protected readonly console = console;
}

