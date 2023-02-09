import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {
  show: boolean = false;
  cor: boolean = false;

  constructor() { }

  ngOnInit(): void {}

  showMessage(): void {
    this.show = !this.show; // Toggle, é !this.show faz trabalhar sempre com o inverso da situação.

    }

    }


