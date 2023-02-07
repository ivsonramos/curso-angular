import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Ivson';
  age: number = 35;
  job = 'Programador';
  hobbies = ['Correr', 'Jogar', 'Estudars'];
  car = {
    name: 'Celta',
    year: 2012,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
