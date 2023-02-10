import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})
export class ListRenderComponent implements OnInit {
  animals = [
    {name: "Turca", Type: "Dog"},
    {name: "Tom", Type: "Cat"},
    {name:"Frida", Type: "Dog"},
    {name:"Bod", Type: "Horse"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
