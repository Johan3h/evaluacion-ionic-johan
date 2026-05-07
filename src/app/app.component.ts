import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
  { title: 'Inicio', url: '/folder/inicio', icon: 'home' },
  { title: 'Información personal', url: '/folder/informacion', icon: 'person' },
  { title: 'Contacto', url: '/folder/contacto', icon: 'mail' }
];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
