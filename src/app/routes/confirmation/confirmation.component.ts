import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
  standalone: true,
  imports:[RouterModule, RouterOutlet],
})
export class ConfirmationComponent {
  constructor(private router: Router) {}

  navigateToHome(): void {
    this.router.navigate(['/main']); // Шлях до головної сторінки
  }
}
