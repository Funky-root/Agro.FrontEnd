import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'adv-create',
  templateUrl: 'adv-create.component.html',
  styleUrls: ['adv-create.component.css'],
  standalone: true,
  imports:[RouterModule, RouterOutlet]
})
export class AdvCreateComponent {
  onSubmit() {
    console.log('Форма відправлена!');
    // Логіка для обробки даних форми
  }

  onCancel() {
    console.log('Форма скасована!');
    // Логіка для скасування форми
  }
}
