import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'home',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: 'main.component.html',
  styleUrl: 'main.component.scss'
})
export class MainComponent {
  title = 'agrot';
}
