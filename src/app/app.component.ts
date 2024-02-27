import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'Bonjour';
  isAdmin: boolean = true;

  setIsAdmin():void {
    this.isAdmin= !this.isAdmin;
  }
}
