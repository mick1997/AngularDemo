import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.css'],
})
export class DirectiveDemoComponent {
  isLogIn: boolean = true;
  isLogout: boolean = false;

  year: number | undefined;
  isLeapYear: boolean = true;

  checkLeapYear() {
    if (this.year !== undefined) {
      this.isLeapYear = (this.year % 4 === 0 && this.year % 100 !== 0) || (this.year % 400 === 0);
    }
    else {
      this.isLeapYear = false;
    }
  }
}
