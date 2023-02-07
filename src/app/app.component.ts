import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName = 'Joaquim';

  userData = {
    email: 'Joaquim@gmail.com',
    role: 'Adimin',
    fone: 81900000000,
  };

  title = 'curso-angular';
}
