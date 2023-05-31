import { Component } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.room.component.html',
  styleUrls: ['./one.room.component.css']
})
export class OneRoomComponent {
  selectedOption: string = "";

  updateSelectedOption(option: string) {
    if (this.selectedOption === option) {
      this.selectedOption = "";
    } else {
      this.selectedOption = option;
    }
  }
}
