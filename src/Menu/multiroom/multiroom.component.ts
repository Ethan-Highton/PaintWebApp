import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-multiroom',
  templateUrl: './multiroom.component.html',
  styleUrls: ['./multiroom.component.css']
})
export class MultiroomComponent implements AfterViewInit {
  numbersArray: number[] = Array.from({ length: 10 }, (_, i) => i + 1);
  isDropdownVisible = false;
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
}

