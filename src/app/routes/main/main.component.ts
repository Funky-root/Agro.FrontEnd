import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'home',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: 'main.component.html',
  styleUrl: 'main.component.scss'
})
export class MainComponent {
  title = 'agrot';
}
