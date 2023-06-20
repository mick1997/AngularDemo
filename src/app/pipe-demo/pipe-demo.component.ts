import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent {

  presentDate = new Date();
  price: number = 25000;
  jsonData = {userId: 10011, name: {userName: "John"}};

  decimalNum1: number = 8.5432215;
  decimalNum2: number = 5.45;
  decimalNum3: number = 0.8178;
  num: number = 888;

  Fruits = ["Apple", "Orange", "Grape", "Mango", "Kiwi", "Pomegranate"];
}
